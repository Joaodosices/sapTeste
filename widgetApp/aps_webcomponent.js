(function() {
	let template = document.createElement("template");
	template.innerHTML = `
		<form id="formInicialVal">
			<fieldset>
				<table>
					<tr>
						<td>Inicial Value:</td>
						<td><input id="aps_valInicial" type="text"></td>
					</tr>
				</table>
			</fieldset>
		</form>
		<form id="formFinalVal">
			<fieldset>
				<table>
					<td>Final Value:</td>
					<td><input id="aps_valFinal" type="text"></td>
				</table>
			</fieldset>
		</form>
	`;

	class WidgetAppAps extends HTMLElement {
		constructor() {
			super();
			this._shadowRoot = this.attachShadow({mode: "open"});
			this._shadowRoot.appendChild(template.content.cloneNode(true));
			this._shadowRoot.getElementById("formInicialVal").addEventListener("submit", this._submitInitialValue.bind(this));
			this._shadowRoot.getElementById("formFinalVal").addEventListener("submit", this._submitFinalValue.bind(this));
		}

		_submitInitialValue(e) {
			e.preventDefault();
			this.dispatchEvent(new CustomEvent("propertiesChanged", {
					detail: {
						properties: {
							valInicial: this.valInicial,
						}
					}
			}));
		}

		_submitFinalValue(e) {
			e.preventDefault();
			this.dispatchEvent(new CustomEvent("propertiesChanged", {
					detail: {
						properties: {
							valFinal: this.valFinal
						}
					}
			}));
		}
		set valInicial(valInicial) {
			this._shadowRoot.getElementById("aps_valInicial").value = valInicial;
		}
        get valInicial() {
			return this._shadowRoot.getElementById("aps_valInicial").value;
		}

        set valFinal(valFinal) {
            this._shadowRoot.getElementById("aps_valFinal").value = valFinal;
		}
        get valFinal() {
            return this._shadowRoot.getElementById("aps_valFinal").value;
		}
	}

customElements.define("com-sap-sample-widgetapp-aps", WidgetAppAps);
})();