// Rekenregels uit spec §3 (R1–R5, R7). Puur: geen DOM, zodat elke regel te testen is.
import { VRAGEN, DIMENSIES } from "./vragen.js";

export function controleer(antwoorden) {
  // AC7: weiger ontbrekende vragen of waarden buiten 1–4
  for (const v of VRAGEN) {
    const a = antwoorden[v.id];
    if (!Number.isInteger(a) || a < 1 || a > 4) throw new Error(`Ongeldig of ontbrekend antwoord voor ${v.id}`);
  }
}

export function aantalBeantwoord(antwoorden) {
  return VRAGEN.filter(v => Number.isInteger(antwoorden[v.id])).length;
}

export function dimensieScores(antwoorden) {
  controleer(antwoorden);
  return Object.fromEntries(DIMENSIES.map(d => {
    const vs = VRAGEN.filter(v => v.dimensie === d);
    return [d, vs.reduce((s, v) => s + antwoorden[v.id], 0) / vs.length];
  }));
}

export function niveau(antwoorden) {
  controleer(antwoorden);
  const som = VRAGEN.reduce((s, v) => s + antwoorden[v.id], 0);
  return Math.floor(som / VRAGEN.length);
}

export function zwaksteDimensie(scores) {
  // R5: laagste score; bij gelijke stand de eerste in DIMENSIES-volgorde
  return DIMENSIES.reduce((min, d) => (scores[d] < scores[min] ? d : min), DIMENSIES[0]);
}

export function uitslag(antwoorden) {
  const scores = dimensieScores(antwoorden);
  return { niveau: niveau(antwoorden), scores, zwakste: zwaksteDimensie(scores) };
}

export function magVersturen(email, toestemming) {
  // R7
  return toestemming === true && /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(String(email).trim());
}
