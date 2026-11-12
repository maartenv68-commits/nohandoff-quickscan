# FEAT-001 · Controleverslag · ronde 1 · 12-11-2026

Gemaakt bij het opzetten, door dezelfde AI die de code schreef. **Dus géén onafhankelijke review**:
draai P6 in een frisse sessie voor de echte controle.

## Automatisch
| Check | Uitslag |
|---|---|
| Tokens: `app/tokens.css` gelijk aan `tokens.json` | ✓ |
| Token-lint: geen losse kleuren in `app/` | ✓ |
| Tests AC1, AC2, AC3, AC5, AC7 (rekenregels) | ✓ 5/5 |
| Tests AC3, AC4, AC6 (browser, Playwright) | ✓ 3/3 lokaal; overgeslagen in CI (Playwright niet geïnstalleerd) |

## Handmatig
| State | Gezien | Opmerking |
|---|---|---|
| intro | ✓ desktop + mobiel | Kaart voelt leeg op desktop; mogelijk beeld of voorbeeld-uitslag erbij (VRAAG voor designer) |
| vraag | ✓ | Gekozen antwoord duidelijk zichtbaar |
| onvolledig | ✓ | Link "Naar vraag n" naar de eerste open vraag |
| uitslag | ✓ | Kleurverloop alleen hier, volgens componenten.md |
| verzenden / fout | ✓ | Fout gesimuleerd met een server die 500 geeft |
| verzonden | ✗ niet gezien | Kan pas op Netlify met formulierdetectie aan |

## Wat dit níet bewijst
- Dat bezoekers de vragen begrijpen of de uitslag herkennen.
- Toegankelijkheid met een echte screenreader (alleen opbouw gecontroleerd: fieldset, legend, aria-live).
- Dat het formulier op Netlify aankomt.
