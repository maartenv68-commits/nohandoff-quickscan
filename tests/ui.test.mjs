// UI-tests voor AC3, AC4 en AC6 in een echte browser (Playwright).
// Slaat over als Playwright niet geïnstalleerd is (bijv. in CI). Lokaal: npm i -D playwright && npx playwright install chromium
import { test } from "node:test";
import assert from "node:assert/strict";
import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { extname, join } from "node:path";
import { fileURLToPath } from "node:url";

import { createRequire } from "node:module";
let pw; try { pw = await import("playwright"); } catch { try { pw = createRequire(import.meta.url)("playwright"); } catch { pw = null; } }
const root = fileURLToPath(new URL("../app/", import.meta.url));
const types = { ".html": "text/html", ".js": "text/javascript", ".css": "text/css" };

async function metBrowser(postStatus, fn) {
  const srv = createServer(async (req, res) => {
    if (req.method === "POST") { res.writeHead(postStatus); return res.end(); }
    try { const f = join(root, req.url === "/" ? "index.html" : req.url.split("?")[0]);
      res.writeHead(200, { "Content-Type": types[extname(f)] || "text/plain" }); res.end(await readFile(f)); }
    catch { res.writeHead(404); res.end(); }
  }).listen(0);
  const b = await pw.chromium.launch(); const p = await b.newPage();
  await p.route(/fonts\.(googleapis|gstatic)/, r => r.abort());
  try { await p.goto(`http://127.0.0.1:${srv.address().port}/`); await fn(p); }
  finally { await b.close(); srv.close(); }
}
async function beantwoord(p, aantal, waarde = 3) {
  await p.click("text=Start de quickscan");
  for (let i = 0; i < 8; i++) {
    if (i < aantal) await p.locator(".antwoord").nth(waarde - 1).click();
    if (i < 7) await p.click("text=Volgende");
  }
  await p.click("text=Bekijk uitslag");
}

test("AC3 · onvolledig: geen uitslag, wel melding met aantal", { skip: !pw && "Playwright ontbreekt" }, () =>
  metBrowser(200, async p => {
    await p.click("text=Start de quickscan");
    for (let i = 0; i < 8; i++) { if (i < 6) await p.locator(".antwoord").nth(1).click(); if (i < 7) await p.click("text=Volgende"); }
    await p.click("text=Bekijk uitslag");
    assert.match(await p.textContent(".melding"), /Je hebt 6 van 8 vragen beantwoord/);
    assert.equal(await p.locator(".uitslag").count(), 0);
  }));

test("AC4 · uitslag toont niveau, naam, zwakste kant, stap en disclaimer zonder e-mail", { skip: !pw && "Playwright ontbreekt" }, () =>
  metBrowser(200, async p => {
    await beantwoord(p, 8, 3);
    const tekst = await p.textContent("main");
    assert.match(tekst, /Jullie staan op niveau 3: Gedeelde keten/);
    assert.match(tekst, /Jullie zwakste kant: Strategie/);
    assert.match(tekst, /pilot van tien dagen/);
    assert.match(tekst, /gespreksopener, geen meting/);
  }));

test("AC6 · verzenden mislukt: foutmelding, uitslag blijft, opnieuw kan", { skip: !pw && "Playwright ontbreekt" }, () =>
  metBrowser(500, async p => {
    await beantwoord(p, 8, 2);
    await p.fill("#email", "test@voorbeeld.nl"); await p.check("#toestemming");
    await p.click("button:has-text('Verstuur')");
    await p.waitForSelector(".melding.fout");
    assert.match(await p.textContent(".melding.fout"), /Versturen lukte niet/);
    assert.equal(await p.locator(".uitslag").count(), 1);
    assert.equal(await p.locator("button:has-text('Verstuur')").isDisabled(), false);
  }));
