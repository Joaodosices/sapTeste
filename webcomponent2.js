(function()  {
    let tmpl = document.createElement('template');
    tmpl.innerHTML = `
        <style>
        .progressionBar{
            width: 200px;
            height: 20px;
        }
        #Bar{
            width: 0px;
            height: 20px;
        }
        </style>

        <h1 id="progressTotal"></h1>
        <div class='progressionBar'>
            <div id='Bar'></div>
        </div>
    `;

    customElements.define('com-sap-sample-helloworld2', class HelloWorld2 extends HTMLElement {


		constructor() {
			super(); 
			this._shadowRoot = this.attachShadow({mode: "open"});
            this._shadowRoot.appendChild(tmpl.content.cloneNode(true));
            this._firstConnection = false;
            // this._tagContainer;
            // this._tagIncreaseText = "h1";
            this._tagTextValue = '';
            this._tagBar = document.getElementById('Bar').style.width;
            
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

        get widgetIncrease() {
			return this._tagTextValue;
		}
        set widgetIncrease(val) {
            this._barWidth = (200 * val) / 100; 
            this._tagTextValue = 'There was an increase in ' + val + '%';
		}
        
        // get widgetInicialValue() {
		// 	return this._shadowRoot.getElementById("aps_valInicial").value;
		// }
        // set widgetInicialValue(valInicial) {
		// 	this._shadowRoot.getElementById("aps_valInicial").value = valInicial;
		// }

        // set widgetValues(valInicial, valFinal) {
        //     if (isset(valInicial) && isset(valFinal)) {
        //         let progressionGrowth = ((valFinal - valInicial) / valInicial) * 100;
        //         this._barWidth = (200 * progressionGrowth) / 100; 
        //         this._tagTextValue = 'There was an increase in ' + progressionGrowth + '%';
        //     }
		// }


        redraw(){

                document.getElementById('progressTotal').innerText = this._tagTextValue;

                if (this._barWidth > 200) {
                    document.getElementById('Bar').style.width = '200px';
                } else {
                    document.getElementById('Bar').style.width = barWidth + 'px';
                }
            

                // if (this._tagContainer){
                //     this._tagContainer.parentNode.removeChild(this._tagContainer);
                // }
                // this._tagContainer = document.createElement(this._tagIncreaseText);
                // var theText = document.createTextNode(this._tagTextValue);    
                // this._tagContainer.appendChild(theText); 
            }
    });
})();