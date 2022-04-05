(function()  {
    let tmpl = document.createElement('template');
    tmpl.innerHTML = `
    `;

    class FinalDropdown extends HTMLElement {

		constructor() {
			super(); 
			this._shadowRoot = this.attachShadow({mode: "open"});
            this._shadowRoot.appendChild(tmpl.content.cloneNode(true));
            this._data;
            this._default;
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
            if (this.firstConnection === true){
                
            }
        }
        
        //When the custom widget is removed from the canvas or the analytic application is closed
        onCustomWidgetDestroy(){
        }

        //

        get data() {
            return this._data;
        }

        set data(value) {
            this._data = value;
        }
        get default() {
            return this._default;
        }

        set default(value) {
            this._default = value;
        }
    };
    customElements.define('com-sap-sample-finaldropdown', FinalDropdown);
})();
