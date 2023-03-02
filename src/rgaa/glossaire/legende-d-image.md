---
title: Légende d’image
---

Lorsqu’un texte, adjacent à une image, contient des informations sur l’image (par exemple un copyright, une date, un auteur…) ou est destiné à compléter les informations apportées par l’image (par exemple un texte associé à une image dans une galerie d’images), on parle de légende d’image.

Lorsqu’une image est légendée il est nécessaire d’associer la légende de l’image à l’image par une relation de structure, de telle sorte que les technologies d’assistance puissent traiter l’image et sa légende comme un ensemble unique.

HTML5 propose d’associer une légende à une image via les éléments `figure` (l’ensemble de l’image et la légende) et `figcaption` (la légende).

Une image sans légende peut définir :

- Une image qui n’est pas insérée dans un élément `figure` ;
- Une image insérée dans un élément `figure` sans élément `figcaption`.

Note : lorsque le texte adjacent à l’image peut faire office de texte de remplacement, il n’est pas obligatoire de recourir à l’ensemble `figure`, `figcaption`, l’image pouvant être simplement traitée comme une image de décoration.

Vous pouvez consulter, à ce sujet, la note en anglais <span lang="en">[Requirements for providing text to act as an alternative for images](https://www.w3.org/TR/html51/semantics-embedded-content.html#alt-text)</span> du W3C.
