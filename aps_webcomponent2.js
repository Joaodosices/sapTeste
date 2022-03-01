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

        set widgetIncrease(valInicial, valFinal) {
            this._shadowRoot.getElementById("aps_valInicial").value = valInicial;
            this._shadowRoot.getElementById("aps_valFinal").value = valFinal;
        }
        get widgetIncrease() {
            let valInicial = this._shadowRoot.getElementById("aps_valInicial").value;
			let total = this._shadowRoot.getElementById("aps_valFinal").value - this._shadowRoot.getElementById("aps_valInicial").value;
            let progressionGrowth = (total / valInicial) * 100;
			return progressionGrowth;
		}
        
		// set widgetInicialValue(valInicial) {
		// 	this._shadowRoot.getElementById("aps_valInicial").value = valInicial;
        //     this._valInicial = valInicial;
		// }
        // set widgetFinalValue(valFinal) {
        //     this._shadowRoot.getElementById("aps_valFinal").value = valFinal;
        //     this._valFinal = valFinal;
		// }
        // get widgetInicialValue() {
		// 	return this._shadowRoot.getElementById("aps_valInicial").value;
		// }
        // get widgetFinalValue() {
        //     return this._shadowRoot.getElementById("aps_valFinal").value;
		// }
	}

customElements.define("com-sap-sample-helloworld2-aps", HelloWorldAps2);
})();