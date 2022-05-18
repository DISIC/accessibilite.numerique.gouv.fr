---
title: Média temporel (type son, vidéo et synchronisé)
---

Média temporel seulement audio : contenu sonore (Wav, Mp3…) ;

Média temporel seulement vidéo : images ou photos en mouvement ou en séquence
;

Média temporel synchronisé : flux audio ou vidéo synchronisé avec un autre
format pour présenter de l’information et/ou comportant des composants
temporels interactifs. Un média temporel peut être consulté de 2 manières
différentes :

- Fichier à télécharger consultable avec un logiciel externe à la page web ;
- Contenu embarqué dans la page web et consultable dans la page web via :
  - Un plugin (par exemple une vidéo diffusée par un lecteur Flash) ;
  - L’élément `<video>` (par exemple une vidéo) ;
  - L’élément `<audio>` (par exemple un podcast) ;
  - L’élément `<svg>` (par exemple un dessin animé vectoriel) ;
  - L’élément `<canvas>` (par exemple un dessin animé en image bitmap) ;
  - L’élément `<bgsound>` pour diffuser un arrière-plan sonore à la page web.

Un média temporel peut être diffusé en temps réel ou être proposé en lecture
de manière asynchrone (média pré-enregistré).

Note 1 : l’utilisation du paramètre `wmode` pour un objet Flash avec les valeurs
`"transparent"` et `"opaque"` invalide de fait le {% crit 4.13 %}. En
effet, l’utilisation de ces valeurs a pour conséquence que l’animation Flash
vue du côté des utilisateurs de lecteur d’écran est invisible.

Note 2 : les gif animés, les animations d’images réalisées par JavaScript ou
CSS ne sont pas considérés comme étant des médias temporels.

Note 3 : l’élément `<bgsound>` est spécifique à Internet Explorer et ne
devrait pas être utilisé.
