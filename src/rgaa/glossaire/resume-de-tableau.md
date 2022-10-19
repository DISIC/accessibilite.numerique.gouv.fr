---
title: Résumé (de tableau)
---

Un résumé est un passage de texte associé à un tableau de données complexe. Il permet de donner des informations sur la nature et la structure du tableau afin d’en faciliter l’utilisation par les utilisateurs de technologies d’assistance par exemple.

Note : en HTML5, la seule technique utilisable actuellement est celle qui consiste à insérer le résumé directement dans le titre (balise `<caption>`) en masquant le résumé via CSS si nécessaire.

Dans les versions précédentes de HTML, le résumé peut être inséré via un attribut `summary` sur la balise `<table>`.

Dans le cas d’une balise avec l’attribut WAI-ARIA `role="table"`, le résumé doit être fourni au moyen d’un attribut `aria-describedby` et être correctement restitué par les technologies d’assistance.
