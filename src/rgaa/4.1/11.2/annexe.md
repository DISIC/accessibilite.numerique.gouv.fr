---
WCAG:
  - successCriterion: 2.4.6
    title: Headings and Labels
    level: AA
  - successCriterion: 2.5.3
    title: Label in Name
    level: A
  - successCriterion: 3.3.2
    title: Labels or Instructions
    level: A
Techniques:
  - G82
  - G131
  - H44
  - H65
  - ARIA6
  - ARIA9
  - ARIA14
  - ARIA16
---

#### Cas particuliers

Il existe une gestion de cas particuliers pour le test 11.2.5 lorsque :

- La ponctuation et les lettres majuscules sont présentes dans le texte de l’[intitulé visible](#intitule-visible) : elles peuvent être ignorées dans le nom accessible sans porter à conséquence ;
- Le texte de l’[intitulé visible](#intitule-visible) sert de symbole : le texte ne doit pas être interprété littéralement au niveau du nom accessible. Le nom doit exprimer la fonction véhiculée par le symbole (par exemple, “B” au niveau d’un éditeur de texte aura pour nom accessible “Mettre en gras”, le signe “>” en fonction du contexte signifiera “Suivant” ou “Lancer la vidéo”). Le cas des symboles mathématiques fait cependant exception (voir la note ci-dessous).

Note : si l’étiquette visible représente une expression mathématique, les symboles mathématiques peuvent être repris littéralement pour servir d’étiquette au nom accessible (ex. : “A>B”). Il est laissé à l’utilisateur le soin d’opérer la correspondance entre l’expression et ce qu’il doit épeler compte tenu de la connaissance qu’il a du fonctionnement de son logiciel de saisie vocale (“A plus grand que B” ou “A supérieur à B”).

Ce cas particulier s’applique également au test 11.9.2.
