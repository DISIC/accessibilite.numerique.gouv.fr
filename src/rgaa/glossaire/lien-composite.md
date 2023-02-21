---
title: Lien composite
---

En HTML, [lien](#lien) contenant à la fois du texte et un ou plusieurs enfants de type image :

- Image (balise `<img>` ou balise ouvrante ayant l’attribut WAI-ARIA `role="img"`) ;
- Zone cliquable (balise `<area>`) possédant un attribut `href` ;
- Image objet (balise `<object>`) ;
- Image bitmap (balise `<canvas>`) ;
- Image vectorielle (balise `<svg>`).

Note importante : il est rappelé que l’utilisation de deux liens adjacents (lien image et lien texte) et identiques constitue une gêne importante pour l’utilisateur. Même si cela ne constitue pas une non-conformité, cet usage devrait être évité. Une manière de traiter ce type de liens est d’inclure l’image dans le lien texte de façon à constituer un lien composite, ce qui évitera la redondance.

Vous pouvez consulter à ce sujet la technique <span lang="en">[H2 : Combining adjacent image and text links for the same resource](https://www.w3.org/WAI/WCAG21/Techniques/html/H2)</span>.
