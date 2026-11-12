# Beslislog

Alleen mensen schrijven hier. Agents lezen alleen besluiten met status **actief**.
Elke regel heeft een "herzien als": de voorwaarde waaronder het besluit weer open gaat.

> Opzet: B-001 t/m B-005 zijn bij het opzetten van dit project als **voorstel** genoteerd door Claude.
> Maarten zet ze op *actief* (of past ze aan) in de eerste pull request. Tot die tijd gelden ze als werkhypothese.

---

### B-001 · 12-11-2026 · project
**Besluit:** De quickscan op nohandoff.nl is de voorbeeld-feature om het handboek op te doorlopen.
**Waarom:** Echt (eigen site), dynamisch genoeg voor states en AC's, en staat al in het testplan als "context-quickscan".
**Niet:** Een fictieve klantcase (Stroomwijs) of het contactformulier (te weinig gedrag).
**Wie:** Maarten · **Status:** voorstel
**Herzien als:** de quickscan na 3 maanden minder dan 5 gesprekken oplevert.

### B-002 · 12-11-2026 · design system
**Besluit:** Design system eerst in code (`design-system/tokens.json`), afgeleid van nohandoff.nl. Figma-bibliotheek volgt.
**Waarom:** Figma-account staat op Starter met een kijkplaats; Code Connect vraagt een betaald plan.
**Wie:** Maarten · **Status:** voorstel
**Herzien als:** er een Figma-bewerkplaats is. Dan wordt Figma bron voor beeld, tokens.json blijft bron voor code.

### B-003 · 12-11-2026 · FEAT-001
**Besluit:** 8 vragen, 2 per dimensie. Niveau = gemiddelde van alle antwoorden, naar beneden afgerond.
**Waarom:** Kort genoeg om af te maken (doel: < 3 minuten). Naar beneden afronden voorkomt een te rooskleurig beeld.
**Niet:** Weging per dimensie; dat is schijnprecisie zolang er geen data is.
**Wie:** Maarten · **Status:** voorstel
**Herzien als:** meer dan 30% van de bezoekers afhaakt vóór vraag 8, of de uitslag in gesprekken niet herkend wordt.

### B-004 · 12-11-2026 · FEAT-001
**Besluit:** De uitslag is altijd zichtbaar zonder e-mailadres. E-mail is een optie ("stuur me de uitslag"), met toestemming.
**Waarom:** Principe 1 (waarde boven verzamelen) en AVG.
**Wie:** Maarten · **Status:** voorstel
**Herzien als:** nooit zonder herziening van principe 1.

### B-005 · 12-11-2026 · project
**Besluit:** Geen framework en geen build-stap voor de app: HTML, CSS en JavaScript-modules. Tests met de ingebouwde testrunner van Node.
**Waarom:** Draait direct op de bestaande Netlify-site; minder om te onderhouden; agents kunnen alles lezen.
**Wie:** Maarten · **Status:** voorstel
**Herzien als:** er meer dan 3 interactieve features op de site komen.
