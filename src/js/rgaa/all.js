export function init() {
	// If the anchor id in the URL is inside a collapsible element, open it
	window.addEventListener("DOMContentLoaded", () => {
		const id = location.hash.substring(1);
		let el = document.getElementById(id);
		if (!el) {
			return;
		}

		for (let i = 0, button, expanded; i < 10; i++) {
			button = el.getElementsByTagName("button")[0];
			if (button) {
				expanded = button.getAttribute("aria-expanded");
				if (expanded === "false") {
					button.setAttribute("aria-expanded", "true");
					return;
				}
			}
			el = el.parentElement;
		}
	});
}
