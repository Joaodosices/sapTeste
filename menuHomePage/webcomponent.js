(function()  {
    let tmpl = document.createElement('template');
    // grid-template-columns: 230px 230px;
    // .optionCircle2:hover, .optionCircle:hover{
    //     background: rgb(173, 206, 0);
    // }
    //rgba(24, 145, 186, 0.53)
    //background: rgb(92, 177, 206);
    // .secondMenuArea{
    //     visibility: hidden;
    // }
    tmpl.innerHTML = `
    <style>
        #root{
            width: 700px;
            display: grid;
            grid-template-columns: 231px 231px 231px 231px 231px;
            background: transparent;
        }
        .secondMenuArea .front, .secondMenuArea .back{
            left: 100%;
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
            background: rgb(131, 179, 119);
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
            background: rgb(3, 81, 99);
            width: 100%;
            position: absolute;
            bottom: 0;
        }
        .areaTextShown{
            background: rgb(3, 81, 99);
            width: 100%;
            height: 88%;
            position: absolute;
            bottom: 0;
            overflow-y:auto
        }
        .areaText h1 {
            color: white;
            font-family: 'Lato', Tahoma, Geneva, Verdana, sans-serif;
            font-size: 1rem;
            text-align: center;
        }
        .areaTextShown h1 {
            color: white;
            font-family: 'Lato', Tahoma, Geneva, Verdana, sans-serif;
            font-size: 1.2rem;
            text-align: center;
            padding-top: 0rem; 
        }
        .areaTextShown p {
            color: white;
            font-family: 'Lato', Tahoma, Geneva, Verdana, sans-serif;
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

                /*
                ZONA DE DADOS 

                Como adicionar dados: 

                AVISO: O nome da opção deve ser igual em todos os arrays
                AVISO: Os links devem estar na mesma que os nomes das páginas estão no array "arrOptionsList"
                */

                let arrMenuOptions =[
                    [`Informação Geral`, `https://joaodosices.github.io/sapTeste/menuHomePage/imgs/informacaoGeral.svg`],
                    [`Volume de negócios`, `https://joaodosices.github.io/sapTeste/menuHomePage/imgs/volumeNegocios.svg`],
                    [`Clientes`, `https://joaodosices.github.io/sapTeste/menuHomePage/imgs/clientes.svg`],
                    [`Fornecedores`, `https://joaodosices.github.io/sapTeste/menuHomePage/imgs/fornecedores.svg`], 
                    [`Investimentos`, `https://joaodosices.github.io/sapTeste/menuHomePage/imgs/investimentos.svg`],
                    [`Endividamento`, `https://joaodosices.github.io/sapTeste/menuHomePage/imgs/endividamento.svg`],
                    [`OPEX`, `https://joaodosices.github.io/sapTeste/menuHomePage/imgs/informacaoGeral.svg`], 
                    [`Informações Agregadas`, `https://joaodosices.github.io/sapTeste/menuHomePage/imgs/Chart.svg`], 
                    [`Holding`, `https://joaodosices.github.io/sapTeste/menuHomePage/imgs/multipleTable.svg`]
                ]
    
                let arrMenuOptionsSecondMenu =[
                    [`Desvio de Custos de Capital`, `https://joaodosices.github.io/sapTeste/menuHomePage/imgs/volumeNegocios.svg`],
                    [`Desvio de Preço`, `https://joaodosices.github.io/sapTeste/menuHomePage/imgs/volumeNegocios.svg`],
                    [`Indutores`, `https://joaodosices.github.io/sapTeste/menuHomePage/imgs/fornecedores.svg`],
                    [`Opex`, `https://joaodosices.github.io/sapTeste/menuHomePage/imgs/informacaoGeral.svg`],
                    [`Atividades Complementares`, `https://joaodosices.github.io/sapTeste/menuHomePage/imgs/tableIcon.svg`]
                ]
                
                let arrOptionsList =[
                    [`Informação Geral`,`Informação Geral`],
                    [`Volume de negócios`, `Overview`,`Global`,`Detalhado`,`Clientes`],
                    [`Clientes`, `Global`,`Detalhado`],
                    [`Fornecedores`,`Global`,`Detalhado`],
                    [`Investimentos`,`Global`,`Detalhado`],
                    [`Endividamento`,`Global`,`Detalhado`],
                    [`OPEX`,`Global`,`Detalhado`],
                    [`Informações Agregadas`, `Overview`,`Volume de Negócios`,`Clientes`, `Opex`, `Fornecedores`, `Endividamento`, `Investimentos`, `DR`],
                    [`Holding`, `Overview`,`Volume de Negócios (€)`,`Volume de Negócios (t)`,`Clientes`, `Opex`, `Fornecedores`, `Endividamento`]
                ]

                let arrOptionsListSecondMenu =[
                    [`Desvio de Custos de Capital`,`Desvio de Custos de Capital`],
                    [`Desvio de Preço`,`Global`,`Detalhado`],
                    [`Indutores`,`Global`,`Detalhado`],
                    [`Opex`,`Global`,`Detalhado`],
                    [`Atividades Complementares`,`Atividades Complementares`]
                ]

                let arrOptionsLinks = [
                    [`Informação Geral`,
                    `https://mota-engil.eu10.hcs.cloud.sap/sap/fpa/ui/app.html#/story&/s/64981101B2792898C7E9B5280A8A8590/?mode=present&resourceType=STORY`],
                    [`Volume de negócios`, 
                    `https://mota-engil.eu10.hcs.cloud.sap/sap/fpa/ui/app.html#/story&/s/E9C03901B27F9C3B78B95D62016093C5/?mode=present&resourceType=STORY`,
                    `https://mota-engil.eu10.hcs.cloud.sap/sap/fpa/ui/app.html#/story&/s/E9C03901B27F9C3B78B95D62016093C5/?mode=present&resourceType=STORY`,
                    `https://mota-engil.eu10.hcs.cloud.sap/sap/fpa/ui/app.html#/story&/s/E9C03901B27F9C3B78B95D62016093C5/?mode=present&resourceType=STORY`,
                    `https://mota-engil.eu10.hcs.cloud.sap/sap/fpa/ui/app.html#/story&/s/E9C03901B27F9C3B78B95D62016093C5/?mode=present&resourceType=STORY`],
                    [`Clientes`, 
                    `https://mota-engil.eu10.hcs.cloud.sap/sap/fpa/ui/app.html#/story&/s/7F70BE056E25588E30CD527FE8962FC7/?mode=present&resourceType=STORY`,
                    `https://mota-engil.eu10.hcs.cloud.sap/sap/fpa/ui/app.html#/story&/s/7F70BE056E25588E30CD527FE8962FC7/?mode=present&resourceType=STORY`],
                    [`Fornecedores`,
                    `https://mota-engil.eu10.hcs.cloud.sap/sap/fpa/ui/app.html#/story&/s/D0A0C6056E234B26D2E001A211ABCEEB/?mode=present&resourceType=STORY`,
                    `https://mota-engil.eu10.hcs.cloud.sap/sap/fpa/ui/app.html#/story&/s/D0A0C6056E234B26D2E001A211ABCEEB/?mode=present&resourceType=STORY`],
                    [`Investimentos`,
                    `https://mota-engil.eu10.hcs.cloud.sap/sap/fpa/ui/app.html#/story&/s/B1888881F21B4466F7C4BEF8048B59F7/?mode=present&resourceType=STORY`,
                    `https://mota-engil.eu10.hcs.cloud.sap/sap/fpa/ui/app.html#/story&/s/B1888881F21B4466F7C4BEF8048B59F7/?mode=present&resourceType=STORY`],
                    [`Endividamento`,
                    `https://mota-engil.eu10.hcs.cloud.sap/sap/fpa/ui/app.html#/story&/s/57C84901B27AB795C7020211602B3BC4/?mode=present&resourceType=STORY`,
                    `https://mota-engil.eu10.hcs.cloud.sap/sap/fpa/ui/app.html#/story&/s/57C84901B27AB795C7020211602B3BC4/?mode=present&resourceType=STORY`],
                    [`OPEX`,
                    `https://mota-engil.eu10.hcs.cloud.sap/sap/fpa/ui/app.html#/story&/s/9DC01101B278F18DD81339D39DADEBBF/?mode=present&resourceType=STORY`,
                    `https://mota-engil.eu10.hcs.cloud.sap/sap/fpa/ui/app.html#/story&/s/9DC01101B278F18DD81339D39DADEBBF/?mode=present&resourceType=STORY`],
                    [`Informações Agregadas`, 
                    `https://mota-engil.eu10.hcs.cloud.sap/sap/fpa/ui/app.html#/story&/s/48303901B27A36274B5F19CE773FE598/?mode=present&resourceType=STORY`,
                    `https://mota-engil.eu10.hcs.cloud.sap/sap/fpa/ui/app.html#/story&/s/7438B081F21FDEFB40BA1B27A7A8B2EC/?mode=present&resourceType=STORY`,
                    `https://mota-engil.eu10.hcs.cloud.sap/sap/fpa/ui/app.html#/story&/s/7C40B081F21A2F80059C0E293E82EA91/?mode=present&resourceType=STORY`,
                    `https://mota-engil.eu10.hcs.cloud.sap/sap/fpa/ui/app.html#/story&/s/8C40B081F21927E3BB9BC26672C119D4/?mode=present&resourceType=STORY`,
                    `https://mota-engil.eu10.hcs.cloud.sap/sap/fpa/ui/app.html#/story&/s/5440B081F2189B829BE0FBA963F5E850/?mode=present&resourceType=STORY`,
                    `https://mota-engil.eu10.hcs.cloud.sap/sap/fpa/ui/app.html#/story&/s/EC40B081F2185C0B781D2B8299BA4766/?mode=present&resourceType=STORY`,
                    `https://mota-engil.eu10.hcs.cloud.sap/sap/fpa/ui/app.html#/story&/s/2C38B081F21FBCF68BE39BFA5AE2B116/?mode=present&resourceType=STORY`,
                    `https://mota-engil.eu10.hcs.cloud.sap/sap/fpa/ui/app.html#/story&/s/CC38B081F21F66DB26C644E78CF45CB0/?mode=present&resourceType=STORY`],
                    [`Holding`, 
                    `https://mota-engil.eu10.hcs.cloud.sap/sap/fpa/ui/app.html#/story&/s/94C9A8871692E203BB6790064E7F2145/?mode=present&resourceType=STORY`,
                    `https://mota-engil.eu10.hcs.cloud.sap/sap/fpa/ui/app.html#/story&/s/94C9A8871692E203BB6790064E7F2145/?mode=present&resourceType=STORY`,
                    `https://mota-engil.eu10.hcs.cloud.sap/sap/fpa/ui/app.html#/story&/s/94C9A8871692E203BB6790064E7F2145/?mode=present&resourceType=STORY`,
                    `https://mota-engil.eu10.hcs.cloud.sap/sap/fpa/ui/app.html#/story&/s/94C9A8871692E203BB6790064E7F2145/?mode=present&resourceType=STORY`,
                    `https://mota-engil.eu10.hcs.cloud.sap/sap/fpa/ui/app.html#/story&/s/94C9A8871692E203BB6790064E7F2145/?mode=present&resourceType=STORY`,
                    `https://mota-engil.eu10.hcs.cloud.sap/sap/fpa/ui/app.html#/story&/s/94C9A8871692E203BB6790064E7F2145/?mode=present&resourceType=STORY`,
                    `https://mota-engil.eu10.hcs.cloud.sap/sap/fpa/ui/app.html#/story&/s/94C9A8871692E203BB6790064E7F2145/?mode=present&resourceType=STORY`]
                ]
                let arrOptionsLinksSecondMenu = [
                    [`Desvio de Custos de Capital`,
                    `https://mota-engil.eu10.hcs.cloud.sap/sap/fpa/ui/app.html#/story&/s/6BF01B017EA77A5907C54C3724F85DDB/?mode=present&resourceType=STORY`],
                    [`Desvio de Preço`,
                    `https://mota-engil.eu10.hcs.cloud.sap/sap/fpa/ui/app.html#/story&/s/30986081F21AA6B286003913CC380920/?mode=present&resourceType=STORY`,
                    `https://mota-engil.eu10.hcs.cloud.sap/sap/fpa/ui/app.html#/story&/s/30986081F21AA6B286003913CC380920/?mode=present&resourceType=STORY`],
                    [`Indutores`,
                    `https://mota-engil.eu10.hcs.cloud.sap/sap/fpa/ui/app.html#/story&/s/C10B881F21AF9D510291F211635CA4E/?mode=present&resourceType=STORY`,
                    `https://mota-engil.eu10.hcs.cloud.sap/sap/fpa/ui/app.html#/story&/s/C10B881F21AF9D510291F211635CA4E/?mode=present&resourceType=STORY`],
                    [`Opex`,
                    `https://mota-engil.eu10.hcs.cloud.sap/sap/fpa/ui/app.html#/story&/s/7298A881F21E62F15EFFFF55A1F8B316/?mode=present&resourceType=STORY`,
                    `https://mota-engil.eu10.hcs.cloud.sap/sap/fpa/ui/app.html#/story&/s/7298A881F21E62F15EFFFF55A1F8B316/?mode=present&resourceType=STORY`],
                    [`Atividades Complementares`,
                    `https://mota-engil.eu10.hcs.cloud.sap/sap/fpa/ui/app.html#/story&/s/9C18B881F21EF85E42CF99A8E89ABF2B/?mode=present&resourceType=STORY`]
                ]

                let hasFlipAnimationFirstMenu = [
                    [`Informação Geral`, false],
                    [`Volume de negócios`, false],
                    [`Clientes`, false],
                    [`Fornecedores`, false], 
                    [`Investimentos`, false],
                    [`Endividamento`, false],
                    [`OPEX`, false], 
                    [`Informações Agregadas`, true], 
                    [`Holding`, true] 
                ]

                let hasFlipAnimationSecondMenu = [
                    [`Desvio de Custos de Capital`, false],
                    [`Desvio de Preço`, false],
                    [`Indutores`, false],
                    [`Opex`, false],
                    [`Atividades Complementares`, false]
                ]

                let tempText = ``
                let totalText = ``
                let cont = 0

                for (let i = 0; i < arrMenuOptions.length; i++) {
                    cont = cont + 1
                    tempText = tempText + ` 
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
                tempText = `
                    <div class='card areaOption btnSecondMenuArea'>
                        <div class='optionCircle btnSecondMenu'>
                            <img src="` + arrMenuOptions[0][1] + `" alt="imagem ` + arrMenuOptions[0][0] + `">
                            <div class='areaText'> 
                                <h1>Contas Reguladas</h1> 
                            </div>
                        </div>
                    </div>
                `
                totalText = totalText + tempText
                tempText = ``

                for (let i = 0; i < arrMenuOptionsSecondMenu.length; i++) {
                    tempText = ` 
                        <div class='card areaOption secondMenuArea'>
                            <div class='optionCircle front'>
                                <img src="` + arrMenuOptionsSecondMenu[i][1] + `" alt="imagem ` + arrMenuOptionsSecondMenu[i][0] + `">
                                <div class='areaText'> 
                                    <h1>` + arrMenuOptionsSecondMenu[i][0] + `</h1> 
                                </div>
                            </div>
                            <div class="optionCircle2 back">
                                <img class="optionShownImg" src="` + arrMenuOptionsSecondMenu[i][1] + `" alt="imagem ` + arrMenuOptionsSecondMenu[i][0] + `">
                                <div class="areaTextShown">
                                    <h1>` + arrMenuOptionsSecondMenu[i][0] + `</h1>
                    `
                    for (let u = 1; u < arrOptionsListSecondMenu[i].length; u++) {
                        tempText = tempText + `
                        <a target="_blank"  href="` + arrOptionsLinksSecondMenu[i][u] + `"> 
                                <p>` + arrOptionsListSecondMenu[i][u] + `</p>
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
                tempText = `
                    <div class='card areaOption btnFirstMenuArea'>
                        <div class='optionCircle btnFirstMenu'>
                            <img src="` + arrMenuOptions[0][1] + `" alt="imagem ` + arrMenuOptions[0][0] + `">
                            <div class='areaText'> 
                                <h1>Reporte de Gestão</h1> 
                            </div>
                        </div>
                    </div>
                `
                
                totalText = totalText + tempText
                tempText = ``

                root.innerHTML = totalText
                totalText = ``
                var optionSelected = ``
                var optionsShown = []
                events(optionSelected, this, arrOptionsList, arrOptionsLinks, arrMenuOptions, optionsShown, arrOptionsLinksSecondMenu, hasFlipAnimationFirstMenu, hasFlipAnimationSecondMenu)
                window.addEventListener(`resize`, () => {
                    if (window.innerWidth >= 1288){
                        this._shadowRoot.getElementById(`root`).style.gridTemplateColumns = "231px 231px 231px 231px 231px"
                    }
                    if(window.innerWidth < 1288) {
                        this._shadowRoot.getElementById(`root`).style.gridTemplateColumns = "231px 231px 231px 231px"
                    }
                    if (window.innerWidth < 1048) {
                        // apply styles for small screens
                        this._shadowRoot.getElementById(`root`).style.gridTemplateColumns = "231px 231px 231px"
                    } 
                    if (window.innerWidth < 843) {
                        // apply styles for small screens
                        this._shadowRoot.getElementById(`root`).style.gridTemplateColumns = "231px 231px"         
                    } 
                })
            // }
        }
        
        //When the custom widget is removed from the canvas or the analytic application is closed
        onCustomWidgetDestroy(){
        }

        //

    };
    customElements.define('com-sap-sample-homepage', HomePage);
})();

function events(optionSelected, that, arrOptionsList, arrOptionsLinks, arrMenuOptions, optionsShown, arrOptionsLinksSecondMenu, hasFlipAnimationFirstMenu, hasFlipAnimationSecondMenu) {
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
            console.log(i)
            if (_that._shadowRoot.querySelectorAll(`.btnSecondMenuArea`)[0].style.display === `none`) {
                console.log(`Escolhi uma opção do segundo menu!`)

                for (let n = 0; n < _that._shadowRoot.querySelectorAll(`.secondMenuArea`).length; n++) {
                    if (hasFlipAnimationSecondMenu[n][1] === false) {
                        _that._shadowRoot.querySelectorAll(`.secondMenuArea`)[n].addEventListener(`click`, ()=>{
                            window.open(arrOptionsLinksSecondMenu[n][1])
                        })
                    } else if (hasFlipAnimationSecondMenu[n][1] === true) {
                        // console.log(`VALIDADO SECOND MENU:` + hasFlipAnimationSecondMenu[n][0] + ` `+ hasFlipAnimationSecondMenu[n][1])
                        if (optionSelected.length !== 0){
                            _that._shadowRoot.querySelectorAll(`.front`)[optionSelected - 1].style.left = "0%"
                            _that._shadowRoot.querySelectorAll(`.back`)[optionSelected - 1].style.left = "100%"
                        }
                        _that._shadowRoot.querySelectorAll(`.front`)[i - 1].style.left = "100%"
                        _that._shadowRoot.querySelectorAll(`.back`)[i - 1].style.left = "0%"
                    }
                }
                
                optionSelected = i;
            } else{
                console.log(`Escolhi uma opção do primeiro menu!`)
                // for (let j = 0; j < hasFlipAnimationFirstMenu.length; j++) {
                    if (hasFlipAnimationFirstMenu[i][1] === false) {
                        window.open(arrOptionsLinks[i][1])
                        console.log(hasFlipAnimationFirstMenu[i][1])
                    } else if (hasFlipAnimationFirstMenu[i][1] === true){
                        console.log(`VALIDADO:` + hasFlipAnimationFirstMenu[i][0] +` `+ hasFlipAnimationFirstMenu[i][1])
                        if (optionSelected.length !== 0){
                            _that._shadowRoot.querySelectorAll(`.front`)[optionSelected].style.left = "0%"
                            _that._shadowRoot.querySelectorAll(`.back`)[optionSelected].style.left = "100%"
                        }
                        _that._shadowRoot.querySelectorAll(`.front`)[i].style.left = "100%"
                        _that._shadowRoot.querySelectorAll(`.back`)[i].style.left = "0%"
                    }
                // }
                optionSelected = i;
            }
        })
    }

    //Btn que abre o segundo menu
    _that._shadowRoot.querySelectorAll(`.btnSecondMenu`)[0].addEventListener(`click`, ()=>{
        for (let o = 0; o < buttons.length; o++) {
            _that._shadowRoot.querySelectorAll(`.front`)[o].style.left = "100%"
            _that._shadowRoot.querySelectorAll(`.btnSecondMenu`)[0].style.left = "110%"

            for (let x = 0; x < _that._shadowRoot.querySelectorAll(`.secondMenuArea`).length; x++) {
                _that._shadowRoot.querySelectorAll(`.secondMenuArea`)[x].getElementsByClassName(`front`)[0].style.left = "0%"
                // _that._shadowRoot.querySelectorAll(`.secondMenuArea`)[x].getElementsByClassName(`back`)[0].style.left = "100%"
                _that._shadowRoot.querySelectorAll(`.secondMenuArea`)[x].style.display = "flex"  //new

                for (let v = 0; v < arrMenuOptions.length; v++) {
                    let count = v + 1
                    _that._shadowRoot.querySelectorAll(`.areaOption`+ count)[0].getElementsByClassName(`front`)[0].style.left = "100%"
                    _that._shadowRoot.querySelectorAll(`.areaOption`+ count)[0].style.display = `none`
                }
                _that._shadowRoot.querySelectorAll(`.btnSecondMenuArea`)[0].style.display = `none`
                _that._shadowRoot.querySelectorAll(`.btnFirstMenu`)[0].style.display = "flex" //new
            }
            
        }
    })

    //Btn que abre o primeiro menu 
    _that._shadowRoot.querySelectorAll(`.btnFirstMenu`)[0].addEventListener(`click`, ()=>{
        for (let o = 0; o < buttons.length; o++) {
            
            for (let x = 0; x < _that._shadowRoot.querySelectorAll(`.secondMenuArea`).length; x++) {
                _that._shadowRoot.querySelectorAll(`.secondMenuArea`)[x].getElementsByClassName(`front`)[0].style.left = "100%"
                // _that._shadowRoot.querySelectorAll(`.secondMenuArea`)[x].getElementsByClassName(`back`)[0].style.left = "100%"
                _that._shadowRoot.querySelectorAll(`.secondMenuArea`)[x].style.display = "none"  //new

                for (let v = 0; v < arrMenuOptions.length; v++) {
                    let count = v + 1
                    _that._shadowRoot.querySelectorAll(`.areaOption`+ count)[0].getElementsByClassName(`front`)[0].style.left = "0%"
                    _that._shadowRoot.querySelectorAll(`.areaOption`+ count)[0].style.display = `grid`
                }
                _that._shadowRoot.querySelectorAll(`.btnSecondMenuArea`)[0].style.display = `grid`
            }

            _that._shadowRoot.querySelectorAll(`.front`)[o].style.left = "0%"
            _that._shadowRoot.querySelectorAll(`.btnSecondMenu`)[0].style.left = "0%"
            _that._shadowRoot.querySelectorAll(`.btnFirstMenu`)[0].style.display = "none" //new
        }
    })
}

function setBreakpoint(that) {
    let _that = that
    if (window.innerWidth < 1366) {
        // apply styles for small screens
        _that._shadowRoot.getElementById(`root`).style.gridTemplateColumns = "231px 231px"
        console.log(`menos de 1366px`)
    } else {
        console.log(`mais de 1366px`)
        _that._shadowRoot.getElementById(`root`).style.gridTemplateColumns = "231px 231px 231px 231px"
    }
  }
