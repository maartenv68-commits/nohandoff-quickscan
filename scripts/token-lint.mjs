// Faalt als app/*.css of app/*.js losse kleurcodes bevat buiten tokens.css.
import { readdirSync, readFileSync } from "node:fs";
const dir = new URL("../app/", import.meta.url);
const bad = [];
for (const f of readdirSync(dir)) {
  if (f === "tokens.css" || !/\.(css|js|html)$/.test(f)) continue;
  readFileSync(new URL(f, dir), "utf8").split("\n").forEach((l, i) => {
    const m = l.match(/#[0-9a-fA-F]{3,8}\b|rgba?\(|hsla?\(/);
    if (m && !/token-lint: ok/.test(l)) bad.push(`app/${f}:${i + 1}  ${l.trim()}`);
  });
}
if (bad.length) { console.error("Losse kleuren gevonden (gebruik var(--color-…)):\n" + bad.join("\n")); process.exit(1); }
console.log("Token-lint: geen losse kleuren.");
