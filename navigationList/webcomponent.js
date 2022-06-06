(function()  {
    let tmpl = document.createElement('template');
    tmpl.innerHTML = `
        <style>
        </style>
        <div id="ui5_content" name="ui5_content">
            <slot name="content"></slot>
        </div>
        <script id="oView2" name="oView2" type="sapui5/xmlview">
            <mvc:View
                controllerName="sap.tnt.sample.NavigationList.C"
                xmlns="sap.m"
                xmlns:mvc="sap.ui.core.mvc"
                xmlns:tnt="sap.tnt"
                height="100%"
            >
                <tnt:NavigationList
                id="navigationList"
                width="200px"
                itemSelect="itemSelected"
                >
                    <tnt:NavigationListItem text="Item 1" icon="sap-icon://menu2">
                        <tnt:NavigationListItem text="Sub Item 1" />
                    </tnt:NavigationListItem>
                    <tnt:NavigationListItem text="Item 2" icon="sap-icon://menu2">
                        <tnt:NavigationListItem text="Sub Item 1" />
                    </tnt:NavigationListItem>
                </tnt:NavigationList>
            </mvc:View>
        </script>   
    `;

    class NavigationList extends HTMLElement {

		constructor() {
			super(); 
			this._shadowRoot = this.attachShadow({mode: "open"});
            this._shadowRoot.appendChild(tmpl.content.cloneNode(true));
            this._id = this.createGuid();
            this._shadowRoot.querySelector("#oView2").id = this._id + "_oView2";
            this._firstConnection = false;
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
            // if (this._firstConnection == true){
                console.log("After update")
                loadthis(this);
            // }
        }
        
        //When the custom widget is removed from the canvas or the analytic application is closed
        onCustomWidgetDestroy(){
        }

        

    };
    customElements.define('com-sap-sample-navigationlist', NavigationList);
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

            return Controller.extend("sap.tnt.sample.NavigationList.C", {
                itemSelected: function(e) {
                    console.log(e.items.selectedItem);
                }
            });
        });

        var oView = getOview(that);
        oView.placeAt(content);
        console.log("banana");
    });
 }

 function getOview(that) {
    var oView = sap.ui.xmlview({
        viewContent: jQuery(that._shadowRoot.getElementById(that._id + "_oView2")).html()
    });
    return oView;
}