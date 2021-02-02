var allKeys = document.querySelectorAll('.keys');
const display = document.getElementById('display');
// do I need this line below?
var inputNo = '';

allKeys.forEach(allKeys => allKeys.addEventListener('click', function(e){
  const action = e.target.dataset.action
  if (!action && display.innerHTML === 0 || !action && display.innerHTML === ''){
    display.innerHTML= allKeys.innerHTML;
  }
    else if (!action) {
 const keyContent = e.target.textContent
 const displayedNum = display.textContent
 display.textContent = displayedNum + keyContent
    }
    else switch(action){
      case 'back':
      console.log('go back');
      //remove str.sybstring(0, str.length -1);
        break;
      case 'clear':
      display.textContent = "";
      let a="";
      let b="";
        break;
      case 'divide':
        break;
      case 'multiply':
        break;
      case 'minus':
        break;
      case 'plus':
        break;
      case 'decimal':
        break;
      case 'calculate':
      // operate (a, operator, b)
        break;
      default: // Return with same tex content
        break;
    }
}));
// if pressed key = operator then displayedNum = a and pressed key = operator
// and display.textContent= displayedNum + " " + keyContent + " "
// if pressed key is =(/ another operator) then displayedNum = b return a, b and operator and run operate()
// need to get the display.textContent to equal a
// get the action to equal the operator
// the display.textcontent after operator to equal b
//let a = 0;
//  let b = 1;
//  for (let i = 1; i < count; i++) {
//    const temp = b;
//    b = a + b;
//    a = temp;
//  }
//  return b;

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
