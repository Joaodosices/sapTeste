(function()  {
    let tmpl = document.createElement('template');
    tmpl.innerHTML = `
        <h1 id="val1">0</h1>
        <h1 id="val2">0</h1>
        <h1 id="val3"> </h1>
    `;

    class WidgetApp extends HTMLElement {

		constructor() {
			super(); 
			this._shadowRoot = this.attachShadow({mode: "open"});
            this._shadowRoot.appendChild(tmpl.content.cloneNode(true));
            this.firstConnection = false;
            this._valInicial = '';
            this._valFinal = '';
        }

        //Fired when the widget is added to the html DOM of the page
        connectedCallback(){
            this.firstConnection = true;
        }

         //Fired when the widget is removed from the html DOM of the page (e.g. by hide)
        disconnectedCallback(){
        
        }

         //When the custom widget is updated, the Custom Widget SDK framework executes this function first
		onCustomWidgetBeforeUpdate(oChangedProperties) {

		}

        //When the custom widget is updated, the Custom Widget SDK framework executes this function after the update
		onCustomWidgetAfterUpdate(oChangedProperties) {
            if (this.firstConnection === true) {
                this._shadowRoot.getElementById('val1').innerHTML = this._valInicial;
                this._shadowRoot.getElementById('val2').innerHTML = this._valFinal;

                let progressionGrowth = this.calcGrowth();

                this._shadowRoot.getElementById('val3').innerHTML = progressionGrowth;
            }
        }
        
        //When the custom widget is removed from the canvas or the analytic application is closed
        onCustomWidgetDestroy(){
        }
        
        calcGrowth() {
            let valInicial = parseInt(this._valInicial);
            let valFinal = parseInt(this._valFinal);

            let sum = valFinal - valFinal;
            let growth = (sum / valInicial) * 100;
            console.log(growth);
            growthString = growth.toString();
            console.log(growthString);

            return "There was an increase in " + growthString + "%"
        }

        //Getters and Setters
        get valInicial() {
            return this._valInicial;
        }

        set valInicial(value) {
            this._valInicial = value;
        }

        get valFinal() {
            return this._valFinal;
        }

        set valFinal(value) {
            this._valFinal = value;
        }
    };
    customElements.define('com-sap-sample-widgetapp', WidgetApp);
})();