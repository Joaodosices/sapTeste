(function() {
	let template = document.createElement("template");
	template.innerHTML = `
		<form id="formVerticalLayout">
			<fieldset>
				<table>
					<tr>
						<td>Vertical Layout:</td>
						<td><input id="aps_VerticalLayout" type="radio"></td>
					</tr>
				</table>
			</fieldset>
		</form>
		<form id="formHorizontalLayout">
			<fieldset>
				<table>
					<td>Horizontal Layout:</td>
					<td><input id="aps_HorizontalLayout" type="radio"></td>
				</table>
			</fieldset>
		</form>
	`;

	class ApsWebComponent extends HTMLElement {
		constructor() {
			super();
			this._shadowRoot = this.attachShadow({mode: "open"});
			this._shadowRoot.appendChild(template.content.cloneNode(true));
			this._shadowRoot.getElementById("aps_VerticalLayout").addEventListener("click", this._submitVerticalLayout.bind(this));
			this._shadowRoot.getElementById("aps_HorizontalLayout").addEventListener("click", this._submitHorizontalLayout.bind(this));
			this._option = "";
		}

		_submitVerticalLayout(e) {
			e.preventDefault();
			if (this._shadowRoot.getElementById("aps_VerticalLayout").checked === true) {
				this._option = "VerticalLayout";
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
		set orientationStyle(valInicial) {
			this._option = valInicial;
		}
        get orientationStyle() {
			return this._option;
		}

	}

customElements.define("com-sap-sample-filtertable-aps", ApsWebComponent);
})();