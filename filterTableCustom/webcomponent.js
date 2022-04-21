(function()  {
    let tmpl = document.createElement('template');
    tmpl.innerHTML = `
        <div id="root"></div>
    `;

    class FilterTable extends HTMLElement {

		constructor() {
			super(); 
			this._shadowRoot = this.attachShadow({mode: "open"});
            this._shadowRoot.appendChild(tmpl.content.cloneNode(true));
            this.firstConnection = false;
            this._listDimensions = [];
            this._cleanListDimensions = []
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
                
                for (let i = 0; i < this._listDimensions.length; i++) {
                    this._cleanListDimensions[i] = this._listDimensions[i].split(",")
                }
                console.log(this._cleanListDimensions);
                this._shadowRoot.getElementById("root").innerHTML = this._cleanListDimensions.join("\n");
            }
        }
        
        //When the custom widget is removed from the canvas or the analytic application is closed
        onCustomWidgetDestroy(){
        }

        //Getters and Setters
        get listDimensions() {
            return this._listDimensions;
        }

        set listDimensions(value) {
            this._listDimensions = [...value];
        }
    };
    customElements.define('com-sap-sample-filtertable', FilterTable);
})();
