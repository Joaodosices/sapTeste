let root = document.getElementById("root")
let arrMenuOptions =[`Informação Geral`, `Volume de negócios`, `Clientes`, `Fornecedores`]

let tempText = ``
let totalText = ``
arrMenuOptions.forEach(element => {
    tempText = `
        <div class='areaOption'>
            <div class='optionCircle'></div>
            <h1 class='lineDecoration'>-</h1>
            <h1>` + element + `</h1>
        </div>
    `
    totalText = totalText + tempText
    tempText = ``
});

root.innerHTML = totalText
totalText = ``
