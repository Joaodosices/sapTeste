(function()  {

    class FilterTable extends HTMLElement {
		constructor() {
			super(); 
			this._shadowRoot = this.attachShadow({mode: "open"});
            this._id = this.createGuid();

            this.firstConnection = false;
            this._listDimensions = [];
            this._cleanListDimensions = [];
            this._ListIdDimensions = [];
            this._listMembers = [];
            this._cleanListMembers = [];
            this._listSelected = [];
            this._DimensionToClear = [];

            this.addEventListener("change", event => {
                var event = new Event("onChange");
                this.dispatchEvent(event);
            });
            this.addEventListener("click", event => {
                var event = new Event("onClick");
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
                this.clearListDimensions();
                this.clearListMembers();
                this.draw();
                loadthis(this);
                console.log(this._cleanListMembers);
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

        get listSelected() {
            return this._listSelected;
        }

        set listSelected(value) {
            this._listSelected = value;
        }

        get ListIdDimensions() {
            return this._ListIdDimensions;
        }

        set ListIdDimensions(value) {
            this._ListIdDimensions = value;
        }

        setListSelected(newListSelected){
            this._listMembers = newListSelected;
            // fire "properties changed"
            this.dispatchEvent(new CustomEvent("propertiesChanged", {
            detail: {
                properties: {
                    text: this._listMembers
                }
            }
            }));
        }

        getListSelected(){
            return this._listMembers;
        }

        setListIdDimensions(newListIdDimensions){
            this._ListIdDimensions = newListIdDimensions;
            // fire "properties changed"
            this.dispatchEvent(new CustomEvent("propertiesChanged", {
            detail: {
                properties: {
                    text: this._ListIdDimensions
                }
            }
            }));
        }

        getListIdDimensions(){
            return this._ListIdDimensions
        }

        setDimensionToClear(newDimensionToClear){
            this._DimensionToClear = newDimensionToClear;
            // fire "properties changed"
            this.dispatchEvent(new CustomEvent("propertiesChanged", {
            detail: {
                properties: {
                    text: this._DimensionToClear
                }
            }
            }));
        }

        getDimensionToClear(){
            return this._DimensionToClear;
        }

        clearListDimensions(){
            for (let i = 0; i < this._listDimensions.length; i++) {
                this._cleanListDimensions[i] = this._listDimensions[i].split(",")
            }
            for (let x = 0; x < this._cleanListDimensions.length; x++) {
                this._ListIdDimensions[x] = this._cleanListDimensions[x][0];
            }
            this.setListIdDimensions(this._ListIdDimensions)
        }
        clearListMembers(){
            let z = 0;
            let tempArray = [];
            var tempCleanListMembers = []

            for (let i = 0; i < this._listMembers.length; i++) {
                if (this._listMembers[i] !== "PROGRAM_DIVIDER") {
                    tempArray.push(this._listMembers[i].split(","));
                } else {
                    tempCleanListMembers[z] = [...tempArray];
                    tempArray = [];
                    z = z + 1;
                }
            }

            let tempListObject = [];
            for (let z = 0; z < tempCleanListMembers.length; z++) {
                tempListObject = [];
                for (let x = 0; x < tempCleanListMembers[z].length; x++) {
                    tempListObject.push({ key: tempCleanListMembers[z][x][0], text: tempCleanListMembers[z][x][1]})
                }
                this._cleanListMembers.push(tempListObject);
            }
        }
        draw(){
            let body = ` `;
            for (let i = 0; i < this._cleanListDimensions.length; i++) {
                let tagIDcombobox = "ComboBox" + i;
                let tagIDbutton = "Button" + i;
                let combobox =`
                    <l:VerticalLayout
                        width="100%">
                        <m:Label text="` + this._cleanListDimensions[i][1] + `" labelFor="` + tagIDcombobox + `"/>
                        <m:ComboBox  
                            id ="` + tagIDcombobox + `" 
                            selectionChange="handleChange" /> 
                        <m:Button 
                            id ="` + tagIDbutton + `" 
                            text="Clear"
                            press="handlePress"
                            class="sapUiSmallMarginBottom"/>
                    </l:VerticalLayout>
                        `;
                body = body.concat(combobox);
                tagIDcombobox = ``;
                tagIDbutton = ``;
                combobox = ``;
            }
            
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
                            headerText="Filters"
                            width="auto">
                            <m:Label text="" labelFor="dateInput"/>

                            ` + body + `
                        </m:Panel>
                    </mvc:View>
                </script>   
            `;
            this._shadowRoot.appendChild(tmpl.content.cloneNode(true));
            this._shadowRoot.querySelector("#oView").id = this._id + "_oView";
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
                handleChange: function (e) {
                    for (let i = 0; i < that_._cleanListDimensions.length; i++) {
                       var oSel = oView.byId("ComboBox" + i);
                       that_._listSelected[i] = oSel.getSelectedKey();
                    }
                    that_.setListSelected(that_._listSelected);
                },
                handlePress: function (e) {
                    var button = e.getSource();
                    for (let i = 0; i < that_._cleanListDimensions.length; i++) {
                        if (button.sId == "__xmlview1--Button" + i){
                            var oSel = oView.byId("ComboBox" + i);
                            oSel.setSelectedKey("");

                            that_._DimensionToClear = i;
                        }
                     }
                    that_.setDimensionToClear(that_._DimensionToClear);
                }
            });
        });

        var oView = getOview(that);
        oView.placeAt(content);

        addListsToComboBoxs(that, oView);

        if (that_._designMode) {
            oView.byId(this._id + "_oView").setEnabled(false);
        }
    });
 }

 function addListsToComboBoxs(that, oView){
    let that_ = that;
    let tagID = "";
    for (let i = 0; i < that_._cleanListDimensions.length; i++) {
        tagID = "ComboBox" + i;
        createModel(i);
        for (let x = 0; x < that_._cleanListMembers[i].length; x++) {
            var newItem = new sap.ui.core.Item({ key: that_._cleanListMembers[i][x].key, text: that_._cleanListMembers[i][x].text});
            oView.byId(tagID).addItem(newItem);
        }
    }
}
function createModel(idDimension){

}
function getOview(that) {
    var oView = sap.ui.xmlview({
        viewContent: jQuery(that._shadowRoot.getElementById(that._id + "_oView")).html()
    });
    return oView;
}