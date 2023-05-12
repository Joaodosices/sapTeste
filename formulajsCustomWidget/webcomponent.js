(function()  {
    let tmpl = document.createElement('template');
    tmpl.innerHTML = `
    <script src="https://cdn.jsdelivr.net/npm/@formulajs/formulajs/lib/browser/formula.min.js"></script>
    `;

    class FormulaJS extends HTMLElement {

		constructor() {
			super(); 
			this._shadowRoot = this.attachShadow({mode: "open"});
            this._shadowRoot.appendChild(tmpl.content.cloneNode(true));
            this.firstConnection = false;
            this._functionN = "-";
            this._param1 = "-";
            this._param2 = "-";
            this._param3 = "-";
            this._param4 = "-";
            this._param5 = "-";
            this._param6 = "-";
            this._param7 = "-";
            this._result;
            this._result2;
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
            if (this.firstConnection = true) {
                var libraryUrl = 'https://cdn.jsdelivr.net/npm/@formulajs/formulajs/lib/browser/formula.min.js';
            loadLibrary(libraryUrl, () => {

                // Your code here...
        
                if (this._functionN != "-") {
                    let formula = makeFormula(this._functionN, this._param1, this._param2, this._param3, this._param4, this._param5, this._param6, this._param7)
                  
                    console.log(formula)
                    // this._result = formula
                    this._result = formula
                    console.log("this._result: " + this._result)

                    this._functionN = "-"
                    this._param1 = "-"
                    this._param2 = "-"
                    this._param3 = "-"
                    this._param4 = "-"
                    this._param5 = "-"
                    this._param6 = "-" 
                    this._param7 = "-"
                }
              });
            }
        }
        
        //When the custom widget is removed from the canvas or the analytic application is closed
        onCustomWidgetDestroy(){
        }

        //Getters and Setters
        get functionN() {
            return this._functionN;
        }

        set functionN(value) {
            this._functionN = value;
        }

        get param1() {
            return this._param1;
        }

        set param1(value) {
            this._param1 = value;
        }

        get param2() {
            return this._param2;
        }

        set param2(value) {
            this._param2 = value;
        }

        get param3() {
            return this._param3;
        }

        set param3(value) {
            this._param3 = value;
        }

        get param4() {
            return this._param4;
        }

        set param4(value) {
            this._param4 = value;
        }

        get param5() {
            return this._param5;
        }

        set param5(value) {
            this._param5 = value;
        }

        get param6() {
            return this._param6;
        }

        set param6(value) {
            this._param6 = value;
        }

        get param7() {
            return this._param7;
        }

        set param7(value) {
            this._param7 = value;
        }

        get result() {
            return this._result;
        }

        set result(value) {
            this._result = value;
        }
        
        getResult(){
            return this._result;
        }
		// "body": "return this.result;",
    };
    customElements.define('com-sap-sample-formulajs', FormulaJS);
})();

function loadLibrary(url, callback) {
    var script = document.createElement('script');
    script.src = url;
  
    script.onload = function() {
      // Library has been loaded successfully
      if (typeof callback === 'function') {
        callback();
      }
    };
  
    document.head.appendChild(script);
  }

  function makeFormula(typeFormula, arg1, arg2, arg3, arg4, arg5, arg6, arg7){
    let ListArguments = [arg1, arg2, arg3, arg4, arg5, arg6, arg7]
    let formula = "formulajs." + typeFormula + "("
    for (let x = 0; x < ListArguments.length; x++) {
        const element = ListArguments[x];
        if (element != "-") {
            if (element != null) {
                formula = formula + element + ", "
            }
        }
    }
    formula = formula + ")"

    try {
        return eval(formula)
    } catch (e) {
        return e.stack
    }

}