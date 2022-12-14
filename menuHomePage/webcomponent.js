(function()  {
    let tmpl = document.createElement('template');
    tmpl.innerHTML = `
    <style>
        #root{
            width: 700px;
            display: grid;
            grid-template-columns: 350px 350px;
            
        }
        .areaOption{
            display: grid;
            justify-content: center;
            align-items: center;
            width: 100%; /*200px*/
            height: 16.25rem; /*500px*/
            background: white;
        }
        .areaOption h1{
            color: black;
        }
        .optionCircle {
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0rem auto 0;
            width: 13rem;
            height: 13rem;
            border-radius: 50%;
            background: rgb(249, 128, 29);
            border-style: solid;
            border-width: 0.35rem;
            border-color: rgb(181, 90, 15);
            transition: ease-in-out 400ms;
        }
        .optionCircle:hover{
            cursor: pointer;
            background: rgb(173, 206, 0);
            border-color: rgb(151, 180, 1);
        }
        .optionCircle h1 {
            color: black;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            font-size: 1rem;
            text-align: center;
        }
        
        .lineDecoration{
            margin: 0 auto;
        }
        
        
        
        #areaSecondMenu{
            display: grid;
            padding-left: 2rem;
            width: 800px;
            grid-template-columns: 500px auto ;
        }
        #areaMainCircle{
            grid-column: 1 / span 1;
            grid-row: 1 / span 1;
            align-self: center;
        }
        #mainCircleTitle{
            margin-top: 5rem;
            margin-bottom: 0rem;
            text-align: center;
            font-size: 36px;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        #mainCircleOptionsArea{
            display: grid;
            grid-template-rows: auto auto auto auto auto;
            height: 350px;
            justify-content: center;
            align-items: center;
        }
        #mainCircleOptionsArea a {
            width: 15rem;
            text-decoration: none;
            color: black;
            border-style: solid;
            border-width: 0.35rem;
            border-color: transparent;
            border-radius: 15px;
            transition: ease-in-out 400ms;
        }
        #mainCircleOptionsArea a:hover{
            cursor: pointer;
            background: rgb(173, 206, 0);
            border-color: rgb(151, 180, 1);
        }
        .mainCircleOptions{
            text-align: center;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            font-size: 25px;
            margin: 0;
        }
        #sideMenu{
            display: grid;
            gap: 0.4rem;
        }
        
        #sideMenu h1{
            text-decoration: none;
            font-size: 0.8rem;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            color: black;
            margin-top: 37%;
            margin-bottom: 0%;
            text-align: center;
        }
        h1#option1CircleTitle{
            margin-top: 33%;
        }
        h1#optionBackCircleTitle{
            margin-top: 5%;
            font-size: 4rem;
        }
        #mainCircle{
            /* width: 35rem; */
            width: 475px;
            height: 475px;
            /* height: 35rem; */
            border-radius: 50%;
            background: rgb(249, 128, 29);
            border-style: solid;
            border-width: 0.35rem;
            border-color: rgb(181, 90, 15);
            transition: ease-in-out 400ms;
        }
        .optionBackCircle, .option1Circle, .option2Circle, .option3Circle {
            /* width: 9rem; */
            width: 100px;
            height: 100px;
            /* height: 9rem; */
            border-radius: 50%;
            background: rgb(249, 128, 29);
            border-style: solid;
            border-width: 0.35rem;
            border-color: rgb(181, 90, 15);
            transition: ease-in-out 400ms;
        }
        
        .optionBackCircle:hover, .option1Circle:hover, .option2Circle:hover, .option3Circle:hover{
            cursor: pointer;
            background: rgb(173, 206, 0);
            border-color: rgb(151, 180, 1);
        }
        </style>
        <div id="root"></div>
    `;

    class HomePage extends HTMLElement {

		constructor() {
			super(); 
			this._shadowRoot = this.attachShadow({mode: "open"});
            this._shadowRoot.appendChild(tmpl.content.cloneNode(true));
            
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
                let root = this._shadowRoot.document.getElementById("root")
                let arrMenuOptions =[`Informação Geral`, `Volume de negócios`, `Clientes`, `Fornecedores`]
                let arrOptionsList =[
                    [`Informação Geral`,`Página Inicial`,`Detalhado`],
                    [`Volume de negócios`, `Overview`,`Global`,`Detalhado`,`Clientes`],
                    [`Clientes`, `Global`,`Detalhado`],
                    [`Fornecedores`,`Global`,`Detalhado`]
                ]
                let arrOptionsLinks = [
                    [`Informação Geral`,`https://mota-engil-q.eu10.hcs.cloud.sap/sap/fpa/ui/app.html#/story&/s/65180987E4F6BA9784218BC60DBE4475/?resourceType=STORY&mode=view`,`https://mota-engil-q.eu10.hcs.cloud.sap/sap/fpa/ui/app.html#/story&/s/65180987E4F6BA9784218BC60DBE4475/?mode=edit&resourceType=STORY`],
                    [`Volume de negócios`, `https://mota-engil-q.eu10.hcs.cloud.sap/sap/fpa/ui/app.html#/story&/s/C9500F0665AA9DEDEFC763E80222A87F/?resourceType=STORY&mode=view`,`https://mota-engil-q.eu10.hcs.cloud.sap/sap/fpa/ui/app.html#/story&/s/C9500F0665AA9DEDEFC763E80222A87F/?resourceType=STORY&mode=view`,`https://mota-engil-q.eu10.hcs.cloud.sap/sap/fpa/ui/app.html#/story&/s/C9500F0665AA9DEDEFC763E80222A87F/?resourceType=STORY&mode=view`,`https://mota-engil-q.eu10.hcs.cloud.sap/sap/fpa/ui/app.html#/story&/s/C9500F0665AA9DEDEFC763E80222A87F/?resourceType=STORY&mode=view`],
                    [`Clientes`, `https://mota-engil-q.eu10.hcs.cloud.sap/sap/fpa/ui/app.html#/story&/s/D9F042073F2D1B961A4667DDBA1DA097/?resourceType=STORY&mode=view`,`https://mota-engil-q.eu10.hcs.cloud.sap/sap/fpa/ui/app.html#/story&/s/D9F042073F2D1B961A4667DDBA1DA097/?resourceType=STORY&mode=view`],
                    [`Fornecedores`,`https://mota-engil-q.eu10.hcs.cloud.sap/sap/fpa/ui/app.html#/story&/s/E6B90404DC4BC188BD6312EEE43BFF5B/?resourceType=STORY&mode=view`,`https://mota-engil-q.eu10.hcs.cloud.sap/sap/fpa/ui/app.html#/story&/s/E6B90404DC4BC188BD6312EEE43BFF5B/?resourceType=STORY&mode=view`]
                ]

                let tempText = ``
                let totalText = ``
                let cont = 0

                arrMenuOptions.forEach(element => {
                    cont = cont + 1
                    tempText = `    
                        <div class='areaOption areaOption` + cont + `'>
                            <div class='optionCircle'>
                                <h1>` + element + `</h1>
                            </div>
                        </div>
                
                    `
                    totalText = totalText + tempText
                    tempText = ``
                });

                let secondMenu = `
                <div id="areaSecondMenu">
                        <div id="areaMainCircle">
                            <div id="mainCircle">
                                <h1 id="mainCircleTitle"></h1>
                                <div id="mainCircleOptionsArea">
                                    
                                </div>
                            </div>
                        </div>
                        <div id="sideMenu">
                            <div id="areaBackCircle">
                                    <div class="optionBackCircle">
                                        <h1 id="optionBackCircleTitle">⬅</h1>
                                    </div>
                            </div>
                            <div id="areaOption1Circle">
                                    <div class="option1Circle">
                                        <h1 id="option1CircleTitle"></h1>
                                    </div>
                            </div>
                            <div id="areaOption2Circle">
                                    <div class="option2Circle">
                                        <h1 id="option2CircleTitle"></h1>
                                    </div>
                            </div>
                            <div id="areaOption3Circle">
                                    <div class="option3Circle">
                                        <h1 id="option3CircleTitle"></h1>
                                    </div>
                            </div>
                        </div>
                    </div>
                `
                totalText = totalText + secondMenu
                root.innerHTML = totalText
                totalText = ``
                this._shadowRoot.document.getElementById(`areaSecondMenu`).style.display = "none"

                var optionSelected = ``
                events(optionSelected, this, arrOptionsList, arrOptionsLinks)
            }
        }
        
        //When the custom widget is removed from the canvas or the analytic application is closed
        onCustomWidgetDestroy(){
        }

        //

    };
    customElements.define('com-sap-sample-homepage', HomePage);
})();

function events(optionSelected, that, arrOptionsList, arrOptionsLinks) {
    let buttons = that._shadowRoot.document.getElementsByClassName(`optionCircle`)
    let buttonsArea = that._shadowRoot.document.getElementsByClassName(`areaOption`)
    for (let i = 0; i < buttons.length; i++) {
        const element = buttons[i];
        element.addEventListener(`click`, ()=>{
            optionSelected = arrMenuOptions[i]
            populateSecondMenu(optionSelected, i)
            for (let j = 0; j < buttonsArea.length; j++) {
                buttonsArea[j].style.display = "none"
            }
            that._shadowRoot.document.getElementById(`areaSecondMenu`).style.display = "grid"
        })
    }

    //Back button event
    that._shadowRoot.document.getElementById("optionBackCircleTitle").addEventListener(`click`, ()=>{
        for (let j = 0; j < buttonsArea.length; j++) {
            buttonsArea[j].style.display = "grid"
            document.getElementById(`areaSecondMenu`).style.display = "none"
        }
    })
    //second menu side menu buttons
    that._shadowRoot.document.getElementsByClassName("option1Circle")[0].addEventListener("click", ()=>{
        let option = that._shadowRoot.document.getElementById("option1CircleTitle").textContent
        for (let i = 0; i < buttons.length; i++) {
            if (option === arrMenuOptions[i]) {
                populateSecondMenu(option, i, that, arrOptionsList, arrOptionsLinks)
            }
        }
    })
    that._shadowRoot.document.getElementsByClassName("option2Circle")[0].addEventListener("click", ()=>{
        let option = that._shadowRoot.document.getElementById("option2CircleTitle").textContent
        for (let i = 0; i < buttons.length; i++) {
            if (option === arrMenuOptions[i]) {
                populateSecondMenu(option, i, that, arrOptionsList, arrOptionsLinks)
            }
        }
    })
    that._shadowRoot.document.getElementsByClassName("option3Circle")[0].addEventListener("click", ()=>{
        let option = that._shadowRoot.document.getElementById("option3CircleTitle").textContent
        for (let i = 0; i < buttons.length; i++) {
            if (option === arrMenuOptions[i]) {
                populateSecondMenu(option, i, that, arrOptionsList, arrOptionsLinks)
            }
        }
    })

}

function populateSecondMenu(optionSelected, id, that, arrOptionsList, arrOptionsLinks) {
    that._shadowRoot.document.getElementById("mainCircleTitle").textContent = optionSelected
    let optionsText = ``
    for (let i = 0; i < arrOptionsList.length; i++) {
        if (arrOptionsList[i][0] === optionSelected) {
            for (let z = 1; z < arrOptionsList[i].length; z++) {
                const element = arrOptionsList[i][z];
                optionsText = optionsText + ` <a target="_blank"  href="` + arrOptionsLinks[i][z] + `"> <h1 class="mainCircleOptions">-` + element + `</h1> </a>`
            }
        }
    }
    // optionsText = optionsText + `</div>`
    that._shadowRoot.document.getElementById("mainCircleOptionsArea").innerHTML = optionsText
 

    let ID = id + 1
    let contador = 1
    for (let i = 0; i < arrMenuOptions.length; i++) {
        const element = arrMenuOptions[i];
        if (contador < 4) {  
            if (contador !== ID){
                that._shadowRoot.document.getElementById("option" + contador + "CircleTitle").textContent = element
            }else {
                i = i + 1
                that._shadowRoot.document.getElementById("option" + contador + "CircleTitle").textContent = arrMenuOptions[i]
            }
            contador = contador + 1
        }
    }
}