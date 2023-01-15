function add(nOne, nTwo){
    return nOne + nTwo;
}

function subtract(nOne, nTwo){
    return nOne - nTwo;
}

function multiply(nOne, nTwo){
    return nOne * nTwo;
}

function divide(nOne, nTwo){
    return nOne / nTwo;
}

function operate(operator, nOne, nTwo){
    switch(operator){
        case add:
        return add(nOne, nTwo);
        case subtract:
        return subtract(nOne, nTwo)
        case multiply:
        return multiply(nOne, nTwo)
        case divide:
        return divide(nOne, nTwo)
    }
}

const mainNumber = document.querySelector('.main-number')

const supNumber = document.querySelector('.superiorNumber')

const operatorScreen = document.querySelector('.operatorScr')

const btnNumberList = Array.from(document.querySelectorAll('.numberBtn'))

const symbolShower = document.querySelector('.operatorScr');

btnNumberList.forEach(btn => {
    btn.addEventListener('click', btnNumberFunction)
});

const btnSpecialFuncList = Array.from(document.querySelectorAll('.specialBtn'))

btnSpecialFuncList.forEach(btn => {
    btn.addEventListener('click', btnSpecialFunc)
});


function btnNumberFunction(e){
    let number = e.target.textContent
    numbScreen = mainNumber.textContent
    
    if(mainNumber.textContent == 0){
        mainNumber.textContent = number
    }else{
        if(mainNumber.textContent.length < 11){
            mainNumber.textContent += number
        } else {
            if(mainNumber.textContent.length === 11){
                const list = Array.from(mainNumber.textContent);
                list.shift();
                mainNumber.textContent = list.join('')
            }
            mainNumber.textContent += number
        }
    }
}

const btnOperatorList = Array.from(document.querySelectorAll('.operatorBtn'))

btnOperatorList.forEach(btn => {
    btn.addEventListener('click', btnOperatorFunc)
});
let numSup;
let numInf;

function btnOperatorFunc(e){
    btnSymbol = e.target.textContent    
    symbolShower.textContent = btnSymbol;
    numSup = parseFloat(mainNumber.textContent)
    
}

function btnSpecialFunc(e){
    let btnSpec = e.target.textContent
    console.log(btnSpec)
    switch (btnSpec.textContent) {
        case 'CE':
            console.log('CE')
            break;
        case 'C':
            console.log('C')
            break;
        case '⌫':
            console.log('⌫')
            break;
        case '+/-':
            console.log('+/-')
            break;
        default:
            break;
    }
}