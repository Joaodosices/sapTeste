(function()  {
    let tmpl = document.createElement('template');
    // grid-template-columns: 230px 230px;
    // .optionCircle2:hover, .optionCircle:hover{
    //     background: rgb(173, 206, 0);
    // }
    //rgba(24, 145, 186, 0.53)
    //background: rgb(92, 177, 206);
    tmpl.innerHTML = `
    <style>
        #root{
            width: 700px;
            display: grid;
            grid-template-columns: 230px 230px 230px 230px;
            background: transparent;
        }
        .areaOption{
            display: grid;
            justify-content: center;
            align-items: center;
            width: 100%; /*200px*/
            height: 16.25rem; /*500px*/
        }

        .areaOption h1{
            color: black;
        }
        .optionCircle2,.optionCircle {
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0rem auto 0;
            height: 15.55rem;
            width: 13rem;
            border-radius: 0%;
            background: rgb(92, 177, 206);
            border-width: 0;
            transition: ease-in-out 400ms;
            position: relative;
        }
        .optionCircle2:hover, .optionCircle:hover{
            cursor: pointer;
        }
        .optionCircle2 img, .optionCircle img{
            margin-bottom: 30px;
        }
        .optionShownImg{
            margin-bottom: 0px;
            position: absolute;
            top: 2px;
        }
        
        .areaText {
            background: white;
            width: 100%;
            position: absolute;
            bottom: 0;
        }
        .areaTextShown{
            background: white;
            width: 100%;
            height: 88%;
            position: absolute;
            bottom: 0;
        }
        .areaText h1 {
            color: black;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            font-size: 1rem;
            text-align: center;
        }
        .areaTextShown h1 {
            color: black;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            font-size: 1.2rem;
            text-align: center;
            padding-top: 0rem; 
        }
        .areaTextShown p {
            color: black;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            text-align: center;
            padding-top: 0rem;
        }
        
        .lineDecoration{
            margin: 0 auto;
        }
        .optionShownImg {
            width: 22px;
            height: 22px;
            cursor: pointer;
        }
        .card {
            perspective: 1000px;
            position: relative;
            overflow: hidden;
            transition: ease-in-out 400ms;
         }
         
         .card.flip .front {
            transform: rotateY(180deg);
         }
         
         .card.flip .back {
            transform: rotateY(0deg);
         }
         
         .front, .back {
            backface-visibility: hidden;
            transition: transform 0.8s;
         }
         .front {
            position: absolute;
            margin-left: 7px;
            transition: ease-in-out 400ms;
         }
        .back {
            position: absolute;
            top: 0px;
            left: 100%;
            margin-top: 6px;
            margin-left: 7px;
            transition: ease-in-out 400ms;
        }
        .back a {
            text-decoration: none;
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
            this.firstConnection = false

            this.addEventListener("click", event => {
                var event = new Event("onClick");
                this.dispatchEvent(event);
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
		}

        //When the custom widget is updated, the Custom Widget SDK framework executes this function after the update
		onCustomWidgetAfterUpdate(oChangedProperties) {
            // if (this.firstConnection === true){
                let root = this._shadowRoot.getElementById("root")

                let arrMenuOptions =[
                    [`Informação Geral`, `https://joaodosices.github.io/sapTeste/menuHomePage/imgs/informacaoGeral.png`], 
                    [`Volume de negócios`, `https://joaodosices.github.io/sapTeste/menuHomePage/imgs/volumeNegocios.png`], 
                    [`Clientes`, `https://joaodosices.github.io/sapTeste/menuHomePage/imgs/clientes.png`], 
                    [`Fornecedores`, `https://joaodosices.github.io/sapTeste/menuHomePage/imgs/fornecedores.png`], 
                    [`Investimentos`, `https://joaodosices.github.io/sapTeste/menuHomePage/imgs/fornecedores.png`],
                    [`Endividamento`, `https://joaodosices.github.io/sapTeste/menuHomePage/imgs/fornecedores.png`],
                    [`OPEX`, `https://joaodosices.github.io/sapTeste/menuHomePage/imgs/fornecedores.png`],
                    [`Desvio de Custos de Capital`, `https://joaodosices.github.io/sapTeste/menuHomePage/imgs/fornecedores.png`],
                    [`Indutores`, `https://joaodosices.github.io/sapTeste/menuHomePage/imgs/fornecedores.png`],
                    [`Opex`, `https://joaodosices.github.io/sapTeste/menuHomePage/imgs/fornecedores.png`]]
                let arrOptionsList =[
                    [`Informação Geral`,`Página Inicial`],
                    [`Volume de negócios`, `Overview`,`Global`,`Detalhado`,`Clientes`],
                    [`Clientes`, `Global`,`Detalhado`],
                    [`Fornecedores`,`Global`,`Detalhado`],
                    [`Investimentos`,`Global`,`Detalhado`],
                    [`Endividamento`,`Global`,`Detalhado`],
                    [`OPEX`,`Global`,`Detalhado`],
                    [`Desvio de Custos de Capital`,`Desvio de Custos de Capital`],
                    [`Indutores`,`Global`,`Detalhado`],
                    [`Opex`,`Global`,`Detalhado`]
                ]
                let arrOptionsLinks = [
                    [`Informação Geral`,
                    `https://mota-engil-q.eu10.hcs.cloud.sap/sap/fpa/ui/app.html#/story&/s/3911988716919EADD738313BBC5A533C/?mode=present&resourceType=STORY`],
                    [`Volume de negócios`, 
                    `https://mota-engil-q.eu10.hcs.cloud.sap/sap/fpa/ui/app.html#/story&/s/6141988716946319D4EACA18AC716D65/?mode=present&resourceType=STORY`,
                    `https://mota-engil-q.eu10.hcs.cloud.sap/sap/fpa/ui/app.html#/story&/s/6141988716946319D4EACA18AC716D65/?mode=present&resourceType=STORY`,`https://mota-engil-q.eu10.hcs.cloud.sap/sap/fpa/ui/app.html#/story&/s/6141988716946319D4EACA18AC716D65/?mode=present&resourceType=STORY`,`https://mota-engil-q.eu10.hcs.cloud.sap/sap/fpa/ui/app.html#/story&/s/6141988716946319D4EACA18AC716D65/?mode=present&resourceType=STORY`],
                    [`Clientes`, 
                    `https://mota-engil-q.eu10.hcs.cloud.sap/sap/fpa/ui/app.html#/story&/s/C149988716920B8758E245B937117E4D/?mode=present&resourceType=STORY`,
                    `https://mota-engil-q.eu10.hcs.cloud.sap/sap/fpa/ui/app.html#/story&/s/C149988716920B8758E245B937117E4D/?mode=present&resourceType=STORY`],
                    [`Fornecedores`,
                    `https://mota-engil-q.eu10.hcs.cloud.sap/sap/fpa/ui/app.html#/story&/s/B9599887169785665FED7CEDC3C88E81/?mode=present&resourceType=STORY`,
                    `https://mota-engil-q.eu10.hcs.cloud.sap/sap/fpa/ui/app.html#/story&/s/B9599887169785665FED7CEDC3C88E81/?mode=present&resourceType=STORY`],
                    [`Investimentos`,
                    `https://mota-engil-q.eu10.hcs.cloud.sap/sap/fpa/ui/app.html#/story&/s/F28188716920C2BDC466FE8B40CD415/?mode=present&resourceType=STORY`,
                    `https://mota-engil-q.eu10.hcs.cloud.sap/sap/fpa/ui/app.html#/story&/s/F28188716920C2BDC466FE8B40CD415/?mode=present&resourceType=STORY`],
                    [`Endividamento`,
                    `https://mota-engil-q.eu10.hcs.cloud.sap/sap/fpa/ui/app.html#/story&/s/EB9F0871691C90E035B8174913C5729/?mode=present&resourceType=STORY`,
                    `https://mota-engil-q.eu10.hcs.cloud.sap/sap/fpa/ui/app.html#/story&/s/EB9F0871691C90E035B8174913C5729/?mode=present&resourceType=STORY`],
                    [`OPEX`,
                    `https://mota-engil-q.eu10.hcs.cloud.sap/sap/fpa/ui/app.html#/story&/s/5951988716951BE3C6800AEF218C1F43/?mode=present&resourceType=STORY`,
                    `https://mota-engil-q.eu10.hcs.cloud.sap/sap/fpa/ui/app.html#/story&/s/5951988716951BE3C6800AEF218C1F43/?mode=present&resourceType=STORY`],
                    [`Desvio de Custos de Capital`,
                    `https://mota-engil-q.eu10.hcs.cloud.sap/sap/fpa/ui/app.html#/story&/s/C7200D84F7636354C3FD0354D09B1FA2/?mode=present&resourceType=STORY`],
                    [`Indutores`,
                    `https://mota-engil-q.eu10.hcs.cloud.sap/sap/fpa/ui/app.html#/story&/s/9C801D84F7660B7BC130CAADAD14EB1F/?mode=present&resourceType=STORY`,
                    `https://mota-engil-q.eu10.hcs.cloud.sap/sap/fpa/ui/app.html#/story&/s/9C801D84F7660B7BC130CAADAD14EB1F/?mode=present&resourceType=STORY`],
                    [`Opex`,
                    `https://mota-engil-q.eu10.hcs.cloud.sap/sap/fpa/ui/app.html#/story&/s/43381087169633E1C72783A6478FAE44/?mode=present&resourceType=STORY`,
                    `https://mota-engil-q.eu10.hcs.cloud.sap/sap/fpa/ui/app.html#/story&/s/43381087169633E1C72783A6478FAE44/?mode=present&resourceType=STORY`]
                ]
                let tempText = ``
                let totalText = ``
                let cont = 0

                for (let i = 0; i < arrMenuOptions.length; i++) {
                    cont = cont + 1
                    tempText = ` 
                        <div class='card areaOption areaOption` + cont + `'>
                            <div class='optionCircle front'>
                                <img src="` + arrMenuOptions[i][1] + `" alt="imagem ` + arrMenuOptions[i][0] + `">
                                <div class='areaText'> 
                                    <h1>` + arrMenuOptions[i][0] + `</h1> 
                                </div>
                            </div>
                            <div class="optionCircle2 back">
                                <img class="optionShownImg" src="` + arrMenuOptions[i][1] + `" alt="imagem ` + arrMenuOptions[i][0] + `">
                                <div class="areaTextShown">
                                    <h1>` + arrMenuOptions[i][0] + `</h1>
                    `
                    for (let u = 1; u < arrOptionsList[i].length; u++) {
                        tempText = tempText + `
                        <a target="_blank"  href="` + arrOptionsLinks[i][u] + `"> 
                                <p>` + arrOptionsList[i][u] + `</p>
                        </a>
                        `
                    }
                    tempText = tempText + `
                            </div>
                        </div>
                    </div>
                    `
                    totalText = totalText + tempText
                    tempText = ``
                }
                

                
                // totalText = totalText + secondMenu
                root.innerHTML = totalText
                totalText = ``
                // this._shadowRoot.getElementById(`areaSecondMenu`).style.display = "none"

                var optionSelected = ``
                var optionsShown = []
                events(optionSelected, this, arrOptionsList, arrOptionsLinks, arrMenuOptions, optionsShown)
                window.addEventListener(`resize`, setBreakpoint)
            // }
        }
        
        //When the custom widget is removed from the canvas or the analytic application is closed
        onCustomWidgetDestroy(){
        }

        //

    };
    customElements.define('com-sap-sample-homepage', HomePage);
})();

function events(optionSelected, that, arrOptionsList, arrOptionsLinks, arrMenuOptions, optionsShown) {
    var _that = that
    let buttons = _that._shadowRoot.querySelectorAll(`.optionCircle`)
    let buttonsArea = _that._shadowRoot.querySelectorAll(`.areaOption`)
    let imgsShown = _that._shadowRoot.querySelectorAll(`.optionShownImg`)
    for (let b = 0; b < imgsShown.length; b++) {
        const e = imgsShown[b]
        e.addEventListener(`click`, ()=>{
            _that._shadowRoot.querySelectorAll(`.front`)[b].style.left = "0%"
            _that._shadowRoot.querySelectorAll(`.back`)[b].style.left = "100%"
        })
    }
    for (let i = 0; i < buttons.length; i++) {
        const element = buttons[i];
        element.addEventListener(`click`, ()=>{
            console.log(arrMenuOptions[i][0])
            element.classList.toggle("flip")
            _that._shadowRoot.querySelectorAll(`.optionCircle`)[i].classList.toggle(`flip`)
            _that._shadowRoot.querySelectorAll(`.back`)[i].style.left = "0%"
            _that._shadowRoot.querySelectorAll(`.front`)[i].style.left = "100%"
            // optionSelected = arrMenuOptions[i][0]

            // if (optionsShown.length > 0){
            //     for (let n = 0; n < optionsShown.length; n++) {
            //         _that._shadowRoot.getElementById(optionsShown[n]).parentNode.removeChild(_that._shadowRoot.getElementById(optionsShown[n]))
            //         console.log(optionsShown[n]+` Removido`)
            //     }
            // }
            // // _that._shadowRoot.getElementById("mainCircleTitle").textContent = optionSelected
            // let optionsText = ``
            // let newOptionsList = []
            // for (let j = 0; j < arrOptionsList.length; j++) {
                
            //     if (arrOptionsList[j][0] === optionSelected) {

            //         for (let z = 1; z < arrOptionsList[j].length; z++) {
            //             const element2 = arrOptionsList[j][z];
                        
            //             let newOption = document.createElement(`div`)
            //             newOption.id = `optionCircle`+element2
            //             newOption.style.height = "222px"
            //             newOption.style.marginTop = "5px"
            //             newOptionsList.push(`optionCircle`+element2)
            //             _that._shadowRoot.getElementById("root").appendChild(newOption)
            //             _that._shadowRoot.getElementById(`optionCircle`+element2).innerHTML = `
            //             <a class="optionCircle" target="_blank"  href="` + arrOptionsLinks[j][z] + `"> 
            //                 <img class="optionShownImg" src="` + arrMenuOptions[j][1] + `" alt="imagem ` + arrMenuOptions[j][0] + `">
            //                 <div class="areaTextShown">
            //                     <h1>` + arrMenuOptions[j][0] + `</h1>
            //                     <p>` + element2 + `</p>
            //                 </div> 
            //             </a>`
                        
            //             if (newOptionsList.length === 0) {
            //                 _that._shadowRoot.getElementById("root").style.gridTemplateColumns = "230px 230px"
            //             }
            //             if (newOptionsList.length >= 1) {
            //                 _that._shadowRoot.getElementById("root").style.gridTemplateColumns = "230px 230px 230px"
            //             }
            //             if (newOptionsList.length >= 3) {
            //                 _that._shadowRoot.getElementById("root").style.gridTemplateColumns = "230px 230px 230px 230px"
            //             }
                        
            //         }
            //     }
            // }
            // optionsShown = [...newOptionsList]
            // console.log(optionsShown)
            

        })
    }

    //Back button event
    // _that._shadowRoot.getElementById("optionBackCircleTitle").addEventListener(`click`, ()=>{
    //     for (let j = 0; j < buttonsArea.length; j++) {
    //         buttonsArea[j].style.display = "grid"
    //         _that._shadowRoot.getElementById(`areaSecondMenu`).style.display = "none"
    //     }
    // })
    //second menu side menu buttons
    // _that._shadowRoot.querySelectorAll(".option1Circle")[0].addEventListener("click", ()=>{
    //     var event = new Event("onClick");
    //     _that.dispatchEvent(event);
    //     let option = _that._shadowRoot.getElementById("option1CircleTitle").textContent
    //     for (let i = 0; i < buttons.length; i++) {
    //         if (option === arrMenuOptions[i]) {
    //             populateSecondMenu(option, i, _that, arrOptionsList, arrOptionsLinks, arrMenuOptions)
    //         }
    //     }
    // })
    // _that._shadowRoot.querySelectorAll(".option2Circle")[0].addEventListener("click", ()=>{
    //     var event = new Event("onClick");
    //     _that.dispatchEvent(event);
    //     let option = _that._shadowRoot.getElementById("option2CircleTitle").textContent
    //     for (let i = 0; i < buttons.length; i++) {
    //         if (option === arrMenuOptions[i]) {
    //             populateSecondMenu(option, i, _that, arrOptionsList, arrOptionsLinks, arrMenuOptions)
    //         }
    //     }
    // })
    // _that._shadowRoot.querySelectorAll(".option3Circle")[0].addEventListener("click", ()=>{
    //     var event = new Event("onClick");
    //     _that.dispatchEvent(event);
    //     let option = _that._shadowRoot.getElementById("option3CircleTitle").textContent
    //     for (let i = 0; i < buttons.length; i++) {
    //         if (option === arrMenuOptions[i]) {
    //             populateSecondMenu(option, i, _that, arrOptionsList, arrOptionsLinks, arrMenuOptions)
    //         }
    //     }
    // })

}

function setBreakpoint() {
    if (window.innerWidth < 600) {
        // apply styles for small screens
        console.log(`menos de 600px`)
    } else if (window.innerWidth >= 600 && window.innerWidth < 900) {
        // apply styles for medium screens
        console.log(`entre 600 e 900`)
    } else {
        // apply styles for large screens
        console.log(`superior a 900`)
    }
  }

// function populateSecondMenu(optionSelected, id, thisthat, arrOptionsList, arrOptionsLinks, arrMenuOptions) {
//     thisthat._shadowRoot.getElementById("mainCircleTitle").textContent = optionSelected
//     let optionsText = ``
//     for (let i = 0; i < arrOptionsList.length; i++) {
//         if (arrOptionsList[i][0] === optionSelected) {
//             for (let z = 1; z < arrOptionsList[i].length; z++) {
//                 const element = arrOptionsList[i][z];
//                 optionsText = optionsText + ` <a target="_blank"  href="` + arrOptionsLinks[i][z] + `"> <h1 class="mainCircleOptions">-` + element + `</h1> </a>`
//             }
//         }
//     }
//     // optionsText = optionsText + `</div>`
//     thisthat._shadowRoot.getElementById("mainCircleOptionsArea").innerHTML = optionsText
 

//     let ID = id + 1
//     let contador = 1
//     for (let i = 0; i < arrMenuOptions.length; i++) {
//         const element = arrMenuOptions[i];
//         if (contador < 4) {  
//             if (contador !== ID){
//                 thisthat._shadowRoot.getElementById("option" + contador + "CircleTitle").textContent = element
//             }else {
//                 i = i + 1
//                 thisthat._shadowRoot.getElementById("option" + contador + "CircleTitle").textContent = arrMenuOptions[i]
//             }
//             contador = contador + 1
//         }
//     }
// }