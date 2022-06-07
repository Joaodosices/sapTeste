(function()  {
    // var jsonData = fetch("https://cors-anywhere.herokuapp.com/https://joaodosices.github.io/sapTeste/navigationList/OrgUnitSet.json",{
    //             headers : { 
    //               'Content-Type': 'application/json',
    //               'Accept': 'application/json'
    //              }
    //           }).then(results => results.json());
              
    var jsonData = {
        "OrgUnitSet": [{
            "Id": 1,
            "Name": "Proxy Scope",
            "ChildrenDirect": [{
                "Id": 2,
                "Name": "Proxy Sales"
            },{
                "Id": 3,
                "Name": "Proxy Analysis"
            }]
        }, {
            "Id": 4,
            "Name": "AI Sales Forecasting"
        }, {
            "Id": 5,
            "Name": "AI Cash Forecasting"
        }]
    };

    var body = ``
    var navigationListItem = ``;
    for (let i = 0; i < jsonData.OrgUnitSet.length; i++) {

        navigationListItem = `<tnt:NavigationListItem text="` + jsonData.OrgUnitSet[i].Name + `"   icon="sap-icon://menu2">`
        if (jsonData.OrgUnitSet[i].ChildrenDirect) {
            var children = ``;
            for (let x = 0; x < jsonData.OrgUnitSet[i].ChildrenDirect.length; x++) {
                children = ``;
                children = `<tnt:NavigationListItem text="` + jsonData.OrgUnitSet[i].ChildrenDirect[x].Name + `">
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
                expanded="false"
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
            this._option = "";
            this.addEventListener("click", event => {
                var event = new Event("onSelect");
                this.dispatchEvent(event);
            });
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

        getOption(){
            return this._option;
        }

        setOption(newOption){
            this._option = newOption;
            // fire "properties changed"
            this.dispatchEvent(new CustomEvent("propertiesChanged", {
            detail: {
                properties: {
                    option: this._option
                }
            }
            }));
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
                    let value = e.getParameter("item").mProperties.text;
                    that_.setOption(value);
                }
            });
        });

        var oView = getOview(that);
        oView.placeAt(content);

        var navigationList = oView.byId("navigationList");
        that._shadowRoot.getElementById("ui5_content").addEventListener("mouseover",  ()=>{
            navigationList.setExpanded(true);
        });
        that._shadowRoot.getElementById("ui5_content").addEventListener("mouseout",  ()=>{
            navigationList.setExpanded(false);
        });
    });
 }

 function getOview(that) {
    var oView = sap.ui.xmlview({
        viewContent: jQuery(that._shadowRoot.getElementById(that._id + "_oView2")).html()
    });
    return oView;
}