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
            // if (this.firstConnection === true){
            // }
            // var script = document.createElement('script');
            // script.type = 'text/javascript';

            // script.src = 'https://cdn.jsdelivr.net/npm/@formulajs/formulajs/lib/browser/formula.min.js';
            // document.appendChild(script);
            var libraryUrl = 'https://cdn.jsdelivr.net/npm/@formulajs/formulajs/lib/browser/formula.min.js';
            loadLibrary(libraryUrl, function() {
                // The library has been loaded, you can now use its functionality
                // Your code here...
                console.log(formulajs.DATE(2008, 7, 8))
                console.log(formulajs.SUM([1, 2, 3]))
              });
        }
        
        //When the custom widget is removed from the canvas or the analytic application is closed
        onCustomWidgetDestroy(){
        }

        //Getters and Setters
        
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