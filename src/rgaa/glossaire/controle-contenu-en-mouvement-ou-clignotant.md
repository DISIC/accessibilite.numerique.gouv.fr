---
title: Contrôle (contenu en mouvement ou clignotant)
---

Possibilité pour l’utilisateur de contrôler l’affichage ou la lecture d’un contenu en mouvement ou clignotant par le clavier et la souris, au moins.

Tous les contenus en mouvement, à l’exception des médias temporels pris en charge par la thématique multimédia, sont concernés : les images animées (par exemple un gif animé), les contenus en mouvement proposés via une balise `<object>`, du code JavaScript ou des effets CSS par exemple.

Note 1 : lorsque c’est approprié, la méthode de contrôle devrait être disponible comme premier élément de la page.

Note 2 : la méthode de contrôle du contenu en mouvement ou clignotant doit permettre à l’utilisateur d’interagir avec le reste de la page. En conséquence, l’arrêt ou la mise en pause via un événement déclenché uniquement sur la prise de focus ne permet pas de valider le critère.

Note 3 : Dans certains cas, le mouvement fait partie intégrante du composant et il n’est pas possible d’en donner le contrôle à l’utilisateur, par exemple une barre de progression dont la fonction est d’indiquer par un mouvement la progression d’un évènement comme un téléchargement. Dans ce cas le critère est Non Applicable.
