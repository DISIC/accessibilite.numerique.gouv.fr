---
title: Landmarks
---

WAI-ARIA propose des rôles permettant d’indiquer les zones principales
(régions) du document. Ces rôles sont très profitables aux utilisateurs de
lecteurs d’écran notamment, mais également aux utilisateurs de la navigation
au clavier qui peuvent ainsi bénéficier de fonctionnalités de navigation
rapide dans la [structure du document](#structure-du-document).

Les rôles doivent être définis dans le document en fonction de la nature de la
zone :

- La zone d’[en-tête](#zone-d-en-tete) doit avoir un attribut WAI-ARIA `role="banner"` ;
- Le [menu de navigation](#menu-et-barre-de-navigation) principal doit avoir un attribut WAI-ARIA `role="navigation"` ;
- La zone de [contenu principal](#zone-de-contenu-principal) doit avoir un attribut WAI-ARIA `role="main"` ;
- La zone de [pied de page](#zone-de-pied-de-page) doit avoir un attribut WAI-ARIA `role="contentinfo"` ;
- La zone de [moteur de recherche](#moteur-de-recherche-interne-a-un-site-web) sur le site doit avoir un attribut WAI-ARIA `role="search"`.

Note 1 : Si la plupart des lecteurs d’écran mettent à disposition ces
fonctionnalités, les navigateurs n’ont pas encore proposé de fonctionnalité de
navigation dédiée pour les utilisateurs qui ne peuvent pas utiliser la souris.
La mise en place des liens d’évitement reste donc à privilégier par rapport
aux landmarks.

Note 2 : Les rôles WAI-ARIA `banner`, `main` et `contentinfo` doivent être
uniques dans la page. Le rôle WAI-ARIA `navigation` est réservé aux zones de
navigations principales et secondaires. Lorsqu’il y a plusieurs rôles WAI-ARIA
`navigation`, il peut être utile de les différencier en précisant un nom à
chacune des zones via l’attribut WAI-ARIA `aria-label` ou `aria-labelledby`.
