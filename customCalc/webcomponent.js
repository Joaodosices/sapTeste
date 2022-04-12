(function()  {
    let tmpl = document.createElement('template');
    tmpl.innerHTML = `
    <h1>Category:</h1>
    <h2 id="Category"></h2>
    <h1>Total quantity:</h1>
    <h2 id="Quantity"></h2>
    <h1>Total price:</h1>
    <h2 id="TotalPrice"></h2>
    <h1>Unit price:</h1>
    <h3 id="UnitPrice"></h3>
    `;

    class CustomCalc extends HTMLElement {

		constructor() {
			super(); 
			this._shadowRoot = this.attachShadow({mode: "open"});
            this._shadowRoot.appendChild(tmpl.content.cloneNode(true));
            this.lastCategory = '';
            this.firstConnection = false;
            this.gotAllValues = false;
            this._category = '';
            this._quantity = 0;
            this._unitPrice = [];
            this._totalPrice = 0;
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
                this.updateAllValues();
                if (this.gotAllValues === true){
                    this.cleanVariableVal();
                }
            }
        }
        
        //When the custom widget is removed from the canvas or the analytic application is closed
        onCustomWidgetDestroy(){
        }

        //Getters and Setters
        get category() {
            return this._category;
        }

        set category(value) {
            this._category = value;
        }

        //

        get quantity() {
            return this._quantity;
        }

        set quantity(value) {
            this._quantity = value;
        }

        //

        get unitPrice() {
            return this._unitPrice;
        }

        set unitPrice(value) {
            this._unitPrice = [...value];
        }

        //

        get totalPrice() {
            return this._totalPrice;
        }

        set totalPrice(value) {
            this._totalPrice = value;
            this.gotAllValues = true;
        }

        updateAllValues(){
            this._shadowRoot.getElementById('Category').innerHTML = this._category;
            this._shadowRoot.getElementById('Quantity').innerHTML = this._quantity;
            this._shadowRoot.getElementById('TotalPrice').innerHTML = this._totalPrice;
            if (this.gotAllValues === true){
                this._shadowRoot.getElementById('UnitPrice').innerHTML = this._unitPrice.join(' - ');
                console.log(this._unitPrice);
            }
        }

        cleanVariableVal(){
            this._unitPrice = [];
            this._category = ' ';
            this._quantity = 0;
            this._totalPrice = 0;
            this.gotAllValues = false;
        }
    };
    customElements.define('com-sap-sample-customcalc', CustomCalc);
})();
