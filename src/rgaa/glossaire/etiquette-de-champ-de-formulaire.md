---
title: Étiquette de champ de formulaire
---

Texte à proximité du champ de formulaire permettant d’en connaître la nature, le type ou le format des informations attendues. L’étiquette peut être associée au champ de formulaire de plusieurs manières :

- Par l’utilisation d’une balise `<label>` ;
- Par l’utilisation de l’attribut WAI-ARIA `aria-label` ;
- Par l’utilisation d’une liaison entre le texte et le champ par l’attribut WAI-ARIA `aria-labelledby` ;
- Par l’utilisation de l’attribut `title`.

Note importante : lorsque plusieurs de ces techniques sont présentes sur un même champ, le calcul du « nom accessible », c’est-à-dire ce qui sera restitué, obéit à un ordre strict :

- `aria-labelledby` ;
- Sinon `aria-label` ;
- Sinon `<label>` ;
- Sinon `title`.

Cet ordre doit être utilisé pour l’évaluation de la pertinence de l’étiquette ({% crit 11.2 %}). Par exemple, même dans le cas de la présence d’un `<label>`, c’est le passage de texte référencé par `aria-labelledby` qui doit être pris en compte.

Référence : <span lang="en">[Accessible name and description calculation](https://www.w3.org/TR/html-aam-1.0/#accessible-name-and-description-computation)</span>.

Note importante au sujet de l’utilisation de `placeholder` : lorsque l’attribut `placeholder` est présent, il est susceptible d’être restitué à la place de l’attribut `title`. Par conséquent, lorsque ces deux attributs `title` et `placeholder` sont présents, ils doivent être identiques.

Note au sujet des étiquettes liées par `aria-labelledby` : Il s’agit d’un ou de plusieurs passages de texte identifiés par des `id` et liés par `aria-labelledby` sur le modèle suivant : `aria-labelledby="ID1 ID2 ID3…"`. 
Pour assurer une compatibilité maximum avec les agents utilisateurs, notamment Internet Explorer 11, il est recommandé d’implémenter un `tabindex="-1"` sur les passages de textes qui ne sont pas des éléments interactifs (bouton, liens, éléments de formulaires, etc.).

Note : l’attribut `aria-label` ne peut pas être utilisé pour indiquer le caractère obligatoire d’un champ.
