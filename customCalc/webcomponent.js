(function()  {
    let tmpl = document.createElement('template');
    tmpl.innerHTML = `
    <h1 id="Category"></h1>
    `;

    class CustomCalc extends HTMLElement {

		constructor() {
			super(); 
			this._shadowRoot = this.attachShadow({mode: "open"});
            this._shadowRoot.appendChild(tmpl.content.cloneNode(true));
            this._category = '';
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
            this._shadowRoot.getElementById('Category').innerHTML = this._category;
        }
        
        //When the custom widget is removed from the canvas or the analytic application is closed
        onCustomWidgetDestroy(){
        }

        //Getters and Setters
        get category() {
            return this._category;
        }

        set category(value) {
            this._category = value;
        }
    };
    customElements.define('com-sap-sample-customcalc', CustomCalc);
})();