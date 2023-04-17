---
WCAG:
  - successCriterion: 3.3.3
    title: Error Suggestion
    level: AA
Techniques:
  - G84
  - G85
  - G89
  - G177
  - H89
---

#### Notes techniques

Certains types de contrôles en HTML5 proposent des messages d’aide à la saisie automatique : par exemple le type `email` affiche un message du type « veuillez saisir une adresse e-mail valide » dans le cas où l’adresse e-mail saisie ne correspond pas au format attendu. Ces messages sont personnalisables via l’API Constraint Validation, ce qui permet de personnaliser les messages d’erreur et de valider le critère. L’attribut `pattern` permet d’effectuer automatiquement des contrôles de format (via des expressions régulières) et affiche un message d’aide personnalisable via l’attribut `title` : ce dispositif valide également le critère.
