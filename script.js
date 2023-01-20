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
    case '+':
      return add(nOne, nTwo);
    case '-':
      return subtract(nOne, nTwo)
    case 'x':
      return multiply(nOne, nTwo)
    case '÷':
      return divide(nOne, nTwo)
  }
}

const mainNumber = document.querySelector('.main-number')

const supNumber = document.querySelector('.superiorNumber')

const operatorScreen = document.querySelector('.operatorScr')

const btnNumberList = Array.from(document.querySelectorAll('.numberBtn'))

const symbolShower = document.querySelector('.operatorScr');

const btnSpecialFuncList = Array.from(document.querySelectorAll('.specialBtn'))
btnNumberList.forEach(btn => {
  btn.addEventListener('click', btnNumberFunction)
});


btnSpecialFuncList.forEach(btn => {
  btn.addEventListener('click', btnSpecialFunc)
});

let symbolKeeper = ''

function btnNumberFunction(e){  
  let number = e.target.textContent
  document.querySelector(".btnDot").disabled = false

  if(symbolKeeper != ''){
    supNumber.textContent = mainNumber.textContent;
    mainNumber.textContent = '0'
    symbolKeeper = ''
  }

  if(mainNumber.textContent == 0){
    mainNumber.textContent = number
  }else{
    if(mainNumber.textContent == '.'){
      mainNumber.textContent = '0.'
    }
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
 
    if(mainNumber.textContent.includes('.')){
    document.querySelector(".btnDot").disabled = true
  }
}

const btnOperatorList = Array.from(document.querySelectorAll('.operatorBtn'))

btnOperatorList.forEach(btn => {
  btn.addEventListener('click', btnOperatorFunc)
});
let btnSymbol = ""

function btnOperatorFunc(e){
  let nOne = parseFloat(supNumber.textContent);
  let nTwo = parseFloat(mainNumber.textContent);
  let result = operate(btnSymbol, nOne, nTwo)

  if(operatorScreen.textContent = ''){
    supNumber.textContent = ""
    if(supNumber.textContent != ''){    
      supNumber.textContent = `${nOne} ${btnSymbol} ${nTwo}`

      mainNumber.textContent = result;
    }
  }
  mainNumber.textContent = Array.from(mainNumber.textContent).splice(0, 12).join('')
  btnSymbol = e.target.textContent    
  symbolShower.textContent = btnSymbol;
  symbolKeeper = btnSymbol;  

  
  document.querySelector(".btnDot").disabled = false
}

function btnSpecialFunc(e){
  let btnSpec = e.target.textContent
  // console.log(btnSpec)
  switch (btnSpec) {
    case 'CE':
      mainNumber.textContent = '0'
      break;
    case 'C':
      mainNumber.textContent = '0';
      supNumber.textContent = '';
      operatorScreen.textContent = ''
      symbolKeeper = ''
      break;
    case '⌫':
      const list = Array.from(mainNumber.textContent);
      list.pop();
      mainNumber.textContent = list.join('')
      if(!mainNumber.textContent){
        mainNumber.textContent = '0'
      }
      break;
    case '+/-':
      mainNumber.textContent = mainNumber.textContent * (-1)
      break;
    case '=':
      let nOne = parseFloat(supNumber.textContent);
      let nTwo = parseFloat(mainNumber.textContent);
      let result = operate(btnSymbol, nOne, nTwo)
      if(!nOne){
        supNumber.textContent = nTwo
        mainNumber.textContent = nTwo
      }else{
      supNumber.textContent = `${nOne} ${btnSymbol} ${nTwo}`
      mainNumber.textContent = result}
      mainNumber.textContent = Array.from(mainNumber.textContent).splice(0, 12).join('')
      operatorScreen.textContent = ''
    default:
      break;
  }
}

