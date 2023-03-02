---
title: Contraste
---

Opposition marquée entre la luminosité d’une couleur de premier plan et d’une couleur d’arrière-plan.
Le rapport de contraste est basé sur la différence de luminance relative entre l’arrière-plan et le premier plan selon la règle :
(L1 + 0,05) / (L2 + 0,05) où L1 est la luminance relative la plus claire et L2 la luminance relative la plus sombre. La luminosité est calculée selon la formule suivante : L = 0,2126 \* R + 0,7152 \* G + 0,0722 \* B. Où R, G et B sont définis par :

- Si R sRGB ≤ 0,03928 alors R = R sRGB /12,92 sinon R = ((R sRGB +0,055)/1,055) ^ 2,4 ;
- Si G sRGB ≤ 0,03928 alors G = G sRGB /12,92 sinon G = ((G sRGB +0,055)/1,055) ^ 2,4 ;
- Si B sRGB ≤ 0,03928 alors B = B sRGB /12.92 sinon B = ((B sRGB +0,055)/1,055) ^ 2,4.

et R sRGB, G sRGB et B sRGB sont définis par :

- R sRGB = R8bit/255 ;
- G sRGB = G8bit/255 ;
- B sRGB = B8bit/255.

Le caractère « ^ » est l’opérateur de puissance.

Note : la mesure de contraste concerne le texte, le texte en image, le texte et le texte en image dans les animations, le texte de sous-titrage et le texte incrusté dans les vidéos. Pour le texte et le texte en image dans les animations, le texte de sous-titrage et le texte incrusté dans les vidéos, la taille de la police doit être mesurée par rapport à la taille d’affichage par défaut (telle qu’affichée). Les textes présents dans les éléments d’une image ou d’une vidéo (par exemple un écriteau, une affiche…) ne sont pas concernés.

Source (en anglais) : [Procédure de calcul de contraste des WCAG](https://www.w3.org/WAI/WCAG21/Techniques/general/G18#procedure).
