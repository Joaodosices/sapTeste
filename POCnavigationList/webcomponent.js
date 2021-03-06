(function()  {
    // var jsonData = fetch("https://cors-anywhere.herokuapp.com/https://joaodosices.github.io/sapTeste/navigationList/OrgUnitSet.json",{
    //             headers : { 
    //               'Access-Control-Allow-Origin': '*',
    //               'Content-Type': 'application/json',
    //               'Accept': 'application/json'
    //              }
    //           }).then(results => results.json());
              
    var jsonData = {
        "OrgUnitSet": [{
            "Id": "1",
			"Icon": "sap-icon://bar-chart",			
            "Name": "Analytics",
            "ChildrenDirect": [{
                "Id": "1.1",
				"Icon": "",
                "Name": "Tables"
            },{
                "Id": "1.2",
				"Icon": "",
                "Name": "Charts"
            }]
        }, {
            "Id": "2",
			"Icon": "sap-icon://area-chart",
            "Name": "Planning",
            "ChildrenDirect": [{
                "Id": "2.1",
				"Icon": "",
                "Name": "Input"
            },{
                "Id": "2.2",
				"Icon": "",
                "Name": "Visual"
            }]
        }]
    };

    var body = ``
    var navigationListItem = ``;
    for (let i = 0; i < jsonData.OrgUnitSet.length; i++) {

        navigationListItem = `<tnt:NavigationListItem id="` + jsonData.OrgUnitSet[i].Id + `" text="` + jsonData.OrgUnitSet[i].Name + `"   icon="` + jsonData.OrgUnitSet[i].Icon + `" expanded="false">`
        if (jsonData.OrgUnitSet[i].ChildrenDirect) {
            var children = ``;
            for (let x = 0; x < jsonData.OrgUnitSet[i].ChildrenDirect.length; x++) {
                children = ``;
                children = `<tnt:NavigationListItem id="` + jsonData.OrgUnitSet[i].ChildrenDirect[x].Id + `" text="` + jsonData.OrgUnitSet[i].ChildrenDirect[x].Name + `" expanded="false">
                            </tnt:NavigationListItem>`
                navigationListItem = navigationListItem + children;
            }
            navigationListItem = navigationListItem + `</tnt:NavigationListItem>`
        } else {
            navigationListItem = navigationListItem + `</tnt:NavigationListItem>`
        }
        body = body.concat(navigationListItem);
    }
    let tmpl = document.createElement('template');
    tmpl.innerHTML = `
        <style>
        </style>
        <div id="ui5_content" name="ui5_content">
            <slot name="content"></slot>
        </div>
        <div id="root">
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
                expanded="true"
                width="100%"
                itemSelect="itemSelected"
                >
                    ` + body + `
                </tnt:NavigationList>
            </mvc:View>
        </script>  
        </div> 
    `;
    class NavigationList extends HTMLElement {

		constructor() {
			super(); 
			this._shadowRoot = this.attachShadow({mode: "open"});
            this._shadowRoot.appendChild(tmpl.content.cloneNode(true));
            this._id = this.createGuid();
            this._shadowRoot.querySelector("#oView2").id = this._id + "_oView2";
            this._firstConnection = false;
            this._optionID = "";
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
                this.draw();
                loadthis(this);
            // }
        }
        
        //When the custom widget is removed from the canvas or the analytic application is closed
        onCustomWidgetDestroy(){
        }

        draw(){
            

            this._shadowRoot.appendChild(tmpl.content.cloneNode(true));
            this._shadowRoot.querySelector("#oView2").id = this._id + "_oView2";
        }

        getOptionID(){
            return this._optionID;
        }

        setOptionID(newOption){
            this._optionID = newOption;
            // fire "properties changed"
            this.dispatchEvent(new CustomEvent("propertiesChanged", {
            detail: {
                properties: {
                    optionID: this._optionID
                }
            }
            }));
        }
    };
    customElements.define('com-sap-sample-pocnavigationlist', NavigationList);
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
                    // let value = e.getParameter("item").mProperties.text;
                    let id = e.getParameter("id").split("--");
                    that_.setOptionID(id[1]);
                }
            });
        });

        var oView = getOview(that);
        oView.placeAt(content);

        var navigationList = oView.byId("navigationList");
        // that._shadowRoot.getElementById("ui5_content").addEventListener("mouseover",  ()=>{
        //     navigationList.setExpanded(true);
        // });
        // that._shadowRoot.getElementById("ui5_content").addEventListener("mouseout",  ()=>{
        //     navigationList.setExpanded(false);
        // });
        that._shadowRoot.getElementById("ui5_content").addEventListener("click", event => {
            var event = new Event("onClick");
            that.dispatchEvent(event);
        });
    });
 }

 function getOview(that) {
    var oView = sap.ui.xmlview({
        viewContent: jQuery(that._shadowRoot.getElementById(that._id + "_oView2")).html()
    });
    return oView;
}