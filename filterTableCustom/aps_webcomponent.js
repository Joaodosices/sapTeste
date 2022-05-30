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
				<div id="currentStateLayout">Current Layout: vertical layout</div>
			</fieldset>
		</form>
	`;

	class ApsWebComponent extends HTMLElement {
		constructor() {
			super();
			this._shadowRoot = this.attachShadow({mode: "open"});
			this._shadowRoot.appendChild(template.content.cloneNode(true));
			this._option = this.getOrientationStyle();
			this._isStylerOptionsChoosen;
			this._shadowRoot.getElementById("aps_VerticalLayout").addEventListener("click", this._submitVerticalLayout.bind(this));
			this._shadowRoot.getElementById("aps_HorizontalLayout").addEventListener("click", this._submitHorizontalLayout.bind(this));
		}

		
		_submitVerticalLayout(e) {
			// e.preventDefault();
			// this._shadowRoot.getElementById("aps_VerticalLayout").checked;
			this._shadowRoot.getElementById("aps_HorizontalLayout").checked = false;
			this._shadowRoot.getElementById("currentStateLayout").innerHTML = "Current Layout: vertical layout";
			this.setOrientationStyle("VerticalLayout");
			console.log(this._option);
			this._isStylerOptionsChoosen = true;
			
			this.dispatchEvent(new CustomEvent("propertiesChanged", {
				detail: {
					properties: {
						isStylerOptionsChoosen: this._isStylerOptionsChoosen,
					}
				}
			}));
		}

		_submitHorizontalLayout(e) {
			// e.preventDefault();
			// this._shadowRoot.getElementById("aps_HorizontalLayout").checked;
			this._shadowRoot.getElementById("aps_VerticalLayout").checked = false;
			this._shadowRoot.getElementById("currentStateLayout").innerHTML = "Current Layout: horizontal layout";
			this.setOrientationStyle("HorizontalLayout");
			console.log(this._option);
			this._isStylerOptionsChoosen = true;
			
			this.dispatchEvent(new CustomEvent("propertiesChanged", {
				detail: {
					properties: {
						isStylerOptionsChoosen: this._isStylerOptionsChoosen,
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
		set isStylerOptionsChoosen(val) {
			this._isStylerOptionsChoosen = val;
		}
        get isStylerOptionsChoosen() {
			return this._isStylerOptionsChoosen;
		}

		setOrientationStyle(newOrientationStyle){
            this._option = newOrientationStyle;
            // fire "properties changed"
            this.dispatchEvent(new CustomEvent("propertiesChanged", {
            detail: {
                properties: {
                    orientationStyle: this._option
                }
            }
            }));
        }

        getOrientationStyle(){
            return this._option;
        }
	}

customElements.define("com-sap-sample-filtertable-aps", ApsWebComponent);
})();