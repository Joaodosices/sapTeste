(function()  {
    let tmpl = document.createElement('template');
    tmpl.innerHTML = `
        <h1>Hello World</h1>
    `;

    class WidgetApp extends HTMLElement {

		constructor() {
			super(); 
			this._shadowRoot = this.attachShadow({mode: "open"});
            this._shadowRoot.appendChild(tmpl.content.cloneNode(true));
            this._textOutput = '';
        }

        //Fired when the widget is added to the html DOM of the page
        connectedCallback(){
        }

         //Fired when the widget is removed from the html DOM of the page (e.g. by hide)
        disconnectedCallback(){
        
        }

         //When the custom widget is updated, the Custom Widget SDK framework executes this function first
		onCustomWidgetBeforeUpdate(oChangedProperties) {

		}

        //When the custom widget is updated, the Custom Widget SDK framework executes this function after the update
		onCustomWidgetAfterUpdate(oChangedProperties) {
            this._shadowRoot.getElementsByTagName('h1').innerHTML = oChangedProperties['textOutput'];
        }
        
        //When the custom widget is removed from the canvas or the analytic application is closed
        onCustomWidgetDestroy(){
        }

        // //Getters and Setters
        // get textOutput() {
        //     return this._text;
        // }

        // set textOutput(value) {
        //     this._textOutput = value;
        // }

    };
    customElements.define('com-sap-sample-widgetapp', WidgetApp);
})();