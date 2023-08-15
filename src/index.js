class RWCAccessibilityWidget extends HTMLElement {

	// The class constructor object
	constructor () {

		// Always call super first in constructor
		super();

		// Creates a shadow root
		this.root = this.attachShadow({mode: 'closed'});

		// Render HTML
		this.root.innerHTML =
			`<style></style>
			<div role="status"></div>`;

	}

	// Runs when the value of an attribute is changed on the component
	attributeChangedCallback (name, oldValue, newValue) {

		// Remove the icon
		let icon = this.root.querySelector('.loading-ring');
		icon.remove();

		// Show a content loaded message
		let notify = this.root.querySelector('[role="status"]');
		notify.textContent = newValue.length ? newValue : 'Content loaded';

	}

	// Create a list of attributes to observe
	static get observedAttributes () {
		return ['loaded'];
	}

}

if ('customElements' in window) {
	customElements.define('rwc-accessibility-widget', RWSAccessibilityWidget);
}
