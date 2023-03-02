---
title: Intitulé (ou nom accessible) de lien
---

« Nom accessible » restitué par les technologies d’assistance.

Dans le cas d’un lien HTML, le « nom accessible » est obtenu selon l’ordre suivant :

- passage de texte associé par l’attribut WAI-ARIA `aria-labelledby` ;
- sinon, contenu de l’attribut WAI-ARIA `aria-label` ;
- sinon, contenu du lien ;
- sinon, contenu de l’attribut `title`.

Cet ordre doit être utilisé pour déterminer ce qui constitue l’intitulé du lien. Par exemple :

- en cas de présence conjointe d’un attribut WAI-ARIA `aria-label` et d’un attribut WAI-ARIA `aria-labelledby`, c’est le passage de texte référencé par l’attribut WAI-ARIA `aria-labelledby` qui doit être considéré comme l’intitulé ;
- en cas de présence conjointe d’un attribut WAI-ARIA `aria-label` et d’un contenu dans le lien, c’est le contenu de l’attribut WAI-ARIA `aria-label` qui doit être considéré comme l’intitulé.

Référence : <span lang="en">[Accessible name and description calculation](https://www.w3.org/TR/html-aam-1.0/#accessible-name-and-description-computation)</span>.

Dans le cas où le « nom accessible » est obtenu à partir du contenu du lien, celui-ci sera variable en fonction des cas suivants :

Lien texte :

En HTML, le « nom accessible » correspond au texte constitué à partir :

- du texte contenu dans le lien ;
- du texte contenu dans les éléments enfants du lien.

Lien image :

En HTML, le « nom accessible » correspond au texte constitué à partir de l’alternative textuelle d’une ou plusieurs images dans le lien du type :

- Image (élément `<img>` ou balise ouvrante ayant l’attribut WAI-ARIA `role="img"`) ;
- Image objet (élément `<object>`) ;
- Image bitmap (élément `<canvas>`) ;
- Image vectorielle (élément `<svg>`).

Lien composite :

En HTML, le « nom accessible » correspond au texte constitué à partir de l’ensemble :

- du texte contenu dans le lien ;
- du texte contenu dans les éléments enfant du lien ;
- du contenu de l’alternative textuelle de la ou des images comprises dans le lien.

Dans le cas d’un lien SVG (version 1.1), le « nom accessible » est obtenu comme suit :

- Passage de texte associé par l’attribut WAI-ARIA `aria-labelledby` ;
- Sinon, contenu de l’attribut WAI-ARIA `aria-label` ;
- Sinon, contenu de l’élément `<title>` enfant direct du lien ;
- Sinon, contenu de l’attribut `xlink:title` ;
- Sinon, contenu texte d’un ou plusieurs éléments `<text>`.

Il faut cependant être vigilant car cet algorithme de calcul n’est pas encore pris en compte et effectif au sein des différents lecteurs d’écran. À ce jour, le support est disponible avec VoiceOver, mais incomplet ou lacunaire avec JAWS et NVDA. Si bien que le plus petit dénominateur commun sur lequel il est possible de se reposer pour fournir un intitulé au lien est l’élément `<text>`.

Note 1 : un intitulé de lien sera considéré comme non-explicite dans le cas où le « nom accessible » ne reprend pas l’[intitulé visible](#intitule-visible) du lien.

Note 2 : en raison de la configuration possible des aides techniques permettant de forcer la restitution du « nom accessible » issu du contenu de l’attribut `title` au détriment du « nom accessible » issu du contenu du lien. Un intitulé de lien sera considéré comme non-explicite dans le cas où le lien possède un attribut `title` dont la valeur ne reprendrait pas au moins le « nom accessible » issu du contenu du lien.

Note 3 : dans le cas de la présence de plusieurs liens ayant une destination différente dont le « nom accessible » est identique. L’intitulé de lien seul sera considéré comme non-explicite si le contexte de lien ne permet pas de les différencier.

Note 4 : lorsqu’un lien ne comporte aucun contenu, il sera non conforme au regard du {% crit 10.2 %} et du {% crit 6.2 %}.

Note 5 : bien que le calcul du nom accessible d’un lien tienne compte de contenus texte générés en CSS via les pseudo-éléments `::before` et `::after`, cette pratique ne doit pas être utilisée, car elle constitue une non-conformité au critère 1.3.1 des <abbr lang="en" title="web content accessibility guidelines">WCAG</abbr> 2.1 (cf. [F87](https://www.w3.org/WAI/WCAG21/Techniques/failures/F87)).
