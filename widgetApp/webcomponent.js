(function()  {
    let tmpl = document.createElement('template');
    tmpl.innerHTML = `
        <style>
        .progressionBar{
            width: 200px;
            height: 20px;
            background: black;
        }
        #Bar{
            width: 0px;
            height: 20px;
            background: red;
        }
        </style>
        <h1 id="val3">Final</h1>
        <div class='progressionBar'>
            <div id='Bar'></div>
        </div>
    `;

    class WidgetApp extends HTMLElement {

		constructor() {
			super(); 
			this._shadowRoot = this.attachShadow({mode: "open"});
            this._shadowRoot.appendChild(tmpl.content.cloneNode(true));
            this.firstConnection = false;
            this._valInicial = '';
            this._valFinal = '';
            this._barWidth = 0;
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
                let progressionGrowth = this.calcGrowth();
                this._shadowRoot.getElementById('val3').innerHTML = progressionGrowth;

                if (this._barWidth > 200) {
                    this._shadowRoot.getElementById('Bar').style.width = `200px`;
                } else {
                    this._shadowRoot.getElementById('Bar').style.width = `${this._barWidth}px`;
                }
            }
        }
        
        //When the custom widget is removed from the canvas or the analytic application is closed
        onCustomWidgetDestroy(){
        }
        
        calcGrowth() {
            let valInicial = parseInt(this._valInicial);
            let valFinal = parseInt(this._valFinal);

            let sum = valFinal - valInicial;
            let growth = (sum / valInicial) * 100;

            if (growth < 0 || growth === undefined || growth === null) {
               growth = 0;
            }

            this._barWidth = (200 * growth) / 100;

            return `There was an increase in ${growth}%`
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