export function init() {
	/**
	 * Listen to "DOMContentLoaded" (when page DOM is fully loaded)
	 */
	window.addEventListener("DOMContentLoaded", () => {
		openAnchoredId();
	});

	/**
	 * Listen to "hashchange" (when URL hash is changed)
	 */
	window.addEventListener("hashchange", function () {
		openAnchoredId();
	});

	/**
	 * Open the closed collapsible element hiding the anchored element given in the URL hash.
	 * For example, "/criteres-et-tests/#10.1.3" will open the "fr-collapse" panel "fr-10.1"
	 *
	 * If the anchored id does not reference an actual element in the DOM,
	 * or if the panel is already open, does nothing.
	 *
	 * If the anchored element is found and it's hidden by a collapsible panel, 2 things happen:
	 * 1) the collapsible panel opens
	 * 2) the page is scrolled in order to focus the anchored element at the top of the page
	 */
	function openAnchoredId() {
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
	}
}
