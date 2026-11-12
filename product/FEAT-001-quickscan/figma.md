# FEAT-001 · Figma-afspraken

**Status:** nog niet aangemaakt. Het Figma-account staat op Starter met een kijkplaats (B-002).
Tot die tijd is het HTML-prototype in `app/` het ontwerp, gebouwd met dezelfde tokens.

## Zodra er een bewerkplaats is
1. **Bibliotheek "No Handoff DS"** met variabelen uit `design-system/tokens.json`. Namen gelijk houden: `color/accent` ↔ `color.accent`.
2. Componenten uit `design-system/componenten.md`, met alle varianten (states).
3. **Bestand "No Handoff · site"**, pagina `FEAT-001 quickscan`.
4. Frames heten `FEAT-001 / [scherm] / [state]`, bijvoorbeeld `FEAT-001 / Vraag / onvolledig`.
5. Eén frame per state uit spec §4, met teksten uit §8.
6. Draai P2 (Figma-check) en P4 (states-check).
7. Code Connect pas bij een betaald plan met Dev Mode: koppel `Knop`, `Antwoordkaart`, `Uitslagpaneel` aan `app/`.

## Links
| State | Frame | Link |
|---|---|---|
| intro | FEAT-001 / Intro / standaard | (nog aanmaken) |
| vraag | FEAT-001 / Vraag / standaard | (nog aanmaken) |
| onvolledig | FEAT-001 / Vraag / onvolledig | (nog aanmaken) |
| uitslag | FEAT-001 / Uitslag / standaard | (nog aanmaken) |
| verzenden · verzonden · fout | FEAT-001 / Uitslag / mail-[state] | (nog aanmaken) |

**Regel:** Figma bepaalt hoe het eruitziet, de spec bepaalt wat het doet. Bij twijfel wint de spec en wordt Figma aangepast.
