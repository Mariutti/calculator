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