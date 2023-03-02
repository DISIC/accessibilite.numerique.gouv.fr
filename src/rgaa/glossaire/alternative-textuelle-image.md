---
title: Alternative textuelle (image)
---

« Nom accessible » restitué par les technologies d’assistance pour les éléments graphiques de type :

- Image (balise `<img>` ou balise ouvrante possédant un attribut WAI-ARIA `role="img"`) ;
- Zone d’image réactive (balise `<area>`) ;
- Bouton de type image (balise `<input>` avec l’attribut `type="image"`) ;
- Image objet (balise `<object type="image/…">`) ;
- Image vectorielle (balise `<svg>`) ;
- Image bitmap (balise `<canvas>`) ;
- Image embarquée (balise `<embed>`).

Dans le cas d’un élément graphique, le « nom accessible » est obtenu selon l’ordre suivant :

- Passage de texte associé via l’attribut WAI-ARIA `aria-labelledby` pour les balises :
  - `<img>` ;
  - `<input type="image">` ;
  - `<svg>` ;
  - `<object type="image/…">` ;
  - `<embed type="image/…">` ;
  - `<canvas>` ;
  - balises possédant un attribut WAI-ARIA `role="img"`.
- Sinon, contenu de l’attribut WAI-ARIA `aria-label` pour les éléments :
  - `<img>` ;
  - `<area>` ;
  - `<input type="image">` ;
  - `<svg>` ;
  - `<object type="image/…">` ;
  - `<embed type="image/…">` ;
  - `<canvas>` ;
  - balises ouvrantes possédant un attribut WAI-ARIA `role="img"`.
- Sinon, contenu de l’attribut `alt` pour les balises :
  - `<img>` ;
  - `<area>` ;
  - `<input type="image">`.
- Sinon, contenu de l’attribut `title` pour les balises :
  - `<img>` ;
  - `<input type="image">` ;
  - `<object type="image/…">` ;
  - `<embed type="image/…">`.

Cet ordre doit être utilisé pour déterminer ce qui constitue l’alternative textuelle.

Néanmoins, en cas de support partiel de l’algorithme de calcul du « nom accessible », c’est la valeur réellement restituée par les technologies d’assistance utilisées dans l’environnement de test (ou « base de référence ») qu’il faudra considérer comme alternative textuelle.

Par exemple :

- En cas de présence conjointe d’un attribut WAI-ARIA `aria-label` et d’un attribut WAI-ARIA `aria-labelledby` sur une balise `<img>`, c’est le passage de texte référencé par l’attribut WAI-ARIA `aria-labelledby` qui doit être considérée comme alternative textuelle si le contenu du passage de texte est réellement restitué par les technologies d’assistance utilisées dans l’environnement de test ;
- En cas de présence conjointe d’un attribut WAI-ARIA `aria-label` et d’un attribut `alt` sur une balise `<img>`, c’est le contenu de l’attribut WAI-ARIA `aria-label` qui doit être considéré comme alternative textuelle si le contenu de l’attribut WAI-ARIA `aria-label` est réellement restitué par les technologies d’assistance utilisées dans l’environnement de test.

Référence : <span lang="en">[Accessible name and description calculation](https://www.w3.org/TR/html-aam-1.0/#accessible-name-and-description-computation)</span>.

RGAA considère trois types d’alternatives textuelles liées à la nature de l’image :

- Pour une image porteuse d’information, l’alternative textuelle apporte l’information nécessaire à la compréhension du contenu qu’elle véhicule ;
- Pour une image de décoration, aucune alternative textuelle ne doit être restituée ;
- Pour une image [CAPTCHA](#captcha) ou une [image-test](#image-test), l’alternative textuelle décrit seulement la nature et la fonction de l’image. En effet, l’alternative textuelle ne peut apporter l’information véhiculée par l’image sans rendre la fonction associée inopérante.

Note 1 : pour une image [CAPTCHA](#captcha) l’alternative peut être, par exemple : « Code de sécurité anti-spam » ou « code pour vérifier que vous êtes un humain » ou toute autre alternative permettant à l’utilisateur de comprendre la nature et la fonction de l’image.

Note 2 : pour un groupe d’images, par exemple un système de vote constitué de plusieurs images d’étoile, il est fortement conseillé d’utiliser soit la première image du groupe pour donner une alternative cohérente au groupe d’image (voir la [technique WCAG2.1 G196](https://www.w3.org/WAI/WCAG21/Techniques/general/G196)), soit une balise conteneur pourvue d’un rôle WAI-ARIA `img` et d’une alternative textuelle. Dans le premier cas, les autres images du groupe sont considérées comme des images de décoration. Dans le second cas, toutes les images du groupe sont considérées comme des images de décoration.

Note 3 : pour les image-lien, l’alternative doit permettre de comprendre la fonction et la destination du lien ; ce cas est traité dans la thématique liens.

Note 4 : pour les images vectorielles (balise `<svg>`) l’alternative textuelle pourrait se trouver aussi présente dans une balise `<title>` ou dans une balise `<text>` que cette dernière balise soit ou non visible, même si ce n’est pas le rôle dévolu à cet élément en SVG.

Note 5 : l’utilisation de l’attribut `alt` étant la seule technique totalement supportée par les aides techniques il est recommandé de privilégier cette solution lors de la mise en œuvre d’une alternative à une balise `<img>`, `<area>` et `<input type="image">`.

Note 6 : bien que l’attribut `title` soit considéré comme une possibilité d’alternative textuelle à une image, son usage peut poser problème, notamment du fait qu’une image avec un attribut `alt` absent ou vide est considérée comme une image pourvue d’un `role=“présentation”` par WAI-ARIA : <https://www.w3.org/TR/html-aam-1.0/#details-id-54>.Il faut s’assurer que les assistances techniques présentes dans l’environnement de test retenu restituent correctement l’alternative proposée par l’attribut `title`.
