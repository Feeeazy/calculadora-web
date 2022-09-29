// var numSelecionado = document.

var displayScreen = document.getElementById('displayScreen')
var screenEquation = document.getElementById('screenEquation')
var num1 = 0
var number2 = 0
var actualOperation = ''
var operationSimbol = ''
var controlResult = 0
var negativeNumber = 0
var result = 0
var screenValues = 0
var screenLength = 0

// Sempre que um elemento for clicado
document.addEventListener('keyup',listenerKeyUp)
document.addEventListener('click', listenerClick)

function listenerClick(event) {
    console.log(event.target.className)
    console.log(event.target.id)
    console.log(event.target.alt)
    let className = event.target.className
    let id = event.target.id
    let alt = event.target.alt
    // let limit = 3

    if(className == 'btnOperations' &&getDisplayScreen().length == 0) {
        return false;
    }

    if(id == 'btnLess' && getDisplayScreen().length == 0){
        if(negativeNumber < 1){
            setDisplayScreen('-')
            negativeNumber = +negativeNumber + 1
            return
        }
    }

    if(className == 'btnNumbers') {
        if(controlResult == 1){
            clearAllDisplays()
        }
    }

    if(className == 'btnNumbers') {
        let valor = event.target.value
        setDisplayScreen(valor)
        // screenNumbers.push(valor)
        return
    }

    if(id == 'btnBackSpace'|| alt == 'BackSpaceIcon') {
        screenValues = getDisplayScreen().value
        screenLength = getDisplayScreen().length
        if(screenLength == 1) {
            clearDisplayScreen()
            return
        }
        screenValues = screenValues.slice(0, screenLength - 1)
        clearDisplayScreen()
        setDisplayScreen(+screenValues)
    }

    if(id == 'btnLess') {
        if(getDisplayScreen().length < 2) return
        let operation = event.target.id
        operationSimbol = event.target.innerText
        console.log(operation)
        num1 = getDisplayScreen().value
        actualOperation = operation
        setScreenEquation(getDisplayScreen().value, operationSimbol)
        clearEntryDisplayScreen()
    }

    if (id == 'btnClearAll'){
        clearAllDisplays()
        negativeNumber = 0
        return
    }

    if (id == 'btnClearEntry'){
        clearEntryDisplayScreen()
        negativeNumber = 0
        return
    }

    if (className == "btnOperations") {
        if(getDisplayScreen().value == '-') return false
        let operation = event.target.id
        operationSimbol = event.target.innerText
        console.log(operation)
        num1 = getDisplayScreen().value
        actualOperation = operation
        clearScreenEquation()
        setScreenEquation(num1, operationSimbol)
        clearEntryDisplayScreen()
        negativeNumber = 0
        controlResult = 0
    }

    if(id == 'btnEqual') {
        setOperation(actualOperation)

    }

}

function setDisplayScreen(valor) {
    if(valor == '-') return displayScreen.innerText += valor;
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
    num1 = 0
    number2 = 0
    controlResult = 0
}

function clearScreenEquation(){
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

function subtraction(num1, num2) {
    return (+num1 - +num2)
}

function multiplication(num1, num2) {
    return (+num1 * +num2)
}

function division(num1, num2) {
    return (+num1 / +num2)
}

function setOperation(operation) {
    if(operation == "btnMore") {
        let number2 = getDisplayScreen().value
        clearScreenEquation()
        setScreenEquation(num1, operationSimbol)
        setScreenEquation(number2, '=')
        clearEntryDisplayScreen()
        result = sum(Number(num1), Number(number2))
        setDisplayScreen(result)

        if(controlResult < 1) {
            num1 = number2
            controlResult = +controlResult + 1
        }
        return false
    }

    if(operation == "btnLess") {
        if(controlResult < 1) {
            number2 = getDisplayScreen().value
            controlResult = +controlResult + 1
        }
        clearScreenEquation()
        setScreenEquation(num1, operationSimbol)
        setScreenEquation(number2, '=')
        clearEntryDisplayScreen()
        result = subtraction(Number(num1), Number(number2))
        setDisplayScreen(result)

        // if(controlResult < 1) {
        //     num1 = number2
        //     controlResult = +controlResult + 1
        // }
        return false
    }

    if(operation == 'btnMultiplication') {
        let number2 = getDisplayScreen().value
        clearScreenEquation()
        setScreenEquation(num1, operationSimbol)
        setScreenEquation(number2, '=')
        clearEntryDisplayScreen()
        result = multiplication(Number(num1), Number(number2))
        setDisplayScreen(result)

        if(controlResult < 1) {
            num1 = number2
            controlResult = +controlResult + 1
        }
        return false
    }

    if(operation == 'btnDivision') {
        if(controlResult < 1) {
            number2 = getDisplayScreen().value
            controlResult = +controlResult + 1
        }
        clearScreenEquation()
        setScreenEquation(num1, operationSimbol)
        setScreenEquation(number2, '=')
        clearEntryDisplayScreen()
        result = division(Number(num1), Number(number2))
        setDisplayScreen(result)
        num1 = result
        
        return false
    }

}

// Se o elemento pertencer à classe btnNumbers

// Atribuir ao displayScreen o valor informado

