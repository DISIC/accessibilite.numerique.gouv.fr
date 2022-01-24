---
title: Contenu visible 
---

Pour le {% test '12.2.1' %} : « Contenu présent » signifie que le contenu
visible reste présent lorsque CSS est désactivé. Par exemple, une image
porteuse d’information en propriété de fond CSS invalide ce test car
l’information n’est plus « présente » lorsque CSS est désactivé. En revanche,
une image porteuse d’information en propriété de fond CSS mais accompagnée
d’un texte caché valide ce test car l’information est bien « présente »
lorsque CSS est désactivé.

Note : la pratique qui consiste à gérer des images en propriété de fond
d’éléments via CSS est formellement déconseillée, même si elle est accompagnée
d’un texte caché.

