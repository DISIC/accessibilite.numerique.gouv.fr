// Handle the 3 filters in criteria page
const filtresEl = document.querySelector("#filtres-criteres");
if (filtresEl) {
	// Everything happens under "filtres-criteres" element
	filtresEl.addEventListener("change", function (e) {
		const curEl = e.target;
		const filter = curEl.dataset.filter;
		const checked = curEl.checked;
		switch (filter) {
			case "all":
				const criteriaEls =
					filtresEl.parentElement.getElementsByTagName("button");
				Array.from(criteriaEls).forEach(function (el) {
					el.setAttribute("aria-expanded", checked);
				});
				break;
			case "A":
				break;
			case "AA":
				break;
			default:
				// should never happen
				break;
		}
	});
}
