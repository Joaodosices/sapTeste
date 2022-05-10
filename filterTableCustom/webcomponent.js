(function()  {
    let tmpl = document.createElement('template');
    tmpl.innerHTML = `
        <div id="ui5_content" name="ui5_content">
            <slot name="content"></slot>
        </div>

        <script id="oView" name ="Oview" type="sapui5/xmlview">
            <mvc:View
                controllerName="myView.Template"
                xmlns:l="sap.ui.layout"
                xmlns:mvc="sap.ui.core.mvc"
                xmlns="sap.m">

                <l:VerticalLayout
                    class="sapUiContentPadding"
                    width="100%">
                    <l:content>
                        <Input id="passwordInput" type="Password placeholder="Teste input" liveChange="onButtonPress" />
                    </l:content>
                <l:VerticalLayout>
            ></mvc:View>
        </script>
    `;

    class FilterTable extends HTMLElement {

		constructor() {
			super(); 
			this._shadowRoot = this.attachShadow({mode: "open"});
            this._shadowRoot.appendChild(tmpl.content.cloneNode(true));
            this._id = this.createGuid();

            this._shadowRoot.querySelector("#oView").id = this._id + "_oView";

            this.firstConnection = false;
            this._listDimensions = [];
            this._cleanListDimensions = [];
            this._listMembers = [];
            this._cleanListMembers = [];
        }

        createGuid(){
            //Using UUID for now
            return self.crypto.randomUUID();
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
                console.log(this._id);
                this.clearListDimensions();
                console.log(this._cleanListDimensions); 
                this.clearListMembers();
                console.log(this._cleanListMembers);
                console.log("DONE X3");
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
        clearListMembers(){
            let z = 0;
            let tempArray = [];
            for (let i = 0; i < this._listMembers.length; i++) {
                if (this._listMembers[i] !== "PROGRAM_DIVIDER") {
                    tempArray.push(this._listMembers[i].split(","));
                } else {
                    this._cleanListMembers[z] = [...tempArray];
                    tempArray = [];
                    z = z + 1;
                }
            }
        }
        draw(){
            // this._shadowRoot.getElementById("root").innerHTML = "<h1>Hi!</h1>";
        }
    };
    customElements.define('com-sap-sample-filtertable', FilterTable);
})();

function loadthis(that){
    var that_ = that;

    let content = document.createElement("div");
    content.slot = "content";
    that_.appendChild(content);

    sap.ui.getCore().attachInit(function() {
        "use strict";

        // CONTROLLER
        sap.ui.define([
            "jquery.sap.global",
            "sap/ui/core/mvc/Controller"
        ], function(jQuery, Controller){
            "use strict";

            return Controller.extend("myView.Template", {
                onButtonPress: function(oEvent){
                    _password = oView.byId("passwordInput").getValue();
                    that._firePropertiesChanged();
                    console.log(_password);
                }
            });
        });
        var oView = sap.ui.xmlview({
            viewContent: jQuery(_shadowRoot.getElementById(this._id + "_oView")).html(),
        });
        oView.placeAt(content);

        if (that_._designMode) {
            oView.byId("passwordInput").setEnabled(false);
        }
    });
}