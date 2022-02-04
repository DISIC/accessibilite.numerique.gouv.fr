---
WCAG:
  - successCriterion: 3.3.1
    title: Error Identification
    level: A
  - successCriterion: 3.3.2
    title: Labels or Instructions
    level: A
Techniques:
  - G83
  - G84
  - G85
  - G89
  - G184
  - H44
  - H81
  - H89
  - H90
  - F81
  - SCR18
  - SCR32
  - ARIA1
  - ARIA2
  - ARIA6
  - ARIA9
  - ARIA16
  - ARIA21
---

#### Cas particuliers

Le test 11.10.1 et le test 11.10.2 seront considérés comme non applicables lorsque le formulaire comporte un seul [champ de formulaire](#champ-de-saisie-de-formulaire) ou qu’il indique les champs optionnels de manière :

- Visible ;
- Dans la balise `<label>` ou dans la [légende](#legende) associée au champ.

Dans le cas où l’ensemble des champs d’un formulaire sont obligatoires, les tests 11.10.1 et 11.10.2 restent applicables.

#### Notes techniques

Dans un long formulaire dont la majorité des champs sont obligatoires, on pourrait constater que ce sont les quelques champs restés facultatifs qui sont explicitement signalés comme tels. Dans ce cas, il faudrait s’assurer que :

- Un message précise visuellement en haut de formulaire que “tous les champs sont obligatoires sauf ceux indiqués comme étant facultatifs” ;
- Une mention “facultatif” est présente visuellement dans le libellé des champs facultatifs ou dans la légende d’un groupe de champs facultatifs ;
- Un attribut `required` ou `aria-required="true"` reste associé à chaque champ qui n’est pas concerné par ce caractère facultatif.
