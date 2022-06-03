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
        }
        </style>

        <h1 id="progressTotal">Value</h1>
        <div class='progressionBar'>
            <div id='Bar'></div>
        </div>
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