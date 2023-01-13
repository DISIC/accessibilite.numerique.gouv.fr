---
title: Notes de révision du RGAA 4.1 vers 4.1.1
layout: layouts/base.njk
descirption: 
eleventyNavigation:
  title: Ressources
  parent: ressources
  order: 6
---

Cet erratum signale les corrections apportées aux sections critères et glossaire de la version 4 du RGAA. Ces corrections concernent les [critères](#criteres) (tests, cas particuliers et notes techniques) ainsi que le [glossaire](#glossaire).

Ces corrections ont été reportées directement aux fichiers criteres.json et glossaire.json disponibles sur le dépôt GitHub du RGAA.

Les différentes sources de cette mise à jour sont :
* Les issues GitHub du dépôt RGAA (https://github.com/DISIC/RGAA/issues) ; ces modifications sont signalées par la mention “issue” suivie du numéro de l’issue en question ;
* Des modifications actées sur la plateforme évolution RGAA qui n’ont pas été reportées lors de la consolidation du référentiel ; ces modifications sont signalées par la mention “évolution RGAA” ;
* Des retours internes concernant des modifications de forme comme de fond ; dans ce dernier cas, ce sont des remarques de fond ne faisant pas question qui ont été corrigées ; ces modifications sont signalées par la mention “retour interne”.


<h2 class="fr-mt-4w" id="criteres">Critères</h2>
 
### Critère 1.1

Modification du test 1.1.4 afin de tenir compte de mécanismes autres que des liens (par exemple, les options d’un élément select) pour assurer l’alternative à une zone réactive (retour interne) :

“Chaque zone cliquable d’une image réactive côté serveur est-elle doublée d’un lien dans la page ?”

est remplacée par :

“Chaque zone cliquable d’une image réactive côté serveur est-elle doublée d’un mécanisme utilisable quel que soit le dispositif de pointage utilisé et permettant d’accéder à la même destination ?”

Modification de la première condition du test 1.1.6 (issue #56) :

“La balise `<object>` possède une alternative textuelle”

est remplacée par :

“La balise `<object>` possède une alternative textuelle et un attribut role='img'”

Modification de la première condition du test 1.1.7 (issue #56) :

“La balise `<embed>` possède une alternative textuelle”

est remplacée par :

“La balise `<embed>` possède une alternative textuelle et un attribut role='img'”

Modification de la première condition du test 1.1.8 (issue #56) :

“La balise `<canvas>` possède une alternative textuelle”

est remplacée par :

“La balise `<canvas>` possède une alternative textuelle et un attribut role='img'”

### Critère 1.3

Modification de la première condition du test 1.3.6 (issue #39) :

“S’il est présent, le contenu de l’attribut title est pertinent.”

est remplacée par :

“S’il est présent, le contenu de l’élément `<title>` est pertinent.”

### Critère 1.6

Suppression du lien associé à l’entrée de glossaire “URL” dans le test 1.6.1 (issue #22).

Modification du deuxième paragraphe de la note technique (issue #61) :

“L’utilisation de l’attribut WAI-ARIA aria-describedby n’est pas possible pour lier une image à sa description détaillée par manque de support des technologies d’assistance.”

est remplacé par :

“L’utilisation de l’attribut WAI-ARIA aria-describedby n’est pas recommandée pour lier une image (`<img>`, `<object>`, `<embed>`, `<canvas>`) à sa description détaillée, par manque de support des technologies d’assistance. Néanmoins, lorsqu’il est utilisé, l’attribut devra nécessairement faire référence à l’id de la zone contenant la description détaillée.”

### Critère 1.8

Ajout du test 1.8.6 (issue #76) :

“Chaque image texte SVG (balise `<svg>`) porteuse d’information et dont le texte n’est pas complètement structuré au moyen d’éléments `<text>`, en l’absence d’un mécanisme de remplacement, doit si possible être remplacée par du texte stylé. Cette règle est-elle respectée (hors cas particuliers) ?”

### Critère 4.8

Modification dans le test 4.8.1 (issue #36) :

“Un lien ou bouton adjacent, clairement identifiable, contient l’adresse (url) d’une page contenant une alternative.”

est remplacée par :

“Un lien ou un bouton adjacent, clairement identifiable, permet d’accéder à une page contenant une alternative.”

### Critère 5.1

Ajout d’une note technique manquante (évolution RGAA) :

“La spécification HTML propose plusieurs méthodes pour lier un résumé à un tableau (tableau lié à un passage de texte avec l’attribut aria-describedby, tableau groupé dans un élément figure avec un résumé présent dans un élément figcaption ou un élément p, résumé présent dans un élément details contenu dans l’élément caption). Ces méthodes n’ont pas un support suffisant pour être utilisées actuellement.”

### Critère 5.3

Suppression de la mention “(hors cas particuliers)” du critère 5.3 et du test 5.3.1 (issue #16) :

“critère 5.3. Pour chaque tableau de mise en forme, le contenu linéarisé reste-t-il compréhensible (hors cas particuliers) ?”

est remplacé par :

“critère 5.3 Pour chaque tableau de mise en forme, le contenu linéarisé́ reste-t-il compréhensible ?”

“Test 5.3.1 : Chaque tableau de mise en forme vérifie-t-il ces conditions (hors cas particuliers) ?”

est remplacé par :

“Test 5.3.1 : Chaque tableau de mise en forme vérifie-t-il ces conditions ?”

### Critère 5.6

Ajout du test 5.6.4 manquant concernant la restriction de l’usage des attributs WAI-ARIA aux tableaux de données complexes (évolution RGAA) :

“Pour chaque tableau de données, chaque cellule associée à plusieurs en-têtes est-elle structurée au moyen d’une balise `<td>` ou `<th>` ?”

### Critère 5.8

Ajout de la référence à l’attribut summary dans la première condition du test 5.8.1 (issue #67) :

“Le tableau de mise en forme (balise `<table>`) ne contient pas de balises `<caption>`, `<th>`, `<thead>`, `<tfoot>`, `<colgroup>` ou de balises ayant un attribut WAI-ARIA role='rowheader', role='columnheader'.”

est remplacé par :

“Le tableau de mise en forme (balise `<table>`) n’a pas d’attribut summary (sinon vide) et ne contient pas de balises `<caption>`, `<th>`, `<thead>`, `<tfoot>`, `<colgroup>` ou de balises ayant un attribut WAI-ARIA role='rowheader', role='columnheader'.”

### Critère 6.1

Ajout d’une note technique manquante concernant la précision sur le placement de l’intitulé visible dans le nom accessible (évolution RGAA) :

"Lorsque l’intitulé visible est complété par une autre expression dans le nom accessible :
* WCAG insiste sur le placement de l’intitulé visible au début du nom accessible sans toutefois réserver l’exclusivité de cet emplacement ;
* WCAG considère comme un cas d’échec une correspondance non exacte de la chaîne de caractères de l’intitulé visible au sein du nom accessible.

Par exemple, si l’on considère l’intitulé visible « Commander maintenant » complété dans le nom accessible par l’expression «produit X », on peut avoir les différents cas suivants :
* « Commander maintenant produit X» est valide (bonne pratique) ;
* « Produit X : commander maintenant » est valide ;
* « Commander produit X maintenant » est non valide.”


### Critère 6.2

Modification de l’intitulé du critère (issue #54) :

“Dans chaque page web, chaque lien, à l’exception des ancres, a-t-il un intitulé ?”

est remplacé par :

“Dans chaque page web, chaque lien a-t-il un intitulé ?”

Modification consécutive de l’intitulé du test 6.2.1 :

“Dans chaque page web, chaque lien, à l’exception des ancres, a-t-il un intitulé entre `<a>` et `</a>` ?”

est remplacé par :

“Dans chaque page web, chaque lien a-t-il un intitulé entre `<a>` et `</a>` ?”

Ajout d’une note technique :

“Une ancre n’est pas un lien même si pendant longtemps l’élément `<a>` a servi de support à cette technique. Elle n’est donc pas concernée par le présent critère.”

### Critère 8.2

Suppression du cas particulier (issue #73).

Suppression de la mention “(hors cas particuliers)” du critère 8.2 et du test 8.2.1.

### Critère 8.3

Suppression du cas particulier copié de 8.2 (retour interne).

### Critère 9.1

Suppression du second paragraphe de la note technique (issue #20) :

“WAI-ARIA permet de définir des titres via le rôle heading et l’attribut aria-level (indication du niveau de titre). Bien qu’il soit préférable d’utiliser l’élément de titre natif en HTML `<hx>`, l’utilisation du rôle WAI-ARIA heading est compatible avec l’accessibilité.”, “Bien que la spécification HTML5 autorise l’utilisation exclusive de titres de niveau 1 (h1), le manque de support des technologies d’assistance oblige à utiliser une hiérarchie de titres pertinente.”

est remplacé par :

“WAI-ARIA permet de définir des titres via le rôle heading et l’attribut aria-level (indication du niveau de titre). Bien qu’il soit préférable d’utiliser l’élément de titre natif en HTML `<hx>`, l’utilisation du rôle WAI-ARIA heading est compatible avec l’accessibilité.”

Suppression de la technique WCAG H69 des références du critère 9.1 (issue #21).

### Critère 10.2

Modification de l’intitulé du critère (issue #48) :

“Dans chaque page web, le contenu visible reste-t-il présent lorsque les feuilles de styles sont désactivées ?”

est remplacé par :

“Dans chaque page web, le contenu visible porteur d’information reste-t-il présent lorsque les feuilles de styles sont désactivées ?”

### Critère 10.4

Suppression du test 10.4.1 (issue #18) et renumérotation consécutive des tests suivants : les tests 10.4.2 et 10.4.3 sont renumérotés respectivement en 10.4.1 et 10.4.2.

### Critère 10.11

Modification de l’intitulé incorrect du critère (issue #29) :

“Pour chaque page web, les contenus peuvent-ils être présentés sans avoir recours à la fois à un défilement vertical pour une fenêtre ayant une hauteur de 256px ou une largeur de 320px (hors cas particuliers) ?”

est remplacée par :

“Pour chaque page web, les contenus peuvent-ils être présentés sans avoir recours à un défilement vertical pour une fenêtre ayant une hauteur de 256px ou à un défilement horizontal pour une fenêtre ayant une largeur de 320px (hors cas particuliers) ?”

Ajout d’une note technique (issue #50) :

“Lorsqu’il est ici question de pixel, il s’agit du pixel CSS tel que défini par le W3C (https://www.w3.org/TR/css3-values/#reference-pixel).”

Modification dans le cas particulier (issue #78) :

“Les tableaux de données (complexes)”

est remplacée par :

“Les tableaux de données”

### Critère 11.1

Modification de la cinquième condition du test 11.1.1 (issue #25) :

“Un bouton adjacent au champ de formulaire lui fournit une étiquette visible et un attribut WAI-ARIA aria-label, aria-labelledby ou title lui fournit un nom accessible.”

est remplacée par :

“Un bouton adjacent au champ de formulaire lui fournit une étiquette visible et un élément `<label>` visuellement caché ou un attribut WAI-ARIA aria-label, aria-labelledby ou title lui fournit un nom accessible.”

### Critère 11.4

Modification dans les deux conditions du test 11.4.3 de l’occurrence “au-dessus” par “au-dessous” (issue #26) :

“L’étiquette est visuellement accolée immédiatement au-dessus ou à droite du champ de formulaire lorsque le sens de lecture de la langue de l’étiquette est de gauche à droite.”

est remplacée par :

“L’étiquette est visuellement accolée immédiatement au-dessous ou à droite du champ de formulaire lorsque le sens de lecture de la langue de l’étiquette est de gauche à droite.”

“L’étiquette est visuellement accolée immédiatement au-dessus ou à gauche du champ de formulaire lorsque le sens de lecture de la langue de l’étiquette est de droite à gauche.”

est remplacée par :

“L’étiquette est visuellement accolée immédiatement au-dessous ou à gauche du champ de formulaire lorsque le sens de lecture de la langue de l’étiquette est de droite à gauche.”

### Critère 11.6

Modification de l’intitulé du critère (évolution RGAA) :

“Dans chaque formulaire, chaque regroupement de champs de formulaire a-t-il une légende ?”

est remplacée par :

“Dans chaque formulaire, chaque regroupement de champs de même nature a-t-il une légende ?”

### Critère 11.10

Modification de la formulation des conditions du test 11.10.4, car c’est un doublon des conditions du test 11.10.2 (retour interne) :

“Les champs obligatoires ayant l’attribut aria-invalid='true' vérifient-ils une de ces conditions ?
* Une indication de champ obligatoire est visible et située dans l’étiquette associée au champ.
* Une indication de champ obligatoire est visible et située dans le passage de texte associé au champ.”

est remplacée par :

“Les champs obligatoires ayant l’attribut aria-invalid='true' vérifient-ils une de ces conditions ?
* Le message d’erreur indiquant le caractère invalide de la saisie est visible et situé dans l’étiquette associée au champ.
* Le message d’erreur indiquant le caractère invalide de la saisie est visible et situé dans le passage de texte associé au champ.”

Ajout d’un cas d’usage dans une note technique (issue #2) :

“Dans un long formulaire dont la majorité des champs sont obligatoires, on pourrait constater que ce sont les quelques champs restés facultatifs qui sont explicitement signalés comme tels. Dans ce cas, il faudrait s’assurer que :
* Un message précise visuellement en haut de formulaire que “tous les champs sont obligatoires sauf ceux indiqués comme étant facultatifs” ;
* Une mention “facultatif” est présente visuellement dans le libellé des champs facultatifs ou dans la légende d’un groupe de champs facultatifs ;
* Un attribut required ou aria-required='true' reste associé à chaque champ qui n’est pas concerné par ce caractère facultatif.”

Modification de la formulation du cas particulier pour tenir compte du test 11.10.2 :

“Le test 11.10.1 et le test 11.10.2 seront considérés comme non applicables lorsque le formulaire comporte un seul champ de formulaire ou qu’il indique les champs optionnels de manière :
* Visible ;
* Dans la balise `<label>` ou dans la légende associée au champ.

Dans le cas où l’ensemble des champs d’un formulaire sont obligatoires, les tests 11.10.1 et 11.10.2 restent applicables.”

### Critère 11.12

L’intitulé du critère n’est pas bon puisqu’il correspond à l’énoncé du premier test (retour interne) :

“Pour chaque formulaire qui modifie ou supprime des données, ou qui transmet des réponses à un test ou à un examen, ou dont la validation a des conséquences financières ou juridiques, la saisie des données vérifie-t-elle une de ces conditions ?”

est remplacée par :

“Pour chaque formulaire qui modifie ou supprime des données, ou qui transmet des réponses à un test ou à un examen, ou dont la validation a des conséquences financières ou juridiques, les données saisies peuvent-elles être modifiées, mises à jour ou récupérées par l’utilisateur ?”

### Critère 12.1

Modification manquante du cas particulier (évolution RGAA) :

“Il existe une gestion de cas particulier lorsque le site web est constitué d’une seule page ou d’un nombre très limité de pages (cf. note) pour lesquels la fonction de recherche du navigateur dans le contenu est considérée comme équivalente à un moteur de recherche. Dans ce cas-là, le critère est non applicable.

Note : l’appréciation d’un nombre très limité de pages devrait réserver ce cas particulier à un site de 2 ou 3 pages, par exemple, avec un volume de contenu peu important.”

est remplacée par :

“Il existe une gestion de cas particulier lorsque le site web est constitué d’une seule page ou d’un nombre très limité de pages (cf. note). Dans ce cas-là, le critère est non applicable.

Le critère est également non applicable pour les pages d’un ensemble de pages qui sont le résultat ou une partie d’un processus (un processus de paiement ou de prise de commande, par exemple) ;

Note : l’appréciation d’un nombre très limité de pages devrait être réservé à un site dont l’ensemble des pages sont atteignables depuis la page d’accueil.”

### Critère 12.2

Modification manquante du cas particulier suite à la suppression de l’exception concernant les pages d’un ensemble de pages qui sont le résultat ou une partie d’un processus (ce qui n’est pas prévu au critère 3.2.3 des WCAG), et l’ajout d’une exception lorsque la modification est initiée par l’utilisateur (évolution RGAA) :

“Il existe une gestion de cas particulier lorsque :

* Les pages d’un ensemble de pages sont le résultat ou une partie d’un processus (un processus de paiement ou de prise de commande, par exemple) ;
* La page est la page d’accueil ;
* Le site web est constitué d’une seule page.

Dans ces situations, le critère est non applicable.”

est remplacée par :

“Il existe une gestion de cas particulier lorsque :

* La page est la page d’accueil ;
* Le site web est constitué d’une seule page ;
* Le changement fait suite à une modification initiée par l’utilisateur.

Dans ces situations, le critère est non applicable.”

### Critère 12.6

Ajout de la technique WCAG H69 aux références du critère 12.6 (issue #21).

Modification de l’intitulé de la deuxième condition du test 12.6.1 (issue #70) :

“La zone possède un titre de hiérarchie dont le contenu permet de comprendre la nature du contenu de la zone.”

est remplacée par :

“La zone possède un titre dont le contenu permet de comprendre la nature du contenu de la zone.”

Modification de la dernière condition du test 12.6.1 (issue #14) :

“La zone peut être atteinte par le biais d’un lien d’accès rapide visible à la prise de focus lors d’une tabulation.”

est remplacée par :

“La zone peut être atteinte par le biais d’un lien d’accès rapide visible ou, à défaut, visible à la prise de focus.”

### Critère 12.7

Modification de la troisième condition du test 12.7.2 (issue #14) :

“Le lien est visible à la prise de focus au moins.”

est remplacée par :

“Le lien est visible ou, à défaut, visible à la prise de focus.”

Ajout d’une quatrième condition au test 12.7.2 (issue #19) :

“Le lien est fonctionnel.”

### Critère 12.10

Ajout de deux techniques WCAG récemment associées au SC 2.1.4 (issue #71) :

* G217 (https://www.w3.org/WAI/WCAG21/Techniques/general/G217) ;
* F99 (https://www.w3.org/WAI/WCAG21/Techniques/failures/F99).


### Critère 13.1

Suppression du lien associé à l’entrée de glossaire “URL” dans le cas particulier (issue #61).

### Critère 13.2

Suppression des techniques WCAG F22, F52 et F60 qui sont associées au SC 3.2.5 et donc hors du périmètre du critère 13.2 (retour interne).

### Critère 13.4

Suppression du cas particulier copié de 13.3 (retour interne).

### Critère 13.5

Suppression de la référence à la technique G160 (issue #57).

### Critère 13.7

Modification de l’intitulé du test 13.7.1 (issue #75) :

“Dans chaque page web, chaque image (balise `<img>`, balise `<svg>`, balise `<canvas>`, balise `<embed>` ou balise `<object>`) qui provoque un changement brusque de luminosité ou un effet de flash vérifie-t-elle une de ces conditions ?”

est remplacé par :

“Dans chaque page web, chaque image ou élément multimédia (balise `<video>`, balise `<img>`, balise `<svg>`, balise `<canvas>`, balise `<embed>` ou balise `<object>`) qui provoque un changement brusque de luminosité ou un effet de flash vérifie-t-il une de ces conditions ?”

### Critère 13.10

Ajout de deux techniques WCAG récemment associées au SC 2.5.1 (retour interne) :

* G215 (https://www.w3.org/WAI/WCAG21/Techniques/general/G215) ;
* G216 (https://www.w3.org/WAI/WCAG21/Techniques/general/G216).


### Critère 13.11

Ajout d’une note technique manquante concernant les précisions sur les types de mécanisme d’annulation proposés par WCAG (évolution RGAA) :

“Deux exemples de mécanisme mis en place pour annuler ou abandonner une action déclenchée au moyen d’un dispositif de pointage sur un point unique de l’écran :

* Une fenêtre modale permettant d’annuler l’action après son achèvement ;
* Pour une fonction de glisser/déposer, le fait d’abandonner l’action si l’utilisateur relâche l’élément en dehors de la zone cible.”


<h2 class="fr-mt-4w" id="glossaire">Glossaire</h2>

### Accéder à chaque page de la collection de pages

Suppression de l’entrée, car le critère qui concernait l’accès à une collection de pages a lui-même été supprimé (retour interne).

### Alerte

Suppression de l’entrée, car le critère qui mentionnait ce terme a été retiré (retour interne).

### Alternative à une image SVG

Suppression de l’entrée qui a été remplacée plus globalement par l’entrée “Alternative textuelle (image)” (retour interne).

### Alternative textuelle

Ajout d’une sixième note technique à l’entrée de glossaire (issue #56) :

“Note 6 : bien que l’attribut title soit considéré comme une possibilité d’alternative textuelle à une image, son usage peut poser problème, notamment du fait qu’une image avec un attribut alt absent ou vide est considérée comme une image pourvue d’un rôle “présentation” par WAI-ARIA : https://www.w3.org/TR/html-aam-1.0/#details-id-54. Il faut s’assurer que les assistances techniques présentes dans l’environnement de test retenu restituent correctement l’alternative proposée par l’attribut title.”
Ancre

Suppression de l’entrée de glossaire “Ancre” (issue #54).

### Changement brusque de luminosité ou effet de flash

Les occurrences de “luminosité relative” sont remplacées par “luminance relative” (issue #46).

### Contenu caché

La référence au critère 10.13 est erronée. Il s’agit du critère 10.8 (retour interne).

### Contexte du lien

Modification de la note 2 (issue #52) :

“Note 2 : RGAA considère que des liens particuliers comme des liens de type mailto (qui génère un lien sous la forme d’une adresse email cliquable) sont suffisamment explicites et ne requièrent pas de signaler que l’action consiste à envoyer un email. L’attention des auteurs est appelée sur le fait que cette règle générale peut être adaptée au contexte, par exemple si la page contient plusieurs adresses email cliquables affectées de comportements différents (envoyer un email via le client de messagerie pour l’une, accéder à un formulaire pour l’autre) il peut être nécessaire de donner des informations complémentaires sur l’action du lien afin de différencier leurs comportements.”

est remplacée par :

“Note 2 : RGAA considère qu’une adresse e-mail de type xxx@xxx.yyy est un texte de lien suffisant pour comprendre la fonction du lien et ne requiert pas de signaler plus explicitement l’action.”

### Contraste

Modification de la traduction de certains termes utilisés (issue #46) :

“Le caractère « ^ » est l’opérateur exponentiel.”

est remplacée par:

“Le caractère « ^ » est l’opérateur de puissance.”

Les différentes occurrences de “luminosité relative” sont remplacées par “luminance relative”.

### Contrôle de la consultation (d’un média temporel)

Suppression de la répétition de “Liste des fonctionnalités obligatoires de contrôle de la consultation :” (retour interne).

Suppression de l’exigence “Si l’objet multimédia a des sous-titres, il doit avoir une fonctionnalité de contrôle de l’apparition/disparition des sous-titres;” qui n’est pas dans WCAG (retour interne).
“Indication de format obligatoire” et “Indication du type de données et/ou de format”

Ces deux entrées ont été replacées dans le bon ordre alphabétique (retour interne).

### Indication de format obligatoire

Modification de l’intitulé de l’entrée par “Indication de champ obligatoire” (issue #42).

Modification de la note :

“Note : Dans le cas où cette indication n’est pas réalisée de manière textuelle explicite (icône, *, !,…) l’explication de la signification de cette indication doit être visible et dans l’ordre du code source se situer avant la première utilisation de l’indication.”

est remplacée par :

“Note : Dans le cas où cette indication n’est pas réalisée de manière textuelle explicite (icône, “*”, “!”, etc.), l’explication de la signification de cette indication doit se situer, visuellement et dans l’ordre du code source, avant la première utilisation de l’indication.”

### Intitulé (ou nom accessible) de lien

Suppression de la mention “(à l’exception des ancres)” dans la note 4 (issue #54) :

“Note 4 : lorsqu’un lien ne comporte aucun contenu (à l’exception des ancres), il sera non conforme au regard du critère 10.2 et du critère 6.4.”

est remplacée par :

“Note 4 : lorsqu’un lien ne comporte aucun contenu, il sera non conforme au regard du critère 10.2 et du critère 6.2.”,

### Items de même nature des listes de choix

Modification de l’intitulé en “Items de même nature d’une liste de choix” (retour interne).
Légende

Modification du second paragraphe par souci de clarté (retour interne)

“Il est également possible de créer des regroupements avec le rôle WAI-ARIA group et un passage de texte, faisant office de légende, liée par l’attribut WAI-ARIA aria-labelledby ou implémentée par l’intermédiaire d’un attribut WAI-ARIA aria-label.”

est remplacée par :

“Il est également possible de créer des regroupements avec le rôle WAI-ARIA group et un passage de texte, faisant office de légende, lié par l’attribut WAI-ARIA aria-labelledby ou fourni par un attribut WAI-ARIA aria-label.”

### Lien dont la nature n’est pas évidente

Suppression de la dernière phase du premier paragraphe (issue #59) :

“Lien qui peut être confondu avec un texte normal lorsqu’il est signalé uniquement par la couleur par certains types d’utilisateurs ne percevant pas ou mal les couleurs. Par exemple, dans ce texte “Nouvelle grève à la SNCF”, si le mot “grève” est un lien signalé uniquement par la couleur, sa nature peut être ignorée par les utilisateurs ne percevant pas la couleur et accédant au contenu CSS activé. En revanche, dans ce texte “Nouvelle grève à la SNCF, lire la suite” si “lire la suite” est un lien, un utilisateur ne percevant pas les couleurs n’aura pas de problème pour en comprendre la nature.”

est remplacée par :

“Lien qui peut être confondu avec un texte normal lorsqu’il est signalé uniquement par la couleur par certains types d’utilisateurs ne percevant pas ou mal les couleurs. Par exemple, dans ce texte “Nouvelle grève à la SNCF”, si le mot “grève” est un lien signalé uniquement par la couleur, sa nature peut être ignorée par les utilisateurs ne percevant pas la couleur et accédant au contenu CSS activé.”

### Liens d’évitement ou d’accès rapide

Modification de la note 1 pour préciser le caractère fonctionnel du lien (issue #19) :

“Note 1 : Un lien d’évitement ou d’accès rapide dont l’activation ne permettrait pas de reprendre la lecture et la navigation clavier à partir de la cible du lien lors de l’utilisation des navigateurs et des aides techniques retenus dans l’environnement de test (ou « base de référence ») de l’audit serait considéré comme non conforme.”

est remplacée par :

“Note 1 : Un lien d’évitement ou d’accès rapide fonctionnel est un lien dont l’activation permet de reprendre la lecture et la navigation clavier à partir de la cible du lien lors de l’utilisation des navigateurs et des aides techniques retenus dans l’environnement de test (ou « base de référence ») de l’audit.”.

### Liens identiques

Suppression de l’entrée, car le critère qui mentionnait cette expression a été retiré (retour interne).
Mécanisme qui permet d’afficher un rapport de contraste conforme

Modification de l’entrée de glossaire (issue #40 et issue #72) :

“Composant d’interface dont l’activation permet de modifier l’apparence du site ou de la page de manière à afficher les contenus avec un ratio de contraste suffisant. Le design de ce composant d’interface devra être conforme au critère 3.2 et au critère 3.3 sans avoir recours lui-même à un mécanisme permettant d’afficher un rapport de contraste conforme.”

est remplacée par :

“Composant d’interface dont l’activation permet de modifier l’apparence du site ou de la page de manière à afficher les contenus avec un ratio de contraste suffisant. Le design de ce composant d’interface devra être conforme au critère 3.2 et au critère 3.3 sans avoir recours lui-même à un mécanisme permettant d’afficher un rapport de contraste conforme. Ce mécanisme doit conserver à l’identique les contenus et les fonctionnalités du site ou de la page qu’il modifie.”


### Média non temporel

Modification de l’entrée de glossaire (issue #6) :

“Note : l’utilisation du paramètre wmode pour un objet Flash avec les valeurs \"transparent\" et \"opaque\" invalide de fait le critère 4.12. En effet, l’utilisation de ces valeurs a pour conséquence que l’animation Flash vue du côté des utilisateurs de lecteur d’écran est invisible.”

est remplacée par :

“Note : l’utilisation du paramètre wmode pour un objet Flash avec les valeurs \"transparent\" et \"opaque\" invalide de fait le critère 4.13. En effet, l’utilisation de ces valeurs a pour conséquence que l’animation Flash vue du côté des utilisateurs de lecteur d’écran est invisible.”
Média temporel (type son, vidéo et synchronisé)

Modification de l’entrée de glossaire (issue #6) :

“Note 1 : l’utilisation du paramètre wmode pour un objet Flash avec les valeurs \"transparent\" et \"opaque\" invalide de fait le critère 4.11. En effet, l’utilisation de ces valeurs a pour conséquence que l’animation Flash vue du côté des utilisateurs de lecteur d’écran est invisible.”

est remplacée par :

“Note 1 : l’utilisation du paramètre wmode pour un objet Flash avec les valeurs \"transparent\" et \"opaque\" invalide de fait le critère 4.13. En effet, l’utilisation de ces valeurs a pour conséquence que l’animation Flash vue du côté des utilisateurs de lecteur d’écran est invisible.”

### Moteur de recherche (interne à un site web)

Modification de l’entrée de glossaire afin de tenir compte de la précision (retour interne) : “Check that the Web page contains a search form or a link to a search page” (https://www.w3.org/WAI/WCAG21/Techniques/general/G161) :

“Zone contenant le moteur de recherche permettant d’effectuer des recherches sur les contenus de l’ensemble du site.”

est remplacée par :

“Zone donnant accès directement (formulaire) ou indirectement (élément d’interface donnant accès au formulaire) au moteur de recherche qui permet d’effectuer des recherches sur les contenus de l’ensemble du site.”
Passage de texte associé au tableau de données

Suppression de cette entrée lacunaire au profit de l’entrée “Tableau de données ayant un titre” (issue #41).
Pertinence (information autrement que par la couleur)

Suppression de l’entrée, car le critère qui mentionnait cette expression a été retiré (retour interne).

### Raccourci clavier

Modification de la référence erronée au critère 12.15 par la référence au critère 12.10 (retour interne).
Correctement restitué (par les technologies d’assistance)

Modification du quatrième paragraphe (issue #43) :

“On procède alors à un test avec NVDA (dernière version) et Firefox, JAWS (version précédente) et IE9+, et Voice Over (dernière version) et Safari.”

est remplacée par :

“On procède alors à un test avec les outils de l’environnement de test défini pour le site.”

Modification de l’exemple et de la référence à l’ancien test 1.3.7 supprimé (issue #6) :

“Par exemple : le test 1.3.7 demande de vérifier que l’alternative d’une image porteuse d’information vectorielle est correctement restituée.”

est remplacée par :

“Par exemple : le test 1.3.8 demande de vérifier que l’alternative d’une image bitmap (balise `<canvas>`) porteuse d’information est correctement restituée.”,
Si nécessaire (texte visible en complément de l’attribut aria-label ou aria-labelledby)

Suppression de l’entrée, car le test qui mentionnait cette expression a été retiré (retour interne).

### Titre

Les deux points suivants ne sont pas requis par les WCAG :

    La présence nécessaire d’un titre `<h1>` même si une hiérarchie de titres est présente ;
    L’absence de sauts hiérarchiques entre niveaux de titre.

Modification en conséquence du second paragraphe de l’entrée du glossaire (issue #51) :

“La hiérarchie entre les titres doit être respectée dans une page web et les degrés de titre ne peuvent pas être sautés (un titre h3 ne peut pas venir directement après un titre h1, par exemple). Par contre, la hiérarchie ne doit pas obligatoirement débuter par un h1. Même si cet usage n’est pas encouragé, il est considéré comme conforme de débuter la hiérarchie des titres d’une page par un autre niveau que le niveau 1.”

est remplacée par :

“Assurer une stricte hiérarchie entre les titres d’une page web est une bonne pratique, mais la présence de sauts hiérarchiques n’invalide pas le critère tant que cette hiérarchie plus lâche reste cohérente (un titre `<h3>` peut ainsi venir directement après un titre `<h1>`, par exemple). La hiérarchie de titres ne doit pas obligatoirement contenir un titre `<h1>`. Même si ces pratiques ne sont pas encouragées, elles n’invalident pas le critère.”

Modification de la note :

“Note : les titres cachés via CSS sont considérés comme présents et valident le critère 9.1.”

est remplacée par :

“Note : les titres visuellement cachés via CSS sont considérés comme présents et valident le critère 9.1.”

### Titre de cadre

Modification de la note 2 (issue #44) :

“Note 2 : Si cela ne gêne pas le fonctionnement de ce type de cadre, il est possible de les rendre indisponibles aux technologies d’assistance en utilisant l’attribut WAI-ARIA aria-hidden='true'. Dans ce cas le critère 2.2 sera non applicable.”

est remplacée par :

“Note 2 : Si cela ne gêne pas le fonctionnement de ce type de cadre, il est possible de les rendre indisponibles aux technologies d’assistance en utilisant l’attribut WAI-ARIA aria-hidden='true'. Dans ce cas le critère 2.1 et le critère 2.2 seront non applicables.”

### Version accessible (pour un document en téléchargement)

Suppression de la phrase faisant référence à un document obsolescent (RGAA 3) présent sur un site désormais fermé (retour interne) :

“Les contenus doivent être conformes à la liste des critères Documents Bureautiques en téléchargement (format ODT, 74 kilo-octets).”

### URL

Suppression de l’entrée de glossaire “URL” (issue #61).
