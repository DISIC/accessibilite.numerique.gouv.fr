---
WCAG:
  - successCriterion: 1.3.1
    title: Info and Relationships
    level: A
  - successCriterion: 2.4.1
    title: Bypass Blocks
    level: A
  - successCriterion: 2.4.6
    title: Headings and Labels
    level: AA
  - successCriterion: 4.1.2
    title: Name, Role, Value
    level: A
Techniques:
  - G115
  - G130
  - H42
  - G141
  - ARIA4
  - ARIA12
---

#### Notes techniques

WAI-ARIA permet de définir des titres via le rôle `heading` et l’attribut `aria-level` (indication du niveau de titre). Bien qu’il soit préférable d’utiliser l’élément de titre natif en HTML `<hx>`, l’utilisation du rôle WAI-ARIA `heading` est compatible avec l’accessibilité.
