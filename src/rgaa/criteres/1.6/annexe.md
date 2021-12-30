---
WCAG: 
- successCriterion: 1.1.1
  title: Non-text Content
  level: A
Techniques: 
- G92
- G74
- G73
- H45
- ARIA6
---

#### Notes techniques
Dans le cas du SVG, le manque de support de l’élément `<title>` et `<desc>` par les technologies d’assistance crée une difficulté dans le cas de l’implémentation de l’[alternative textuelle](#alternative-textuelle-image) de l’image et de sa [description détaillée](#description-detaillee-image). Dans ce cas, il est recommandé d’utiliser l’attribut WAI-ARIA `aria-label` pour implémenter à la fois l’[alternative textuelle](#alternative-textuelle-image) courte et la référence à la  [description détaillée](#description-detaillee-image) adjacente ou l’attribut WAI-ARIA `aria-labelledby` pour associer les passages de texte faisant office d’alternative courte et de [description détaillée](#description-detaillee-image).

L’utilisation de l’attribut WAI-ARIA aria-describedby n’est pas recommandée pour lier une image (`<img>`, `<object>`, `<embed>`, `<canvas>`) à sa [description détaillée](#description-detaillee-image), par manque de support des technologies d’assistance. Néanmoins, lorsqu’il est utilisé, l’attribut devra nécessairement faire référence à l’`id` de la zone contenant la [description détaillée](#description-detaillee-image).

La [description détaillée](#description-detaillee-image) adjacente peut être implémentée via une balise `<figcaption>`, dans ce cas le critère 1.9 doit être vérifié (utilisation de `<figure>` et des attributs WAI-ARIA `role="figure"` et `aria-label`, notamment).

