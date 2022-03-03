(function() {
	let template = document.createElement("template");
	template.innerHTML = `
		<form id="form">
			<fieldset>
				<legend>Custom Widget Text</legend>
				<table>
					<tr>
						<td>Inicial Value:</td>
						<td><input id="aps_valInicial" type="integer"></td>
						<br>
                        <td>Final Value:</td>
						<td><input id="aps_valFinal" type="integer"></td>
					</tr>
				</table>
			</fieldset>
		</form>
	`;

	class WidgetAppAps extends HTMLElement {
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
							valInicial: this.valInicial,
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