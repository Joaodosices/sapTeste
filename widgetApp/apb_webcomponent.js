(function() {
	let template = document.createElement("template");
	template.innerHTML = `
		<form id="formWidth">
			<fieldset>
				<table>
					<tr>
						<td>Bar Width:</td>
						<td><input id="apb_barWith" type="text"></td>
					</tr>
				</table>
			</fieldset>
		</form>
	`;

	class WidgetAppApb extends HTMLElement {
		constructor() {
			super();
			this._shadowRoot = this.attachShadow({mode: "open"});
			this._shadowRoot.appendChild(template.content.cloneNode(true));
			this._shadowRoot.getElementById("formWidth").addEventListener("submit", this._submitWidth.bind(this));
		}

		_submitWidth(e) {
			e.preventDefault();
			this.dispatchEvent(new CustomEvent("propertiesChanged", {
					detail: {
						properties: {
							totalbarWidth: this._totalbarWidth
						}
					}
			}));
		}

		set totalbarWidth(value) {
			this._shadowRoot.getElementById("apb_barWith").value = value;
		}
        get totalbarWidth() {
			return this._shadowRoot.getElementById("apb_barWith").value;
		}

	}

customElements.define("com-sap-sample-widgetapp-apb", WidgetAppApb);
})();