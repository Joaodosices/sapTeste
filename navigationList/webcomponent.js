(function()  {
    let tmpl = document.createElement('template');
    tmpl.innerHTML = `
        <h1 id="progressTotal">Hello World</h1>
    `;

    class NavigationList extends HTMLElement {

		constructor() {
			super(); 
			this._shadowRoot = this.attachShadow({mode: "open"});
            this._shadowRoot.appendChild(tmpl.content.cloneNode(true));
            this._firstConnection = false;
            
        }

        //Fired when the widget is added to the html DOM of the page
        connectedCallback(){
            this._firstConnection = true;
        }

         //Fired when the widget is removed from the html DOM of the page (e.g. by hide)
        disconnectedCallback(){
        
        }

         //When the custom widget is updated, the Custom Widget SDK framework executes this function first
		onCustomWidgetBeforeUpdate(oChangedProperties) {

		}

        //When the custom widget is updated, the Custom Widget SDK framework executes this function after the update
		onCustomWidgetAfterUpdate(oChangedProperties) {
            if (this._firstConnection){
                
            }
        }
        
        //When the custom widget is removed from the canvas or the analytic application is closed
        onCustomWidgetDestroy(){
        }

        

    };
    customElements.define('com-sap-sample-navigationlist', NavigationList);
})();