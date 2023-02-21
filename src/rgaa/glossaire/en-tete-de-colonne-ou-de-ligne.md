---
title: En-tête de colonne ou de ligne
---

Contenu d’une cellule dans un tableau de données (la première cellule d’une colonne ou d’une ligne, généralement) qui sert d’intitulé pour la totalité ou une partie des cellules de la colonne ou de la ligne. Une colonne ou une ligne peut contenir plusieurs en-têtes (en-tête intermédiaire). Lorsque les en-têtes s’appliquent à l’ensemble d’une ligne ou d’une colonne, ils peuvent être structurés avec une balise `<th>` ou une balise pourvue d’un attribut WAI-ARIA `role="rowheader"` ou `role="columnheader"`. Dans le cas contraire, seule une balise `<th>` peut être utilisée.

Note : seule la balise `<th>` étant totalement supportée par l’ensemble des technologies d’assistance, il est fortement recommandé de privilégier cette solution lors de la mise en œuvre afin d’éviter de nombreuses vérifications dans les différentes combinaisons prévues dans l’environnement de test (ou « base de référence »).
