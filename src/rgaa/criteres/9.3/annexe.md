---
WCAG:
  - successCriterion: 1.3.1
    title: Info and Relationships
    level: A
Techniques:
  - G115
  - G153
  - H40
  - H48
  - F2
---

#### Notes techniques

Les attributs WAI-ARIA `role="list"` et `role="listitem"` peuvent nécessiter l’utilisation des attributs WAI-ARIA `aria-setsize` et `aria-posinset` dans le cas où l’ensemble de la liste n’est pas disponible via le DOM généré au moment de la consultation.

Les attributs WAI-ARIA `role="tree"`, `role="tablist"`, `role="menu"`, `role="combobox"` et `role="listbox"` ne sont pas équivalents à une liste HTML `<ul>` ou `<ol>`.
