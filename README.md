# No Handoff Quickscan

Voorbeeldproject voor **spec-driven UX design met AI-agents**: één echte feature,
volgens het No Handoff-handboek opgezet van probleem tot werkende code.

De feature: een quickscan op nohandoff.nl. Bezoekers beantwoorden 8 vragen en zien
op welk van de vier AI-niveaus hun team staat, met één concrete volgende stap.

## Start hier

1. **[docs/usecase.md](docs/usecase.md)**: het verhaal van probleem tot ecosysteem, en waar je in het handboek staat.
2. **[AGENTS.md](AGENTS.md)**: de huisregels die elke AI-agent als eerste leest.
3. **[product/FEAT-001-quickscan/](product/FEAT-001-quickscan/)**: intentiebrief, spec en Figma-afspraken.
4. **[decisions/beslislog.md](decisions/beslislog.md)**: alle besluiten, met "herzien als".

## Mappen

| Map | Wat erin staat | Wie schrijft |
|---|---|---|
| `context/` | Merk, principes, woordenlijst | Design lead, via PR |
| `discovery/` | Onderzoeksplan, (geanonimiseerde) notities, inzichten | Designer |
| `product/FEAT-xxx/` | Intentie, spec, Figma-links per feature | Designer + developer |
| `decisions/` | Beslislog en archief | Alleen mensen |
| `prompts/` | Vaste prompts P0–P6 en de sessiestart | Eigenaar per prompt |
| `design-system/` | Tokens (W3C-formaat) en componentafspraken | Design lead |
| `app/` | De werkende quickscan (HTML, CSS, JS, geen build nodig) | Developer of agent |
| `tests/` | Een test per acceptatiecriterium | Developer of agent |
| `reviews/` | Controleverslagen en metingen | Reviewer (mens of frisse agent-sessie) |

## Lokaal draaien

```bash
node scripts/build-tokens.mjs   # tokens.json -> app/tokens.css
node scripts/token-lint.mjs     # geen losse kleuren buiten tokens
node --test tests/*.test.mjs              # tests per acceptatiecriterium
npx serve app                   # of open app/index.html in je browser
```

Geen dependencies nodig: alleen Node 20 of hoger.

## Status

Zie [docs/usecase.md](docs/usecase.md#status). Kort: de keten staat, de feature werkt lokaal,
het onderzoek met echte bezoekers moet nog gebeuren. Wat aanname is, staat overal als aanname gemarkeerd.
