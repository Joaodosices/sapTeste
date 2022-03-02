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

        <h1 id="progressTotal">Olá</h1>
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
            // this._tagContainer;
            // this._tagIncreaseText = "h1";
            this._inicialValue;
            this._finalValue;
            this._tagTextValue = 'Olá';
            
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
    
            let some = this._inicialValue + this._finalValue;
            console.log(some);
            let progressionGrowth = (some / this._inicialValue) * 100;
            this._barWidth = (200 * progressionGrowth) / 100; 
            this._tagTextValue = 'There was an increase in ' + progressionGrowth + '%';
            
            if (this._firstConnection){
                this.redraw();
            }
        }
        
        //When the custom widget is removed from the canvas or the analytic application is closed
        onCustomWidgetDestroy(){
        }

        set widgetInicialValue(valInicial) {
			this._inicialValue = parseInt(valInicial);
		}
        get widgetInicialValue() {
			return this._inicialValue
		}

        set widgetFinalValue(valFinal) {
            this._finalValue = parseInt(valFinal);
		}
        get widgetFinalValue() {
            return this._finalValue
		}

        // set widgetIncrease(val) {
        //     let progressionGrowth = (val / this._inicialValue) * 100;
        //     this._barWidth = (200 * progressionGrowth) / 100; 
        //     this._tagTextValue = 'There was an increase in ' + progressionGrowth + '%';
		// }
        // get widgetIncrease() {
		// 	return this._tagTextValue;
		// }


        redraw(){
                var theText = document.createTextNode(this._tagTextValue);
                document.getElementById('progressTotal').appendChild(theText)
                // if (this._barWidth > 200) {
                //     document.getElementById('Bar').style.width = '200px';
                // } else {
                //     document.getElementById('Bar').style.width = barWidth + 'px';
                // }
                // if (this._tagContainer){
                //     this._tagContainer.parentNode.removeChild(this._tagContainer);
                // }
                // this._tagContainer = document.createElement(this._tagIncreaseText);
                // var theText = document.createTextNode(this._tagTextValue);    
                // this._tagContainer.appendChild(theText); 
            }
    };
    customElements.define('com-sap-sample-nums', HelloWorld2);
})();