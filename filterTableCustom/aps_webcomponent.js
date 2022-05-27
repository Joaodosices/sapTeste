(function() {
	let template = document.createElement("template");
	template.innerHTML = `
		<form id="formLayout">
			<fieldset>
				<table>
					<tr>
						<td>Vertical Layout:</td>
						<td><input id="aps_VerticalLayout" type="radio" checked="checked"></td>
						<td>Horizontal Layout:</td>
						<td><input id="aps_HorizontalLayout" type="radio"></td>
					</tr>
				</table>
			</fieldset>
		</form>
	`;

	class ApsWebComponent extends HTMLElement {
		constructor() {
			super();
			this._shadowRoot = this.attachShadow({mode: "open"});
			this._shadowRoot.appendChild(template.content.cloneNode(true));
			this._shadowRoot.getElementById("aps_VerticalLayout").addEventListener("submit", this._submitVerticalLayout.bind(this));
			this._shadowRoot.getElementById("aps_HorizontalLayout").addEventListener("submit", this._submitHorizontalLayout.bind(this));
			this._option = "";
		}

		_submitVerticalLayout(e) {
			e.preventDefault();
			if (this._shadowRoot.getElementById("aps_VerticalLayout").checked === true) {
				this._option = "VerticalLayout";	
				this._shadowRoot.getElementById("aps_HorizontalLayout").checked = false;
			}
			console.log(this._option);
			this.dispatchEvent(new CustomEvent("propertiesChanged", {
					detail: {
						properties: {
							orientationStyle: this._option,
						}
					}
			}));
		}

		_submitHorizontalLayout(e) {
			e.preventDefault();
			if (this._shadowRoot.getElementById("aps_HorizontalLayout").checked === true) {
				this._option = "HorizontalLayout";
				this._shadowRoot.getElementById("aps_VerticalLayout").checked = false;
			}
			console.log(this._option);
			this.dispatchEvent(new CustomEvent("propertiesChanged", {
					detail: {
						properties: {
							orientationStyle: this._option
						}
					}
			}));
		}
		
		set orientationStyle(val) {
			this._option = val;
		}
        get orientationStyle() {
			return this._option;
		}

	}

customElements.define("com-sap-sample-filtertable-aps", ApsWebComponent);
})();