var allKeys = document.querySelectorAll('.keys');
const display = document.getElementById('display');
let a="";
let b="";

allKeys.forEach(allKeys => allKeys.addEventListener('click', function(e){
  const action = e.target.dataset.action
  const keyContent = e.target.textContent

if (!action && display.textContent === '0' || !action && display.innerHTML === ''){
          display.textContent= allKeys.textContent;
          }
else if (!action) {
          const displayedNum = display.textContent
          display.textContent = displayedNum + keyContent
          }
else switch(action){
case 'divide':
           if ((display.textContent.indexOf('+')> -1)||(display.textContent.indexOf('/^[0-9]/-')> -1)
           || (display.textContent.indexOf('/')> -1) || (display.textContent.indexOf('*')> -1)) {
             console.log('already');
             b = display.textContent.split(/[\/\*\+\-]/).pop() + keyContent;
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
          break;
          }
case 'multiply':
            if ((display.textContent.indexOf('+')> -1)||(display.textContent.indexOf('/^[0-9]/-')> -1)
            || (display.textContent.indexOf('/')> -1) || (display.textContent.indexOf('*')> -1)) {
            console.log('already');
            b = display.textContent.split(/[\/\*\+\-]/).pop() + keyContent;
            operate(a, operator, b);
              break;
              }
            else if (display.textContent === ""){
              return;
              break;
              }
            else {
              a = display.textContent;
              operator = 'multiply'
              display.textContent = display.textContent + keyContent;
                break;
                }
case 'minus':
          if ((display.textContent.indexOf('+')> -1)||(display.textContent.indexOf('/^[0-9]/-')> -1)
          || (display.textContent.indexOf('/')> -1) || (display.textContent.indexOf('*')> -1)) {
          console.log('already');
          b = display.textContent.split(/[\/\*\+\-]/).pop() + keyContent;
          operate(a, operator, b);
            break;
            }
          else if (display.textContent === ""){
            display.textContent= keyContent;
            break;
            }
          else {
            a = display.textContent;
            operator = 'minus'
            display.textContent = display.textContent + keyContent;
            break;
            }
case 'plus':
            if ((display.textContent.indexOf('+')> -1)||(display.textContent.indexOf('/^[0-9]/-')> -1)
            || (display.textContent.indexOf('/')> -1) || (display.textContent.indexOf('*')> -1)) {
            console.log('already');
            b = display.textContent.split(/[\/\*\+\-]/).pop() + keyContent;
            operate(a, operator, b);
              break;
              }
            else if (display.textContent === ""){
              return;
              break;
              }
            else {
              a = display.textContent;
              operator = 'plus'
              display.textContent = display.textContent + keyContent;
                break;
                }
case 'decimal':
            display.textContent = display.textContent + keyContent;
                  break;
case 'calculate':
            b = display.textContent.split(/[\/\*\+\-]/).pop()
            operate(a, operator, b);
                  break;
case 'back':
            console.log('go back');
            var str = display.textContent
            var newStr = str.slice(0, -1)
            display.textContent = newStr;
                  break;
case 'clear':
            display.textContent = "";
            a="";
            b="";
                  break;
default:
                  break;
}}));


// make it so if you press another operator it works
// when using a decimal get rid of the extra million 0s
// display.textContent = new value
// show value to 6 decimal places
// make sure the a value updates. I think it does already..
function add (a, b){
  // convert from string to number
  // remove any newOperators
  //b = // b - operator
  //a = a + b;
  //display.textContent = a + operator
  // return newOperator
  display.textContent = a + b; //this is currently a string...
}
function subtract (a, b){
  display.textContent = a - b;
}
function multiply (a,b){
  display.textContent = a * b;
}
function divide (a, b){
  // if b === 0 return: "surely you know this one? Hint it's infinity"
  // if b contains an operator sice operator then update b
  display.textContent = a/b; // plus removed operator
}

function operate (a, operator, b){
  console.log(a);
  console.log(operator);
  console.log(b);
  switch (operator){
    case 'plus':
      add(a,b);
      break;
    case 'minus':
      subtract(a,b);
      break;
    case 'multiply':
      multiply(a,b);
      break;
    case 'divide':
      divide(a,b);
      break;
    default:
      return a;
      break;
  }
}


// Get font digital-7 to apear when the numbers are typed in. While display number is
// equal to 07734, 14, 5508.14, 5318008 rotate the display div and maybe round and
// unround the css edges
