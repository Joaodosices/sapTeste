(function() {
	let template = document.createElement("template");
	template.innerHTML = `
		<form id="formLayout">
			<fieldset>
				<table>
					<tr>
						<td>Vertical Layout:</td>
						<td><input id="aps_VerticalLayout" type="radio"></td>
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
			this._shadowRoot.getElementById("aps_VerticalLayout").addEventListener("click", this._submitLayout.bind(this));
			this._shadowRoot.getElementById("aps_HorizontalLayout").addEventListener("click", this._submitLayout.bind(this));
			this._option = "";

		}

		_submitLayout(e) {
			e.preventDefault();
			if (this._shadowRoot.getElementById("aps_VerticalLayout").checked === true) {
				this._option = "VerticalLayout";
				this._shadowRoot.getElementById("aps_HorizontalLayout").checked = false;
			}
			if (this._shadowRoot.getElementById("aps_HorizontalLayout").checked === true) {
				this._option = "HorizontalLayout";
				this._shadowRoot.getElementById("aps_VerticalLayout").checked = false;
			}
			console.log(this._option);
			this.dispatchEvent(new CustomEvent("propertiesChanged", {
					detail: {
						properties: {
							orientationStyle: this._option,
						}
					}
			}));
			// this.setLayoutOrientation(this._option);
		}

		set orientationStyle(val) {
			this._option = val;
		}
        get orientationStyle() {
			return this._option;
		}

        // setLayoutOrientation(newDimensionToClear){
        //     this._option = newDimensionToClear;
        //     // fire "properties changed"
        //     this.dispatchEvent(new CustomEvent("propertiesChanged", {
        //     detail: {
        //         properties: {
        //             orientationStyle: this._option
        //         }
        //     }
        //     }));
        // }
		// getLayoutOrientation(){
        //     return this._option
        // }
	}

customElements.define("com-sap-sample-filtertable-aps", ApsWebComponent);
})();