# Beslislog

Alleen mensen schrijven hier. Agents lezen alleen besluiten met status **actief**.
Elke regel heeft een "herzien als": de voorwaarde waaronder het besluit weer open gaat.

Een agent mag een besluit helpen formuleren (prompt P7), maar nooit nemen. Elk besluit heeft daarom een **bron**: waar en door wie het genomen is.

> Herkomst B-001 t/m B-005: bij het opzetten van dit project door Claude genoteerd, zonder prompt en zonder dat elk besluit door Maarten genomen was.
> In de eerste pull request (13-11-2026) is per besluit de echte bron toegevoegd. Wat Maarten zelf besliste, staat op *actief*; de rest blijft *voorstel* tot hij beslist.

---

### B-001 · 12-11-2026 · project
**Besluit:** De quickscan op nohandoff.nl is de voorbeeld-feature om het handboek op te doorlopen.
**Waarom:** Echt (eigen site), dynamisch genoeg voor states en AC's, en staat al in het testplan als "context-quickscan".
**Niet:** Een fictieve klantcase (Stroomwijs) of het contactformulier (te weinig gedrag).
**Wie:** Maarten · **Status:** actief
**Bron:** Keuze Maarten in de vragenronde met Claude, 12-11-2026
**Herzien als:** de quickscan na 3 maanden minder dan 5 gesprekken oplevert.

### B-002 · 12-11-2026 · design system
**Besluit:** Design system eerst in code (`design-system/tokens.json`), afgeleid van nohandoff.nl. Figma-bibliotheek volgt.
**Waarom:** Figma-account staat op Starter met een kijkplaats; Code Connect vraagt een betaald plan.
**Wie:** Maarten · **Status:** actief
**Bron:** Keuze Maarten in de vragenronde met Claude, 12-11-2026
**Herzien als:** er een Figma-bewerkplaats is. Dan wordt Figma bron voor beeld, tokens.json blijft bron voor code.

### B-003 · 12-11-2026 · FEAT-001
**Besluit:** 8 vragen, 2 per dimensie. Niveau = gemiddelde van alle antwoorden, naar beneden afgerond.
**Waarom:** Kort genoeg om af te maken (doel: < 3 minuten). Naar beneden afronden voorkomt een te rooskleurig beeld.
**Niet:** Weging per dimensie; dat is schijnprecisie zolang er geen data is.
**Wie:** nog te bepalen (Maarten) · **Status:** voorstel
**Bron:** Ontwerpkeuze van Claude bij het opzetten; niet besproken
**Herzien als:** meer dan 30% van de bezoekers afhaakt vóór vraag 8, of de uitslag in gesprekken niet herkend wordt.

### B-004 · 12-11-2026 · FEAT-001
**Besluit:** De uitslag is altijd zichtbaar zonder e-mailadres. E-mail is een optie ("stuur me de uitslag"), met toestemming.
**Waarom:** Principe 1 (waarde boven verzamelen) en AVG.
**Wie:** nog te bepalen (Maarten) · **Status:** voorstel
**Bron:** Afgeleid uit principe 1 (context/principes.md), dat Claude bij het opzetten schreef; nog niet besproken
**Herzien als:** nooit zonder herziening van principe 1.

### B-005 · 12-11-2026 · project
**Besluit:** Geen framework en geen build-stap voor de app: HTML, CSS en JavaScript-modules. Tests met de ingebouwde testrunner van Node.
**Waarom:** Draait direct op de bestaande Netlify-site; minder om te onderhouden; agents kunnen alles lezen.
**Wie:** nog te bepalen (Maarten) · **Status:** voorstel
**Bron:** Technische keuze van Claude bij het opzetten; niet besproken
**Herzien als:** er meer dan 3 interactieve features op de site komen.

### B-006 · 13-11-2026 · project
**Besluit:** Prompt P7 (besluit vastleggen) toegevoegd. Besluiten krijgen voortaan een veld "bron".
**Waarom:** B-001 t/m B-005 werden door een agent genoteerd zonder prompt; niet te zien wie wat besliste.
**Wie:** Maarten · **Status:** actief
**Bron:** Gesprek Maarten en Claude, 13-11-2026 ("hier moet toch een prompt aan voorafgaan")
**Herzien als:** het veld "bron" in de praktijk vaak leeg of onduidelijk blijft.

