---
WCAG: 
- successCriterion: 1.1.1
  title: Non-text Content
  level: A
- successCriterion: 4.1.2
  title: Name, Role, Value
  level: A
Techniques: 
- G140
- ARIA4
- ARIA6
---

#### Note technique

L’implémentation d’un attribut WAI-ARIA `role="group"` ou `role="figure"` sur l’élément parent `<figure>` est destiné à pallier le manque de support actuel des éléments `<figure>` par les technologies d’assistance. L’utilisation d’un élément `<figcaption>` pour associer une légende à une image impose au minimum l’utilisation d’un attribut WAI-ARIA aria-label sur l’élément parent `<figure>` dont le contenu sera identique au contenu de l’élément `<figcaption>`. Pour s’assurer d’un support optimal, il peut également être fait une association explicite entre le contenu de l’alternative textuelle de l’image et le contenu de l’élément `<figcaption>`, par exemple :

`<img src="image.png" alt="Photo : soleil couchant" /><figcaption>Photo : crédit xxx</figcaption>`

Les attributs WAI-ARIA `aria-labelledby` et `aria-describedby` ne peuvent pas être utilisés actuellement par manque de support par les technologies d’assistance.

Note : les images légendées doivent par ailleurs respecter le {% crit 1.1 %} et le {% crit 1.3 %} relatifs aux images porteuses d’information.