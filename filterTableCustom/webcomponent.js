(function()  {
    let tmpl = document.createElement('template');
    tmpl.innerHTML = `
        <style>
        </style>
        <div id="ui5_content" name="ui5_content">
            <slot name="content"></slot>
        </div>
        <script id="oView" name="oView" type="sapui5/xmlview">
            <mvc:View
                controllerName="sap.m.sample.DatePicker.Group"
                xmlns:mvc="sap.ui.core.mvc"
                xmlns:l="sap.ui.layout"
                xmlns:m="sap.m"
            >
                <m:Panel
                    id ="DatePanel"
                    headerText="Choose Date"
                    width="auto">
                    <m:Label text="" labelFor="dateInput"/>
                    <m:DatePicker
                        id="dateInput"
                        placeholder="Enter Date ..."
                        change="handleChange"
                        class="sapUiSmallMarginBottom"/>
                    
                </m:Panel>
            </mvc:View>
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
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, c => {
                let r = Math.random() * 16 | 0,
                    v = c === "x" ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
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
            if ("designMode" in oChangedProperties) {
                this._designMode = oChangedProperties["designMode"];
            }
		}

        //When the custom widget is updated, the Custom Widget SDK framework executes this function after the update
		onCustomWidgetAfterUpdate(oChangedProperties) {
            if (this.firstConnection === true){
                console.log(this._id);
                loadthis(this);
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

// UTILS
 function loadthis(that){
    var that_ = that;

        let content = document.createElement('div');
        content.slot = "content";
        that_.appendChild(content);

        sap.ui.getCore().attachInit(function () {
            "use strict";

            //### Controller ###
            sap.ui.define([
                "jquery.sap.global",
                "sap/ui/core/mvc/Controller"
            ], function (jQuery, Controller) {
                "use strict";

                return Controller.extend("sap.m.sample.DatePicker.Group", {
                    onButtonPressed: function (oEvent) {
                        // console.log(oView.byId("dateInput").getDateValue());
                        // _date = oView.byId("dateInput").getDateValue().toString();
                        // that._firePropertiesChanged();
                        // console.log(_date);

                        // this.settings = {};
                        // this.settings.date = "";

                        // that.dispatchEvent(new CustomEvent("onStart", {
                        //     detail: {
                        //         settings: this.settings
                        //     }
                        // }));
                    }
                });
            });

        var oView = sap.ui.xmlview({
            viewContent: jQuery(that_._shadowRoot.getElementById(that_._id + "_oView")).html()
        });
        oView.placeAt(content);

        if (that_._designMode) {
            oView.byId("passwordInput").setEnabled(false);
        }
     });
 }