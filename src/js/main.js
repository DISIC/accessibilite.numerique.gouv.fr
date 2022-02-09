// Handle the 3 filters in criteria page
const filtresEl = document.querySelector("#filtres-criteres");
if (filtresEl) {
	const buttonElms = filtresEl.parentElement.getElementsByTagName("button");
	const liEls = filtresEl.parentElement.querySelectorAll("li.criterion");
	// Everything happens under "filtres-criteres" element
	filtresEl.addEventListener("change", function (e) {
		const curEl = e.target;
		const filter = curEl.dataset.filter;
		const checked = curEl.checked;
		switch (filter) {
			case "all":
				Array.from(buttonElms).forEach(function (el) {
					el.setAttribute("aria-expanded", checked);
				});
				break;
			case "A":
			case "AA":
				Array.from(liEls).forEach(function (el) {
					const arr = el.dataset.wcagLevel.split(",");
					let checkedFilters = Array.from(
						curEl.parentElement.parentElement.querySelectorAll("input:checked")
					);
					checkedFilters = checkedFilters.map((el) => el.dataset.filter);

					if (!arr.filter((el) => checkedFilters.includes(el)).length) {
						el.classList.add("fr-hidden");
					} else {
						el.classList.remove("fr-hidden");
					}
				});
				break;
			default:
				// should never happen
				break;
		}
	});
}
