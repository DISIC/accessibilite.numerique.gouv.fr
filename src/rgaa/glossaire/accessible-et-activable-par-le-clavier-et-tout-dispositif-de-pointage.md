---
title: Accessible et activable par le clavier et tout dispositif de pointage
---

- Un composant d’interface (lien, bouton…) est accessible au clavier et par tout dispositif de pointage lorsque l’utilisateur peut prendre, indifféremment, le focus par un pointeur ou la touche tabulation ;
- Un composant d’interface (lien, bouton…) est activable au clavier et par tout dispositif de pointage lorsque l’utilisateur peut enclencher, indifféremment, l’action prévue par le composant d’interface par une pression du pointeur ou la touche entrée du clavier ;
- Attention : pour certains composants d’interface comme les <span lang="en">`sliders`</span> (bouton coulissant ou rotatif…), il n’est pas possible de contrôler le composant par la seule touche d’entrée. Dans ces situations, d’autres touches (comme les touches de direction) peuvent être utilisées. En particulier pour les éléments ayant un rôle WAI-ARIA correspondant à un motif de conception il est recommandé de considérer le document <span lang="en">[WAI-ARIA 1.1 Authoring Practices](http://www.w3.org/TR/wai-aria-practices/)</span> lors de leur implémentation.

Dans le référentiel, l’expression « contrôlable par le clavier et tout dispositif de pointage » se rapporte également à la présente définition.

Note importante : le recours à certaines technologies peut rendre la gestion du focus trop complexe ou trop instable pour ne reposer que sur la tabulation, les touches de direction et la touche entrée. Dans ce cas, la mise à disposition de raccourcis clavier peut être la seule solution pour rendre le composant utilisable.

Le critère ne peut être considéré comme conforme qu’à la condition que les raccourcis clavier utilisés soient correctement documentés, qu’ils soient fonctionnels et qu’ils respectent le {% crit 12.10 %}.
