(function()  {
    let tmpl = document.createElement('template');
    tmpl.innerHTML = `
    <ui5-select class="select">
        <ui5-option icon="iphone">Phone</ui5-option>
        <ui5-option icon="ipad">Tablet</ui5-option>
        <ui5-option icon="laptop" selected>Desktop</ui5-option>
    </ui5-select>

    <script type="module" src="uiComponents.js"></script>
    `;

    class WebComponentTest extends HTMLElement {

		constructor() {
			super(); 
			this._shadowRoot = this.attachShadow({mode: "open"});
            this._shadowRoot.appendChild(tmpl.content.cloneNode(true));
            this.firstConnection = false;
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
                
            }
        }
        
        //When the custom widget is removed from the canvas or the analytic application is closed
        onCustomWidgetDestroy(){
        }

    };
    customElements.define('com-sap-sample-webcomponentest', WebComponentTest);
})();