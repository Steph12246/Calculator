const numKeys = document.querySelectorAll('num');
  numKeys.forEach(numKey => numKey.addEventListener('click', function(){displayNum()}));
const display = document.getElementById('display');
var inputNo = '';


function add (a, b){
  return a + b;
}
function subtract (a, b){
  return a - b;
}
function multiply (a,b){
  return a * b;
}
function divide (a, b){
  return a/b;
}

function operate (a, operator, b){
  switch (operator){
    case 'add':
      add(a,b);
      break;
    case 'subtract':
      subtract(a,b);
      break;
    case 'multiply':
      multiply(a,b);
      break;
    case 'divide':
      divide(a,b);
      break;
    default:
      return ab;
      break;
  }
}

function displayNum(){
  console,log('heya');
  inputNo = numKeys.innerHTML
  display.innerHTML = inputNo
}
