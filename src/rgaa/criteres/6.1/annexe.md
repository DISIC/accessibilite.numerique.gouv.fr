---
WCAG: 
- successCriterion: 1.1.1
  title: Non-text Content
  level: A
- successCriterion: 2.4.4
  title: Link Purpose (In Context)
  level: A
- successCriterion: 2.5.3
  title: Label in Name
  level: A
Techniques: 
- H30
- H78
- H79
- H80
- H81
- G53
- G91
- F63
- F89
- ARIA7
- ARIA8
---

#### Cas particuliers

Il existe une gestion de cas particuliers pour les tests 6.1.1, 6.1.2, 6.1.3 et 6.1.4 lorsque le lien est [ambigu pour tout le monde](#ambigu-pour-tout-le-monde). Dans cette situation, où il n’est pas possible de rendre le lien explicite dans son contexte, le critère est non applicable.

Il existe une gestion de cas particuliers pour le test 6.1.5 lorsque :
* La ponctuation et les lettres majuscules sont présentes dans le texte de l’[intitulé visible](#intitule-visible) : elles peuvent être ignorées dans le nom accessible sans porter à conséquence ;
* Le texte de l’[intitulé visible](#intitule-visible) sert de symbole : le texte ne doit pas être interprété littéralement au niveau du nom accessible. Le nom doit exprimer la fonction véhiculée par le symbole (par exemple, “B” au niveau d’un éditeur de texte aura pour nom accessible “Mettre en gras”, le signe “>” en fonction du contexte signifiera “Suivant” ou “Lancer la vidéo”). Le cas des symboles mathématiques fait cependant exception (voir la note ci-dessous).

Note : si l’étiquette visible représente une expression mathématique, les symboles mathématiques peuvent être repris littéralement pour servir d’étiquette au nom accessible (ex. : “A>B”). Il est laissé à l’utilisateur le soin d’opérer la correspondance entre l’expression et ce qu’il doit épeler compte tenu de la connaissance qu’il a du fonctionnement de son logiciel de saisie vocale (“A plus grand que B” ou “A supérieur à B”).


#### Notes techniques

Lorsque l’intitulé visible est complété par une autre expression dans le nom accessible :
* WCAG insiste sur le placement de l’intitulé visible au début du nom accessible sans toutefois réserver l’exclusivité de cet emplacement ;
* WCAG considère comme un cas d’échec une correspondance non exacte de la chaîne de caractères de l’intitulé visible au sein du nom accessible.

Par exemple, si l’on considère l’intitulé visible « Commander maintenant » complété dans le nom accessible par l’expression «produit X », on peut avoir les différents cas suivants :
* « Commander maintenant produit X » est valide (bonne pratique) ;
* « Produit X : commander maintenant » est valide ;
* « Commander produit X maintenant » est non valide.