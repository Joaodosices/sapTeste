let root = document.getElementById("root")
let arrMenuOptions =[`Informação Geral`, `Volume de negócios`, `Clientes`, `Fornecedores`]
let arrOptionsList =[[`Informação Geral`][`Página Inicial`,`Detalhado`],[`Volume de negócios`][`Overview`,`Global`,`Detalhado`,`Clientes`],[`Clientes`][`Global`,`Detalhado`],[`Fornecedores`][`Global`,`Detalhado`]]
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
                <a href="">
                    <div class="option1Circle">
                        <h1 id="option1CircleTitle"></h1>
                    </div>
                </a>
            </div>
            <div id="areaOption2Circle">
                <a href="">
                    <div class="option2Circle">
                        <h1 id="option2CircleTitle"></h1>
                    </div>
                </a>
            </div>
            <div id="areaOption3Circle">
                <a href="">
                    <div class="option3Circle">
                        <h1 id="option3CircleTitle"></h1>
                    </div>
                </a>
            </div>
        </div>
    </div>
`
totalText = totalText + secondMenu
root.innerHTML = totalText
totalText = ``
document.getElementById(`areaSecondMenu`).style.display = "none"

var optionSelected = ``
events(optionSelected)

function events(optionSelected) {
    let buttons = document.getElementsByClassName(`optionCircle`)
    let buttonsArea = document.getElementsByClassName(`areaOption`)
    for (let i = 0; i < buttons.length; i++) {
        const element = buttons[i];
        element.addEventListener(`click`, ()=>{
            optionSelected = arrMenuOptions[i]
            populateSecondMenu(optionSelected, i)
            for (let j = 0; j < buttonsArea.length; j++) {
                buttonsArea[j].style.display = "none"
            }
            document.getElementById(`areaSecondMenu`).style.display = "grid"
        })
    }

    //Back button event
    document.getElementById("optionBackCircleTitle").addEventListener(`click`, ()=>{
        for (let j = 0; j < buttonsArea.length; j++) {
            buttonsArea[j].style.display = "grid"
            document.getElementById(`areaSecondMenu`).style.display = "none"
        }
    })
}
function populateSecondMenu(optionSelected, id) {
    document.getElementById("mainCircleTitle").textContent = optionSelected

    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        
    }
    document.getElementById("mainCircleOptionsArea").innerHTML = `

    `


    let ID = id + 1
    let contador = 1
    for (let i = 0; i < arrMenuOptions.length; i++) {
        const element = arrMenuOptions[i];
        if (contador < 4) {  
            if (contador !== ID){
                document.getElementById("option" + contador + "CircleTitle").textContent = element
            }else {
                i = i + 1
                document.getElementById("option" + contador + "CircleTitle").textContent = arrMenuOptions[i]
            }
            contador = contador + 1
        }
    }
}