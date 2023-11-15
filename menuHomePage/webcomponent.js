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
                    [`DR`, `https://joaodosices.github.io/sapTeste/menuHomePage/imgs/Chart.svg`],
                    [`Volume de negócios`, `https://joaodosices.github.io/sapTeste/menuHomePage/imgs/volumeNegocios.svg`],
                    [`OPEX`, `https://joaodosices.github.io/sapTeste/menuHomePage/imgs/informacaoGeral.svg`],
                    [`Clientes`, `https://joaodosices.github.io/sapTeste/menuHomePage/imgs/clientes.svg`],
                    [`Fornecedores`, `https://joaodosices.github.io/sapTeste/menuHomePage/imgs/fornecedores.svg`], 
                    [`Investimentos`, `https://joaodosices.github.io/sapTeste/menuHomePage/imgs/investimentos.svg`],
                    [`Endividamento`, `https://joaodosices.github.io/sapTeste/menuHomePage/imgs/endividamento.svg`],
                    [`Fluxo de caixa e Orçamento de tesouraria`, `https://joaodosices.github.io/sapTeste/menuHomePage/imgs/Chart.svg`]
                ]
                
                let arrMenuOptionsSecondMenu =[
                    [`Ajustamento tarifário`, `https://joaodosices.github.io/sapTeste/menuHomePage/imgs/tableIcon.svg`],
                    [`Desvio de Custos de Capital`, `https://joaodosices.github.io/sapTeste/menuHomePage/imgs/volumeNegocios.svg`],
                    [`Desvio de Preço`, `https://joaodosices.github.io/sapTeste/menuHomePage/imgs/volumeNegocios.svg`],
                    [`Indutores`, `https://joaodosices.github.io/sapTeste/menuHomePage/imgs/fornecedores.svg`],
                    [`Opex`, `https://joaodosices.github.io/sapTeste/menuHomePage/imgs/informacaoGeral.svg`],
                    [`Atividades Complementares`, `https://joaodosices.github.io/sapTeste/menuHomePage/imgs/tableIcon.svg`],
                    [`Desvio incremental`, `https://joaodosices.github.io/sapTeste/menuHomePage/imgs/Chart.svg`],
                    [`Desvio de quantidade`, `https://joaodosices.github.io/sapTeste/menuHomePage/imgs/informacaoGeral.svg`]
                ]
                
                let arrOptionsList =[
                    [`Informação Geral`,`Informação Geral`],
                    [`DR`,`DR`],
                    [`Volume de negócios`, `Overview`,`Global`,`Detalhado`,`Clientes`],
                    [`OPEX`,`Global`,`Detalhado`],
                    [`Clientes`, `Global`,`Detalhado`],
                    [`Fornecedores`,`Global`,`Detalhado`],
                    [`Investimentos`,`Global`,`Detalhado`],
                    [`Endividamento`,`Global`,`Detalhado`],
                    [`Fluxo de caixa e Orçamento de tesouraria`, `Fluxo de caixa e Orçamento de tesouraria`],
                ]

                let arrOptionsListSecondMenu =[
                    [`Ajustamento tarifário`,`Ajustamento tarifário`],
                    [`Desvio de Custos de Capital`,`Desvio de Custos de Capital`],
                    [`Desvio de Preço`,`Global`,`Detalhado`],
                    [`Indutores`,`Global`,`Detalhado`],
                    [`Opex`,`Global`,`Detalhado`],
                    [`Atividades Complementares`,`Atividades Complementares`],
                    [`Desvio incremental`,`Desvio incremental`],
                    [`Desvio de quantidade`, `Desvio de quantidade`]
                ]

                let arrOptionsLinks = [
                    [`Informação Geral`,
                    `https://mota-engil.eu10.hcs.cloud.sap/sap/fpa/ui/tenants/67c2a/app.html#/story&/s/E7A18D83392623805123F0BF4521A0D8/?mode=present&resourceType=STORY&resourceName=Informa%25C3%25A7%25C3%25A3oGeral`],
                    [`DR`,
                    `https://mota-engil.eu10.hcs.cloud.sap/sap/fpa/ui/app.html#/story&/s/8D207387598A9F4FFA6097624BB6BE85/?resourceName=Demonstra%25C3%25A7%25C3%25A3o%2520de%2520Resultados&resourceType=STORY&mode=view`],
                    [`Volume de negócios`, 
                    `https://mota-engil.eu10.hcs.cloud.sap/sap/fpa/ui/tenants/67c2a/app.html#/story&/s/3CF0BB87598D04BF8B0DF06F8A909556/?mode=present&resourceType=STORY&resourceName=Volume%2520de%2520Neg%25C3%25B3cio`,
                    `https://mota-engil.eu10.hcs.cloud.sap/sap/fpa/ui/tenants/67c2a/app.html#/story&/s/3CF0BB87598D04BF8B0DF06F8A909556/?mode=present&resourceType=STORY&resourceName=Volume%2520de%2520Neg%25C3%25B3cio`,
                    `https://mota-engil.eu10.hcs.cloud.sap/sap/fpa/ui/tenants/67c2a/app.html#/story&/s/3CF0BB87598D04BF8B0DF06F8A909556/?mode=present&resourceType=STORY&resourceName=Volume%2520de%2520Neg%25C3%25B3cio`,
                    `https://mota-engil.eu10.hcs.cloud.sap/sap/fpa/ui/tenants/67c2a/app.html#/story&/s/3CF0BB87598D04BF8B0DF06F8A909556/?mode=present&resourceType=STORY&resourceName=Volume%2520de%2520Neg%25C3%25B3cio`],
                    [`OPEX`,
                    `https://mota-engil.eu10.hcs.cloud.sap/sap/fpa/ui/tenants/67c2a/app.html#/story&/s/EF22D9847760919FEE5B9EFCD69B487E/?mode=present&resourceType=STORY&resourceName=OPEX`,
                    `https://mota-engil.eu10.hcs.cloud.sap/sap/fpa/ui/tenants/67c2a/app.html#/story&/s/EF22D9847760919FEE5B9EFCD69B487E/?mode=present&resourceType=STORY&resourceName=OPEX`],
                    [`Clientes`, 
                    `https://mota-engil.eu10.hcs.cloud.sap/sap/fpa/ui/app.html#/story&/s/B420470372A4D1D91F933C41AC8AF884/?mode=present&resourceType=STORY`,
                    `https://mota-engil.eu10.hcs.cloud.sap/sap/fpa/ui/app.html#/story&/s/B420470372A4D1D91F933C41AC8AF884/?mode=present&resourceType=STORY`],
                    [`Fornecedores`,
                    `https://mota-engil.eu10.hcs.cloud.sap/sap/fpa/ui/app.html#/story&/s/B8608204AE00ED2C902904A49C57A33A/?mode=present&resourceType=STORY&resourceName=Fornecedores`,
                    `https://mota-engil.eu10.hcs.cloud.sap/sap/fpa/ui/app.html#/story&/s/B8608204AE00ED2C902904A49C57A33A/?mode=present&resourceType=STORY&resourceName=Fornecedores`],
                    [`Investimentos`,
                    `https://mota-engil.eu10.hcs.cloud.sap/sap/fpa/ui/app.html#/story&/s/F330CF0372A582990BEBF626D15EB38D/?mode=present&resourceType=STORY`,
                    `https://mota-engil.eu10.hcs.cloud.sap/sap/fpa/ui/app.html#/story&/s/F330CF0372A582990BEBF626D15EB38D/?mode=present&resourceType=STORY`],
                    [`Endividamento`,
                    `https://mota-engil.eu10.hcs.cloud.sap/sap/fpa/ui/app.html#/story&/s/C8103B8759884D939137163A57339DC7/?mode=present&resourceType=STORY&resourceName=Endividamento`,
                    `https://mota-engil.eu10.hcs.cloud.sap/sap/fpa/ui/app.html#/story&/s/C8103B8759884D939137163A57339DC7/?mode=present&resourceType=STORY&resourceName=Endividamento`],
                    [`Fluxo de caixa e Orçamento de tesouraria`,
                    `https://mota-engil.eu10.hcs.cloud.sap/sap/fpa/ui/app.html#/story&/s/FA588583392238BA45AB633EA90B998F/?mode=present&resourceType=STORY&resourceName=Fluxo%2520de%2520Caixa`] 
                ]
                let arrOptionsLinksSecondMenu = [
                    [`Ajustamento tarifário`,
                    `https://mota-engil.eu10.hcs.cloud.sap/sap/fpa/ui/tenants/67c2a/app.html#/story&/s/C930DB875989E27A4C56F5C1D7EA6A94/?mode=present&resourceType=STORY&resourceName=Ajustamento%2520Tarif%25C3%25A1rio`],
                    [`Desvio de Custos de Capital`,
                    `https://mota-engil.eu10.hcs.cloud.sap/sap/fpa/ui/tenants/67c2a/app.html#/story&/s/CF582280B38E7E64EF71F67D643A5BB1/?mode=present&resourceType=STORY&resourceName=Desvio%2520de%2520Custos%2520de%2520Capital`],
                    [`Desvio de Preço`,
                    `https://mota-engil.eu10.hcs.cloud.sap/sap/fpa/ui/tenants/67c2a/app.html#/story&/s/8CA0CB87598E3024403545945FDBFBB7/?mode=present&resourceType=STORY&resourceName=Desvio%2520de%2520Pre%25C3%25A7o`,
                    `https://mota-engil.eu10.hcs.cloud.sap/sap/fpa/ui/tenants/67c2a/app.html#/story&/s/8CA0CB87598E3024403545945FDBFBB7/?mode=present&resourceType=STORY&resourceName=Desvio%2520de%2520Pre%25C3%25A7o`],
                    [`Indutores`,
                    `https://mota-engil.eu10.hcs.cloud.sap/sap/fpa/ui/tenants/67c2a/app.html#/story&/s/93C02387598B8C1274FA382712285395/?mode=present&resourceType=STORY&resourceName=Indutores`,
                    `https://mota-engil.eu10.hcs.cloud.sap/sap/fpa/ui/tenants/67c2a/app.html#/story&/s/93C02387598B8C1274FA382712285395/?mode=present&resourceType=STORY&resourceName=Indutores`],
                    [`Opex`,
                    `https://mota-engil.eu10.hcs.cloud.sap/sap/fpa/ui/tenants/67c2a/app.html#/story&/s/E2503A80B38DF38D56E6F078058A3A98/?mode=present&resourceType=STORY&resourceName=Opex`,
                    `https://mota-engil.eu10.hcs.cloud.sap/sap/fpa/ui/tenants/67c2a/app.html#/story&/s/E2503A80B38DF38D56E6F078058A3A98/?mode=present&resourceType=STORY&resourceName=Opex`],
                    [`Atividades Complementares`,
                    `https://mota-engil.eu10.hcs.cloud.sap/sap/fpa/ui/tenants/67c2a/app.html#/story&/s/C4F81A80B38D5B53C9BF69A9F878F2EB/?mode=present&resourceType=STORY&resourceName=Atividades%2520Complementares`],
                    [`Desvio incremental`,
                    `https://mota-engil.eu10.hcs.cloud.sap/sap/fpa/ui/tenants/67c2a/app.html#/story&/s/50101A80B38E1429BF784EF6038B178D/?mode=present&resourceType=STORY&resourceName=Desvio%2520Incremental`],
                    [`Desvio de quantidade`,
                    `https://mota-engil.eu10.hcs.cloud.sap/sap/fpa/ui/tenants/67c2a/app.html#/story&/s/44C87387598E97385D5641D8EF428198/?mode=present&resourceType=STORY&resourceName=Desvio%2520de%2520Quantidade%2520Real`]
                ]

                let hasFlipAnimationFirstMenu = [
                    [`Informação Geral`, false],
                    [`DR`, false],
                    [`Volume de negócios`, false],
                    [`OPEX`, false], 
                    [`Clientes`, false],
                    [`Fornecedores`, false], 
                    [`Investimentos`, false],
                    [`Endividamento`, false],
                    [`Fluxo de caixa e Orçamento de tesouraria`, false]
                ]

                let hasFlipAnimationSecondMenu = [
                    [`Atividades Complementares`, false],
                    [`Desvio de Custos de Capital`, false],
                    [`Desvio de Preço`, false],
                    [`Indutores`, false],
                    [`Opex`, false],
                    [`Ajustamento tarifário`, false],
                    [`Desvio incremental`, false],
                    [`Desvio de quantidade`, false]
                ]

                let hasSecondMenu = true

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

                // if (hasSecondMenu === true) {
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
                // }
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
                // if (hasSecondMenu === true) {
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
                // }

                totalText = totalText + tempText
                tempText = ``

                root.innerHTML = totalText
                totalText = ``
                var optionSelected = ``
                var optionsShown = []

                this._shadowRoot.querySelectorAll(`.btnFirstMenu`)[0].style.display = "none"
                
                events(optionSelected, this, hasSecondMenu, arrOptionsLinks, arrMenuOptions, optionsShown, arrOptionsLinksSecondMenu, hasFlipAnimationFirstMenu, hasFlipAnimationSecondMenu)
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

function events(optionSelected, that, hasSecondMenu, arrOptionsLinks, arrMenuOptions, optionsShown, arrOptionsLinksSecondMenu, hasFlipAnimationFirstMenu, hasFlipAnimationSecondMenu) {
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
    // if (hasSecondMenu === true) {
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
// }

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
