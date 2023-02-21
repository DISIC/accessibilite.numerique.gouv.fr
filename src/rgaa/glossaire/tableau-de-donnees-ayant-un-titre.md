---
title: Tableau de données ayant un titre
---

Tableau de données ayant un attribut ou contenant une balise dont le contenu fait office de titre.

Tableau de données précédé ou suivi d’un passage de texte associé au tableau faisant office de titre.

Dans la mesure où il est bien correctement restitué et associé par les technologies d’assistance au tableau de données, le titre associé peut être :

- Dans une balise `<caption>` ;
- Dans un attribut `title` ;
- Dans un attribut WAI-ARIA `aria-label` ;
- Dans une balise associée au tableau de données via un attribut WAI-ARIA `aria-labelledby` sur le tableau.

Note : seule la balise `<caption>` étant complètement supporté par l’ensemble des technologies d’assistance, il est fortement recommandé de privilégier cette solution lors de la mise en œuvre afin d’éviter de nombreuses vérifications dans les différentes combinaisons prévues par l’environnement de test (ou « base de référence »).
