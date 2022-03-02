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
                        <td>Final Value:</td>
						<td><input id="aps_valFinal" type="integer"></td>
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

		set widgetInicialValue(valInicial) {
			this._shadowRoot.getElementById("aps_valInicial").value = valInicial;
		}
        get widgetInicialValue() {
			return this._shadowRoot.getElementById("aps_valInicial").value;
		}

        set widgetFinalValue(valFinal) {
            this._shadowRoot.getElementById("aps_valFinal").value = valFinal;
		}
        get widgetFinalValue() {
            return this._shadowRoot.getElementById("aps_valFinal").value;
		}

        set widgetIncrease(val) {
            let valInicial = this._shadowRoot.getElementById("aps_valInicial").value;
            this._progressionGrowth = (val / valInicial) * 100;
        }
        get widgetIncrease() {
            let progressionGrowth = this._progressionGrowth;
			return 'There was an increase in ' + progressionGrowth + '%';
		}
	}

customElements.define("com-sap-sample-Increase-aps", HelloWorldAps2);
})();