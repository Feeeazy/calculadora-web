// var numSelecionado = document.


var displayScreen = document.getElementById('displayScreen')
var screenEquation = document.getElementById('screenEquation')
var num1 = 0
var actualOperation = ''


// Sempre que um elemento for clicado
document.addEventListener('keyup',listenerKeyUp)
document.addEventListener('click', listenerClick)

function listenerClick(event) {
    // console.log(event.target.id)
    let className = event.target.className
    let id = event.target.id
    // let limit = 3

    if(getDisplayScreen().length = 0) {
        return false;
    }

    if(className == 'btnNumbers') {
        let valor = event.target.value
        setDisplayScreen(valor)
    }

    if (id == 'btnClearAll'){
        clearAllDisplays()
    }

    if (id == 'btnClearEntry'){
        clearEntryDisplayScreen()
    }

    if (className == "btnOperations") {
        let operation = event.target.id
        let operationSimbol = event.target.innerText
        console.log(operation)
        num1 = getDisplayScreen().value
        actualOperation = operation
        setScreenEquation(getDisplayScreen().value, operationSimbol)
        clearEntryDisplayScreen()
        // setOperation(operation)
    }

    if(id == 'btnEqual') {
        setOperation(actualOperation)
    }

}

function setDisplayScreen(valor) {
    if(isNaN(valor)) return false;
    console.log(`Setando display: ${valor}`)
    displayScreen.innerText += valor
}

function setScreenEquation(valor, operation) {
    screenEquation.innerText += ` ${valor} ${operation}`
}

function getScreenEquation() {
    return{
        'value': screenEquation.innerText
    }
}

function getDisplayScreen() {
    return {
        'value': displayScreen.innerText,
        'length': displayScreen.innerText.length
    }
}

function clearDisplayScreen() {
    displayScreen.innerText = ''
}

function clearEntryDisplayScreen() {
    displayScreen.innerText = ''
}

function clearAllDisplays() {
    displayScreen.innerText = ''
    screenEquation.innerText = ''
}

function listenerKeyUp(event) {
    // console.log(event.key)
    let keyNumberPress = event.key
    if(!isNaN(keyNumberPress))
        setDisplayScreen(keyNumberPress)
}

function sum(num1, num2) {
    return (+num1 + +num2)
}

function setOperation(operation){
    if(operation == "btnMore"){
        let number2 = getDisplayScreen().value
        setScreenEquation(number2, '=')
        clearEntryDisplayScreen()
        setDisplayScreen(sum(num1, number2))
    }

}

// Se o elemento pertencer à classe btnNumbers

// Atribuir ao displayScreen o valor informado

