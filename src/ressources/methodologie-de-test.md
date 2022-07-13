---
title: Méthodologie de test
layout: layouts/base.njk
description: Méthodologie de tests documentant les étapes permettant de vérifier si un critère du RGAA 4 est conforme ou non
eleventyNavigation:
  title: Ressources
  parent: ressources
  order: 5
---

Ce document a été établi dans le cadre des ressources venant accompagner la prise en main de la version 4.1 du référentiel général d’amélioration de l’accessibilité (RGAA 4).
Il est destiné à toute personne soucieuse de vérifier la conformité d’un contenu web au RGAA 4. Il s’agit d’une méthodologie de tests documentant les étapes permettant de vérifier si un critère du RGAA 4 est conforme ou non. Cette méthodologie est donc à utiliser en complément du référentiel technique du RGAA et ne peut être utilisée seule. Elle ne dispense donc pas d’une lecture approfondie du référentiel technique, ni d’une formation au RGAA.

Pour chacun des tests d’un critère correspond une procédure de test ; la mise en oeuvre de cette procédure peut recourir parfois l’usage d’outils spécifiques, autrement un navigateur suffit pour effectuer la majorité des tests.
Une liste d’outils est aussi proposée pour aider à la réalisation des tests ; ils ont été retenus à la fois parce qu’ils sont fréquemment utilisés par les experts du métier et parce qu’ils facilitent la recherche de certains résultats.

<div class="fr-callout"><p class="fr-text--lg">
La méthodologie de test est désormais disponible au niveau de chaque test sur la page <a href="/methode/criteres-et-tests/" >critères et tests</a>.</p>
</div>

## Outils

L’outil le plus utile reste l’inspecteur de code que propose chaque navigateur. Il permet de rechercher facilement les éléments et les attributs requis pour un examen par un test d’accessibilité.

Les aides techniques listées dans l’environnement de test retenu constituent un second ensemble d’outils indispensables (voir la rubrique Environnement de test) ; ils sont, en effet, requis pour s’assurer d’une restitution correcte de contenus accessibles (les alternatives aux images, les intitulés de lien, les titres de tableau, ...) dans le cas notamment où l’examen du code seul ne suffirait pas.

D’autres outils sont disponibles pour aider à la recherche des éléments de contenu ; ils se présentent souvent comme des extensions au navigateur et permettent d’explorer un ou plusieurs aspects d’un test d’accessibilité.

Les barres d’outils sont des extensions du navigateur qui vont faciliter le repérage visuel de certains éléments dans un document :

- [Web Accessibility Toolbar pour Internet Explorer](https://developer.paciellogroup.com/resources/wat/) : barre d’outils de vérification de certains points d’accessibilité d’un document ;
- [Web Developer Toolbar pour Firefox](https://addons.mozilla.org/fr/firefox/addon/web-developer/) : barre d’outils pour les développeurs qui peut aider à retrouver visuellement certains éléments dans un document pour en contrôler l’accessibilité ;
- [Web Developer Toolbar pour Chrome](https://chrome.google.com/webstore/detail/web-developer/) : la même barre d’outils que précédemment, pour Chrome.

Au-delà de la simple barre d’outil, d’autres outils fournissent une analyse complète du document en signalant visuellement sur la page les erreurs d’accessibilité ou à l’inverse les éléments qui lui sont bénéfiques ; des filtres permettent alors souvent de n’afficher que certains de ces aspects. C’est ce que propose Wave, une solution disponible à la fois en ligne (http://wave.webaim.org) et comme extension de navigateur (https://wave.webaim.org/extension/).

La validation du code source d’un document HTML utilise le validateur en ligne du W3C (https://validator.w3.org/). À noter que pour valider le code source généré par le navigateur, il faut utiliser l’option "Validate by Direct Input" en y copiant la source HTML proposée par l’inspecteur de code du navigateur.
Des extensions de navigateur sont aussi disponibles, mais il faut être vigilant, car les algorithmes de validation de ces extensions ne sont pas forcément à jour par rapport au validateur du W3C et les résultats obtenus peuvent donc être différents.

La vérification des contrastes de couleurs bénéficie de différents outils :

- [WCAG Contrast checker](https://addons.mozilla.org/fr/firefox/addon/wcag-contrast-checker/) : extension Firefox qui permet un contrôle automatique des contrastes de couleurs des textes d’un document ;
- [Color Contrast Analyser](https://developer.paciellogroup.com/resources/contrastanalyser/) : Application Windows ou Mac qui permet de contrôler des contrastes de couleurs.

La vérification de l’arborescence du document et de la hiérarchie des titres dispose d’une extension très utile :

- [HeadingsMap pour Firefox](https://addons.mozilla.org/fr/firefox/addon/headingsmap/) : extension Firefox qui permet de donner un aperçu du plan du document et de son arborescence ;
- [HeadingsMap pour Chrome](https://chrome.google.com/webstore/detail/headingsmap/flbjommegcjonpdmenkdiocclhjacmbi) : même extension que la précédente pour Chrome.

L’analyse des fichiers bureautiques peut être réalisée au moyen de différents outils en fonction du format du fichier :

- [PAC (PDF Accessibility Checker) version 3 pour Windows](https://www.access-for-all.ch/en/pdf-lab/pdf-accessibility-checker-pac.html) : logiciel qui permet de contrôler certains points d’accessibilité des documents PDF ;
- [Word Accessibility Plug-in pour Microsoft Office Windows](http://accessibility.zhaw.ch/index.php?id=6&L=1) : extension du logiciel Microsoft Word qui permet d’éditer et de contrôler l’accessibilité d’un document bureautique éditable au format .doc ; à noter que les versions récentes des outils bureautiques de Microsoft offrent une fonctionnalité intégrée de validation de l’accessibilité ;
- [AccessODF pour LibreOffice](https://extensions.libreoffice.org/extensions/accessodf) : extension pour vérifier l’accessibilité d’un document LibreOffice Writer ; à noter que cette extension n’est plus compatible avec les dernières versions de LibreOffice (supérieures à la version 4.0) ;
- [Ace by DAISY App](https://inclusivepublishing.org/toolbox/ace-by-daisy-app/) est un utilitaire pour vérifier l’accessibilité d’un fichier EPUB.

Enfin, un logiciel ancien mais toujours utile pour évaluer la potentialité de certains contenus web à causer des crises d’épilepsie : [PEAT (Photosensitive Epilepsy Analysis Tool) pour Windows](https://trace.umd.edu/peat).
