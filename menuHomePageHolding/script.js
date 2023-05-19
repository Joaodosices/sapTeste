let root = document.getElementById("root")
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
document.getElementById(`areaSecondMenu`).style.display = "none"

var optionSelected = ``
events(optionSelected)

function events(optionSelected) {
    let buttons = document.getElementsByClassName(`optionCircle`)
    console.log(document.querySelectorAll(`.optionCircle`))
    console.log(document.getElementsByClassName(`optionCircle`))
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
    //second menu side menu buttons
    document.getElementsByClassName("option1Circle")[0].addEventListener("click", ()=>{
        let option = document.getElementById("option1CircleTitle").textContent
        for (let i = 0; i < buttons.length; i++) {
            if (option === arrMenuOptions[i]) {
                populateSecondMenu(option, i)
            }
        }
    })
    document.getElementsByClassName("option2Circle")[0].addEventListener("click", ()=>{
        let option = document.getElementById("option2CircleTitle").textContent
        for (let i = 0; i < buttons.length; i++) {
            if (option === arrMenuOptions[i]) {
                populateSecondMenu(option, i)
            }
        }
    })
    document.getElementsByClassName("option3Circle")[0].addEventListener("click", ()=>{
        let option = document.getElementById("option3CircleTitle").textContent
        for (let i = 0; i < buttons.length; i++) {
            if (option === arrMenuOptions[i]) {
                populateSecondMenu(option, i)
            }
        }
    })

}
function populateSecondMenu(optionSelected, id) {
    document.getElementById("mainCircleTitle").textContent = optionSelected
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
    document.getElementById("mainCircleOptionsArea").innerHTML = optionsText
 

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