---
WCAG: 
- successCriterion: 1.1.1
  title: Non-text Content
  level: A
- successCriterion: 4.1.2
  title: Name, Role, Value
  level: A
Techniques: 
- H67
- G196
- C9
- F39
- F38
- ARIA4
- ARIA10
---

#### Note technique

Lorsqu'une image est associée à une [légende](#legende-d-image), la note technique WCAG recommande de prévoir systématiquement une [alternative textuelle](#alternative-textuelle-image) (cf. {% crit 1.9 %}. Dans ce cas le critère 1.2 est non applicable.

Dans le cas d'une image vectorielle (balise `<svg>`) de décoration qui serait affichée au travers d'un élément `<use href="...">` enfant de l'élément `<svg>`, le test 1.2.4 s'appliquera également à la balise `<svg>` associée par le biais de la balise `<use>`.

Un attribut WAI-ARIA `role="presentation"` peut être utilisé sur les images de décoration et les zones non cliquables de décoration. Le rôle `"none"` introduit en ARIA 1.1 et synonyme du rôle `"presentation"` peut être aussi utilisé. Il reste préférable cependant d'utiliser le rôle `"presentation"` en attendant un support satisfaisant du rôle `"none"`.