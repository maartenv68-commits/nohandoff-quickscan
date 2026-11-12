// Tests per acceptatiecriterium (spec §10). Draai: node --test tests/
import { test } from "node:test";
import assert from "node:assert/strict";
import { niveau, dimensieScores, zwaksteDimensie, uitslag, magVersturen, aantalBeantwoord } from "../app/regels.js";

const alle = (arr) => Object.fromEntries(arr.map((v, i) => ["V" + (i + 1), v]));

test("AC1 · gemiddelde 2,875 geeft niveau 2 (naar beneden afronden)", () => {
  const a = alle([3, 3, 3, 3, 3, 3, 3, 2]); // som 23 / 8 = 2,875
  assert.equal(niveau(a), 2);
  assert.equal(niveau(alle([4, 4, 4, 4, 4, 4, 4, 4])), 4);
  assert.equal(niveau(alle([1, 1, 1, 1, 1, 1, 1, 2])), 1);
});

test("AC2 · zwakste dimensie, bij gelijke stand de eerste in volgorde", () => {
  const a = alle([2, 2, 1, 2, 1, 2, 3, 3]); // Strategie 2, Cultuur 1,5, Proces 1,5, Uitkomst 3
  const s = dimensieScores(a);
  assert.deepEqual(s, { Strategie: 2, Cultuur: 1.5, Proces: 1.5, Uitkomst: 3 });
  assert.equal(zwaksteDimensie(s), "Cultuur");
});

test("AC3 · telt beantwoorde vragen voor de onvolledig-melding", () => {
  assert.equal(aantalBeantwoord({ V1: 1, V2: 2, V3: 3, V4: 4, V5: 1, V6: 2 }), 6);
  assert.throws(() => uitslag({ V1: 1, V2: 2, V3: 3, V4: 4, V5: 1, V6: 2 }));
});

test("AC5 · versturen alleen met geldig adres én toestemming", () => {
  assert.equal(magVersturen("maarten@nohandoff.nl", false), false);
  assert.equal(magVersturen("geen-adres", true), false);
  assert.equal(magVersturen("  maarten@nohandoff.nl ", true), true);
});

test("AC7 · weigert ontbrekende vragen en waarden buiten 1–4", () => {
  assert.throws(() => niveau(alle([1, 2, 3, 4, 1, 2, 3])), /V8/);
  assert.throws(() => niveau(alle([1, 2, 3, 4, 1, 2, 3, 5])), /V8/);
  assert.throws(() => niveau(alle([0, 2, 3, 4, 1, 2, 3, 4])), /V1/);
});
