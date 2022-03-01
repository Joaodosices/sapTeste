(function() {
	let template = document.createElement("template");
	template.innerHTML = `
		<form id="form">
			<fieldset>
				<legend>Custom Widget Text</legend>
				<table>
					<tr>
						<td>Inicial Value:</td>
						<td><input id="aps_valInicial" type="string"></td>
                        <td>Final Value:</td>
						<td><input id="aps_valFinal" type="string"></td>
					</tr>
				</table>
			</fieldset>
		</form>
	`;

	class HelloWorldAps2 extends HTMLElement {
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
							widgetValues: this.widgetValues
						}
					}
			}));
		}

		set widgetValues(valInicial, valFinal) {
			this._shadowRoot.getElementById("aps_valInicial").value = valInicial;
            this._shadowRoot.getElementById("aps_valFinal").value = valFinal;
		}

		get widgetValues() {
			return this._shadowRoot.getElementById("aps_valInicial").value, this._shadowRoot.getElementById("aps_valFinal").value;
		}
	}

customElements.define("com-sap-sample-helloworld2-aps", HelloWorldAps2);
})();