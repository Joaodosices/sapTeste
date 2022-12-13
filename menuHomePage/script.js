let root = document.getElementById("root")
let arrMenuOptions =[`Informação Geral`, `Volume de negócios`, `Clientes`, `Fornecedores`]

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

root.innerHTML = totalText
totalText = ``

events()

function events() {
    let buttons = document.getElementsByClassName(`optionCircle`)

    for (let i = 0; i < buttons.length; i++) {
        const element = buttons[i];
        element.addEventListener(`click`, ()=>{
            root.innerHTML = ` `
        })
    }
}