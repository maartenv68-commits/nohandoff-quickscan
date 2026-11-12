// UI van de quickscan. States uit spec §4: intro, vraag, onvolledig, uitslag, verzenden, verzonden, fout.
import { VRAGEN, NIVEAUS, ZWAKSTE_TIP, DIMENSIES } from "./vragen.js";
import { aantalBeantwoord, uitslag, magVersturen } from "./regels.js";

const COPY = { // spec §8
  "intro.titel": "Waar staat jouw team met AI?",
  "intro.tekst": "8 vragen, 3 minuten. Je ziet meteen op welk van de vier niveaus jullie staan en wat een logische volgende stap is. Geen e-mail nodig.",
  "intro.knop": "Start de quickscan",
  "vraag.teller": "Vraag {n} van 8",
  "knop.vorige": "Vorige", "knop.volgende": "Volgende", "knop.uitslag": "Bekijk uitslag",
  "onvolledig.melding": "Je hebt {x} van 8 vragen beantwoord. Beantwoord de open vragen om je uitslag te zien.",
  "uitslag.kop": "Jullie staan op niveau {niveau}: {naam}",
  "uitslag.zwakste": "Jullie zwakste kant: {dimensie}",
  "uitslag.disclaimer": "Dit is een gespreksopener, geen meting. In een gesprek kijken we samen of het klopt.",
  "mail.label": "Stuur me de uitslag (optioneel)",
  "mail.toestemming": "Ik vind het goed dat No Handoff mijn e-mailadres gebruikt om de uitslag te sturen en één keer contact op te nemen.",
  "mail.knop": "Verstuur", "mail.verzenden": "Bezig met versturen…",
  "mail.verzonden": "Verstuurd. Je krijgt de uitslag binnen een paar minuten.",
  "mail.fout": "Versturen lukte niet. Je antwoorden staan er nog; probeer het opnieuw.",
  "mail.ongeldig": "Vul een geldig e-mailadres in en vink de toestemming aan.",
  "uitslag.gesprek": "Plan een gesprek →",
};
const t = (k, vars = {}) => COPY[k].replace(/\{(\w+)\}/g, (_, v) => vars[v]);
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
const VORM = { Strategie: "kwart", Cultuur: "cirkel", Proces: "blok", Uitkomst: "half" };

const state = { scherm: "intro", vraag: 0, antwoorden: {}, mail: "idle", email: "", toestemming: false, melding: "" };
const app = document.getElementById("app");

function render() {
  const s = state.scherm;
  if (s === "intro") app.innerHTML = `
    <section class="kaart intro">
      <p class="eyebrow">Quickscan</p>
      <h1>${t("intro.titel")}</h1>
      <p class="lead">${t("intro.tekst")}</p>
      <div class="vormen" aria-hidden="true">${DIMENSIES.map(d => `<span class="vorm ${VORM[d]}"></span>`).join("")}</div>
      <button class="knop primair" data-actie="start">${t("intro.knop")}</button>
    </section>`;
  if (s === "vraag" || s === "onvolledig") {
    const v = VRAGEN[state.vraag], n = state.vraag + 1, x = aantalBeantwoord(state.antwoorden), laatste = n === VRAGEN.length;
    app.innerHTML = `
      <section class="kaart">
        <div class="voortgang" role="progressbar" aria-valuemin="0" aria-valuemax="8" aria-valuenow="${x}" aria-label="${x} van 8 beantwoord"><span style="width:${x / 8 * 100}%"></span></div>
        <p class="eyebrow"><span class="vorm klein ${VORM[v.dimensie]}" aria-hidden="true"></span>${v.dimensie} · ${t("vraag.teller", { n })}</p>
        <fieldset>
          <legend><h2>${esc(v.vraag)}</h2></legend>
          ${v.antwoorden.map((a, i) => `
            <label class="antwoord">
              <input type="radio" name="${v.id}" value="${i + 1}" ${state.antwoorden[v.id] === i + 1 ? "checked" : ""}>
              <span>${esc(a)}</span>
            </label>`).join("")}
        </fieldset>
        ${s === "onvolledig" ? `<p class="melding info" role="status">${t("onvolledig.melding", { x })}</p>` : ""}
        <div class="acties">
          <button class="knop secundair" data-actie="vorige" ${n === 1 ? "disabled" : ""}>${t("knop.vorige")}</button>
          ${laatste ? `<button class="knop primair" data-actie="uitslag">${t("knop.uitslag")}</button>`
                    : `<button class="knop primair" data-actie="volgende">${t("knop.volgende")}</button>`}
        </div>
      </section>`;
    app.querySelector("legend h2").setAttribute("tabindex", "-1");
  }
  if (s === "uitslag") {
    const u = uitslag(state.antwoorden), nv = NIVEAUS[u.niveau];
    const mailMelding = { verzenden: ["info", t("mail.verzenden")], verzonden: ["gelukt", t("mail.verzonden")], fout: ["fout", t("mail.fout")] }[state.mail];
    app.innerHTML = `
      <section class="uitslag">
        <p class="eyebrow licht">Jullie uitslag</p>
        <h1>${t("uitslag.kop", { niveau: u.niveau, naam: nv.naam })}</h1>
        <p class="lead">${nv.uitleg}</p>
        <div class="niveaus" aria-hidden="true">${[1, 2, 3, 4].map(i => `<span class="${i <= u.niveau ? "aan" : ""}">${i}</span>`).join("")}</div>
      </section>
      <section class="raster">
        <div class="kaart">
          <p class="eyebrow">Volgende stap</p>
          <p class="groot">${nv.stap}</p>
          <a class="knop primair" href="/#contact">${t("uitslag.gesprek")}</a>
        </div>
        <div class="kaart">
          <p class="eyebrow">${t("uitslag.zwakste", { dimensie: u.zwakste })}</p>
          <p>${ZWAKSTE_TIP[u.zwakste]}</p>
          <ul class="scores">${DIMENSIES.map(d => `<li><span class="vorm klein ${VORM[d]}" aria-hidden="true"></span>${d}<span class="balk"><span style="width:${u.scores[d] / 4 * 100}%"></span></span><span class="getal">${u.scores[d].toFixed(1).replace(".", ",")}</span></li>`).join("")}</ul>
        </div>
      </section>
      <section class="kaart">
        <form class="mail" novalidate>
          <p class="eyebrow">${t("mail.label")}</p>
          <div class="rij">
            <label class="sr" for="email">E-mailadres</label>
            <input id="email" type="email" autocomplete="email" placeholder="naam@bureau.nl" value="${esc(state.email)}" ${state.mail === "verzonden" ? "disabled" : ""}>
            <button class="knop primair" type="submit" ${["verzenden", "verzonden"].includes(state.mail) ? "disabled" : ""}>${t("mail.knop")}</button>
          </div>
          <label class="vinkje"><input type="checkbox" id="toestemming" ${state.toestemming ? "checked" : ""}> <span>${t("mail.toestemming")}</span></label>
          <div aria-live="assertive">${state.melding ? `<p class="melding fout">${state.melding}</p>` : ""}${mailMelding ? `<p class="melding ${mailMelding[0]}">${mailMelding[1]}</p>` : ""}</div>
        </form>
        <p class="disclaimer">${t("uitslag.disclaimer")}</p>
      </section>`;
  }
}

function naar(scherm, focus) {
  state.scherm = scherm; render();
  const el = app.querySelector(focus || "h1, legend h2");
  if (el) el.focus?.();
}

app.addEventListener("change", e => {
  if (e.target.type === "radio") state.antwoorden[e.target.name] = Number(e.target.value);
  if (e.target.id === "toestemming") state.toestemming = e.target.checked;
});
app.addEventListener("input", e => { if (e.target.id === "email") state.email = e.target.value; });

app.addEventListener("click", e => {
  const a = e.target.closest("[data-actie]")?.dataset.actie;
  if (!a) return;
  if (a === "start") { state.vraag = 0; naar("vraag", "legend h2"); }
  if (a === "volgende") { state.vraag++; naar("vraag", "legend h2"); }
  if (a === "vorige") { state.vraag--; naar("vraag", "legend h2"); }
  if (a === "uitslag") {
    if (aantalBeantwoord(state.antwoorden) < VRAGEN.length) {  // AC3
      naar("onvolledig", ".melding");
      const open = VRAGEN.findIndex(v => !state.antwoorden[v.id]);
      app.querySelector(".melding").insertAdjacentHTML("beforeend", ` <button class="link" data-ga="${open}">Naar vraag ${open + 1}</button>`);
    } else naar("uitslag", "h1");
  }
});
app.addEventListener("click", e => {
  const ga = e.target.closest("[data-ga]");
  if (ga) { state.vraag = Number(ga.dataset.ga); naar("vraag", "legend h2"); }
});

app.addEventListener("submit", async e => {
  e.preventDefault();
  state.melding = "";
  if (!magVersturen(state.email, state.toestemming)) { state.melding = t("mail.ongeldig"); render(); return; } // AC5
  const u = uitslag(state.antwoorden);
  state.mail = "verzenden"; render();
  try {
    const body = new URLSearchParams({ "form-name": "quickscan", email: state.email.trim(), niveau: String(u.niveau),
      scores: JSON.stringify(u.scores), toestemming: "ja" });
    const r = await fetch("/", { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body });
    if (!r.ok) throw new Error(r.status);
    state.mail = "verzonden";
  } catch { state.mail = "fout"; }   // AC6: uitslag en antwoorden blijven staan
  render();
});

render();
