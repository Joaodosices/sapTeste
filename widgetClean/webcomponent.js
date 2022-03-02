(function()  {
    let tmpl = document.createElement('template');
    tmpl.innerHTML = `
        <style>
        .progressionBar{
            width: 200px;
            height: 20px;
            background: black;
        }
        #Bar{
            width: 0px;
            height: 20px;
        }
        </style>

        <h1 id="progressTotal">0</h1>
        <div class='progressionBar'>
            <div id='Bar'></div>
        </div>
    `;

    class HelloWorld2 extends HTMLElement {

		constructor() {
			super(); 
			this._shadowRoot = this.attachShadow({mode: "open"});
            this._shadowRoot.appendChild(tmpl.content.cloneNode(true));
            this._firstConnection = false;
            this._tagContainer;
            this._tagIncreaseText = "h1";
            this._inicialValue;
            this._finalValue;
            this._tagTextValue = '';
        }

        //Fired when the widget is added to the html DOM of the page
        connectedCallback(){
            this._firstConnection = true;
            this.redraw();
        }

         //Fired when the widget is removed from the html DOM of the page (e.g. by hide)
        disconnectedCallback(){
        
        }

         //When the custom widget is updated, the Custom Widget SDK framework executes this function first
		onCustomWidgetBeforeUpdate(oChangedProperties) {

		}

        //When the custom widget is updated, the Custom Widget SDK framework executes this function after the update
		onCustomWidgetAfterUpdate(oChangedProperties) {
            if (this._firstConnection){
                this.redraw();
            }
        }
        
        //When the custom widget is removed from the canvas or the analytic application is closed
        onCustomWidgetDestroy(){
        }

        set widgetInicialValue(valInicial) {
            let number = parseInt(valInicial);
			this._inicialValue = number;
		}
        get widgetInicialValue() {
			return this._inicialValue
		}

        set widgetFinalValue(valFinal) {
            let number = parseInt(valFinal);
            this._finalValue = number;
		}
        get widgetFinalValue() {
            return this._finalValue
		}

        set widgetIncrease(val) {
            let number = parseInt(val);
            let progressionGrowth = (number / this._inicialValue) * 100;
            this._barWidth = (200 * progressionGrowth) / 100; 
            this._tagTextValue = 'There was an increase in ' + number + '%';
            this.redraw();
		}
        get widgetIncrease() {
			return this._tagTextValue;
		}

        redraw(){
            if (this._tagTextValue != null) {
                // if (this._tagContainer){
                //     this._tagContainer.parentNode.removeChild(this._tagContainer);
                // }
                // this._tagContainer = document.createElement(this._tagIncreaseText);
                // var theText = document.createTextNode(this._tagTextValue);    
                // this._tagContainer.appendChild(theText); 
                document.getElementById('progressTotal').innerText = this._tagTextValue;
    
                if (this._barWidth > 200) {
                    document.getElementById('Bar').style.width = '200px';
                } else {
                    document.getElementById('Bar').style.width = barWidth + 'px';
                }
            }
        }
    };
    customElements.define('com-sap-sample-clean', HelloWorld2);
})();