var allKeys = document.querySelectorAll('.keys');
const display = document.getElementById('display');
let a="";
let b="";

allKeys.forEach(allKeys => allKeys.addEventListener('click', function(e){
  const action = e.target.dataset.action
  const keyContent = e.target.textContent
  if (!action && display.innerHTML === 0 || !action && display.innerHTML === ''){
    display.innerHTML= allKeys.innerHTML;
  }
    else if (!action) {
 const displayedNum = display.textContent
 display.textContent = displayedNum + keyContent
    }
    else switch(action){
      case 'back':
      console.log('go back');
      var str = display.textContent
      var newStr = str.slice(0, -1)
      display.textContent = newStr;
      console.log(display.textContent);
      console.log(a);
        break;
      case 'clear':
      display.textContent = "";
       a="";
       b="";
        break;
      case 'divide':
       if ((display.textContent.indexOf('+')> -1)||(display.textContent.indexOf('/^[0-9]/-')> -1)
       || (display.textContent.indexOf('/')> -1) || (display.textContent.indexOf('*')> -1)) {
         console.log('already');
         b = display.textContent.split(/[\/\*\+\-]/).pop() + keyContent;
         console.log(b);
         operate(a, operator, b);
         break;
      }
      else if (display.textContent === ""|| display.textContent === "0"){
          return;
        }
      else {
           a = display.textContent;
           operator = 'divide'
          display.textContent = display.textContent + keyContent;
          console.log(a);
          console.log(operator);
        break;
      }

      // when divide is pressed check if an opertor has already been pressed if yes
      // store number after previous operator as b and evaluate previous
      // calculation. Store new value as a. If no, store displayed num as a and operator as divide
        break;
      case 'multiply':
          a = display.textContent;
          operator = 'multiply'
          display.textContent = display.textContent + keyContent;
          console.log(a);
          console.log(operator);
        break;
      case 'minus':
          a = display.textContent;
          operator = 'multiply'
          display.textContent = display.textContent + keyContent;
          console.log(a);
          console.log(operator);
        break;
      case 'plus':
          a = display.textContent;
          operator = 'multiply'
          display.textContent = display.textContent + keyContent;
          console.log(a);
          console.log(operator);
        break;
      case 'decimal':
        break;
      case 'calculate':
      // operate (a, operator, b)
      // if 'divide by 0' return: "surely you know this one? Hint it's infinity"
      // display.textContent = new value
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
  // remove any newOperators
  b = // b - operator
  a = a + b;
  display.textContent = a + operator
  // return newOperator
}
function subtract (a, b){
  return a - b;
}
function multiply (a,b){
  return a * b;
}
function divide (a, b){
  // if b contains an operator sice operator then update b
  return a/b; // plus removed operator
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


// Get font digital-7 to apear when the numbers are typed in. While display number is
// equal to 07734, 14, 5508.14, 5318008 rotate the display div and maybe round and
// unround the css edges
