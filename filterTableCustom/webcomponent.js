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
            this._tableName;
            this._listMembers = [];
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
                this.clearListDimensions();
                console.log(this._cleanListDimensions); 
                console.log(this._listMembers);
                this.draw();
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
        
        get listMembers() {
            return this._listMembers;
        }

        set listMembers(value) {
            this._listMembers = [...value];
        }

        clearListDimensions(){
            for (let i = 0; i < this._listDimensions.length; i++) {
                this._cleanListDimensions[i] = this._listDimensions[i].split(",")
            }
        }
        draw(){
            // this._cleanListDimensions.join(")(");
            // console.log(Table_1.getDataSource().getMembers(this._cleanListDimensions[0][0]));
            this._shadowRoot.getElementById("root").innerHTML = "<h1>Hi!</h1>";
        }
    };
    customElements.define('com-sap-sample-filtertable', FilterTable);
})();
