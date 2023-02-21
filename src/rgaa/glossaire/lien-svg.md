---
title: Lien SVG
---

Lien contenu dans un élément `<svg>`.

Dans le cas d’un lien SVG (version 1.1), le « nom accessible » est obtenu comme suit :

- Passage de texte associé par l’attribut WAI-ARIA `aria-labelledby` ;
- Sinon, contenu de l’attribut WAI-ARIA `aria-label` ;
- Sinon, contenu de l’élément `<title>` enfant direct du lien ;
- Sinon, contenu de l’attribut `xlink:title` ;
- Sinon, contenu texte d’un ou plusieurs éléments `<text>`.

Il faut cependant être vigilant car cet algorithme de calcul n’est pas encore pris en compte et effectif au sein des différents lecteurs d’écran. À ce jour, le support est disponible avec VoiceOver, mais incomplet ou lacunaire avec JAWS et NVDA. Si bien que le plus petit dénominateur commun sur lequel il est possible de se reposer pour fournir un intitulé au lien est l’élément `<text>`.
