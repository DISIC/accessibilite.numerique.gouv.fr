export function init() {
	// If the anchor id in the URL is inside a collapsible element, open it
	window.addEventListener("DOMContentLoaded", () => {
		const id = location.hash.substring(1);
		let el = document.getElementById(id);
		if (!el) {
			return;
		}

		const anchoredEl = el;
		// From the anchored element upwards, scan the DOM to spot the opening button
		// (`aria-controls` is used to identify the right button)
		for (let i = 0, button, controlledId, expanded; i < 10; i++) {
			if (!controlledId && el.classList.contains("fr-collapse")) {
				controlledId = el.getAttribute("id");
			}
			if (controlledId) {
				button = document.querySelector(
					"[aria-controls='" + controlledId + "']"
				);
				if (button) {
					expanded = button.getAttribute("aria-expanded");
					if (expanded === "false") {
						button.setAttribute("aria-expanded", "true");
						setTimeout(function () {
							return anchoredEl.scrollIntoView();
						}, 500);
						return;
					}
				}
			}
			el = el.parentElement;
		}
	});
}
