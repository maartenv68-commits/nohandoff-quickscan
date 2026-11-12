# Componenten

Elk component bestaat in code (`app/styles.css`, class-naam) en straks in Figma (zelfde naam).
Nieuw component nodig? Eerst hier toevoegen via pull request, dan pas gebruiken.

| Component | Class | Varianten / states | Tokens |
|---|---|---|---|
| Knop | `.knop` | primair, secundair; standaard, hover, focus, uitgeschakeld | accent, ink, white, radius.pill |
| Antwoordkaart | `.antwoord` | standaard, hover, focus, gekozen | card, line, soft, accent, radius.field |
| Voortgang | `.voortgang` | 0–8 van 8 | line, gradient.line |
| Kaart | `.kaart` | standaard | card, line, radius.card |
| Uitslagpaneel | `.uitslag` | niveau 1–4 | gradient.glow, white, radius.card |
| Melding | `.melding` | info, fout, gelukt | soft, danger, success |
| Merkvorm | `.vorm` | kwart (oranje), cirkel (roze), blok (violet), half (navy) | orange, pink, accent, navy |

Regels:
- Kleurverloop (`gradient.glow`) alleen in `Uitslagpaneel` en de hero.
- Tekst in violet altijd `accent-strong` (contrast); `accent` alleen voor vlakken en randen.
