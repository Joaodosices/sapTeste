(function() {
	let template = document.createElement("template");
	template.innerHTML = `
		<form id="form">
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
			this._shadowRoot.getElementById("form").addEventListener("submit", this._submit.bind(this));
		}

		_submit(e) {
			e.preventDefault();
			this.dispatchEvent(new CustomEvent("propertiesChanged", {
					detail: {
						properties: {
							totalbarWidth: this.totalbarWidth
						}
					}
			}));
		}

		set totalbarWidth(valWidth) {
			this._shadowRoot.getElementById("apb_barWith").value = valWidth;
		}
        get totalbarWidth() {
			return this._shadowRoot.getElementById("apb_barWith").value;
		}

	}

customElements.define("com-sap-sample-widgetapp-apb", WidgetAppApb);
})();