---
title: Titre
---

Élément HTML (balise  `h`) à 6 niveaux de hiérarchie (de `h1` pour le titre le plus important à `h6` pour le moins important) ou élément HTML ayant les attributs WAI-ARIA `role="heading"` et `aria-level` permettant de structurer l’information d’un contenu web.

Assurer une stricte hiérarchie entre les titres d’une page web est une bonne pratique, mais la présence de sauts hiérarchiques n’invalide pas le critère tant que cette hiérarchie plus lâche reste cohérente (un titre `<h3>` peut ainsi venir directement après un titre `<h1>`, par exemple). La hiérarchie de titres ne doit pas obligatoirement contenir un titre `<h1>`. Même si ces pratiques ne sont pas encouragées, elles n’invalident pas le critère.

Note : les titres visuellement cachés via CSS sont considérés comme présents et valident le {% crit 9.1 %}.
