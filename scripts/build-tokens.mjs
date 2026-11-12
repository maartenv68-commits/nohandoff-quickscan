// tokens.json -> app/tokens.css (CSS custom properties). Draai na elke wijziging aan tokens.json.
import { readFileSync, writeFileSync } from "node:fs";
const t = JSON.parse(readFileSync(new URL("../design-system/tokens.json", import.meta.url)));
const lines = [];
for (const [group, items] of Object.entries(t)) {
  if (group.startsWith("$")) continue;
  for (const [name, tok] of Object.entries(items)) {
    if (name.startsWith("$")) continue;
    lines.push(`  --${group}-${name}: ${tok.$value};`);
  }
}
const css = `/* Gegenereerd uit design-system/tokens.json. Niet met de hand wijzigen. */\n:root {\n${lines.join("\n")}\n}\n`;
writeFileSync(new URL("../app/tokens.css", import.meta.url), css);
console.log(`app/tokens.css: ${lines.length} tokens`);
