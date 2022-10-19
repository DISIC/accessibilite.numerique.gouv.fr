---
title: Titre de cadre
---

Contenu de l’attribut `title` de la balise `<iframe>` ou `<frame>` permettant de connaître la nature du contenu diffusé via le cadre lorsque l’utilisateur navigue de cadre en cadre ou affiche la liste des cadres de la page par exemple.

Note 1 : Certains cadres servent uniquement à des opérations techniques tels que des traitements applicatifs destinés à préparer ou piloter des contenus affichés dans la page comme les cadres utilisés par certains réseaux sociaux comme Facebook par exemple.

Si ces cadres sont dépourvus de titre de cadre fournis par le service distant, ou si les titres de cadres sont jugés non pertinents, des mentions génériques peuvent être utilisées, par exemple `title="contenus techniques Facebook"`.

Note 2 : Si cela ne gêne pas le fonctionnement de ce type de cadre, il est possible de les rendre indisponibles aux technologies d’assistance en utilisant l’attribut WAI-ARIA `aria-hidden="true"`. Dans ce cas le {% crit 2.1 %} et le {% crit 2.2 %} seront non applicables.
