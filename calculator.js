var allKeys = document.querySelectorAll('.keys');
const display = document.getElementById('display');
let a="";
let b="";
let operator="";


allKeys.forEach(allKeys => allKeys.addEventListener('click', function(e){
  const action = e.target.dataset.action
  const keyContent = e.target.textContent

if (!action && display.textContent === '0' || !action && display.textContent === ''
|| !action && display.textContent === 'NaN'){
          display.textContent= allKeys.textContent;
          }
else if (!action) {
          const displayedNum = display.textContent
          display.textContent = displayedNum + keyContent
          }
else switch(action){
case 'divide':
          if (display.textContent.slice(-1) === "."){
            a = display.textContent;
            operator= 'divide';
            display.textContent = display.textContent + 0 + keyContent;
            return;
          }
           if ((display.textContent.indexOf('+')> -1)||(display.textContent.indexOf('/^[0-9]/-')> -1)
           || (display.textContent.indexOf('/')> -1) || (display.textContent.indexOf('*')> -1)) {
             console.log('already');
             b = display.textContent.split(/[\/\*\+\-]/).pop();
             operate(a, operator, b);
             operator = 'divide';
             a = display.textContent;
             console.log(a);
             display.textContent = a + keyContent;
             break;
          }
          else if (display.textContent === ""|| display.textContent === "0"
          || display.textContent === 'NaN'){
              return;
            }
          else {
               a = display.textContent;
               operator = 'divide'
              display.textContent = display.textContent + keyContent;
          break;
          }

case 'multiply':
            if (display.textContent.slice(-1) === "."){
              a = display.textContent;
              operator= 'multiply';
              display.textContent = display.textContent + 0 + keyContent;
              return;
            }
            if ((display.textContent.indexOf('+')> -1)||(display.textContent.indexOf('/^[0-9]/-')> -1)
            || (display.textContent.indexOf('/')> -1) || (display.textContent.indexOf('*')> -1)) {
            b = display.textContent.split(/[\/\*\+\-]/).pop();
            operate(a, operator, b);
            operator = 'multiply';
            a = display.textContent;
            display.textContent = a + keyContent;
              break;
              }
            else if (display.textContent === "" || display.textContent === 'NaN'){
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
// if there are 2 or more - in the sentence eval.
// if 2 in a row change to add
          if (display.textContent.slice(-1) === "."){
            a = display.textContent;
            operator= 'minus';
            display.textContent = display.textContent + 0 + keyContent;
            return;
          }
          if ((display.textContent.indexOf('+')> -1)||(display.textContent.indexOf('/^[0-9]/-')> -1)
          || (display.textContent.indexOf('/')> -1) || (display.textContent.indexOf('*')> -1)) {
          console.log('already');
          b = display.textContent.split(/[\/\*\+\-]/).pop();
          operate(a, operator, b);
          operator = 'divide';
          a = display.textContent;
          display.textContent = a + keyContent;
            break;
            }
          else if (display.textContent === ""){
            display.textContent= keyContent;
            break;
            }
          else if (display.textContent === 'NaN'){
            return;
          }
          else {
            a = display.textContent;
            operator = 'minus'
            display.textContent = display.textContent + keyContent;
            break;
            }
case 'plus':
            if (display.textContent.slice(-1) === "."){
              a = display.textContent;
              operator= 'plus';
              display.textContent = display.textContent + 0 + keyContent;
              return;
            }
            if ((display.textContent.indexOf('+')> -1)||(display.textContent.indexOf('/^[0-9]/-')> -1)
            || (display.textContent.indexOf('/')> -1) || (display.textContent.indexOf('*')> -1)) {
            console.log('already');
            b = display.textContent.split(/[\/\*\+\-]/).pop();
            operate(a, operator, b);
            operator = 'plus';
            a = display.textContent;
            display.textContent = a + keyContent;
              break;
              }
            else if (display.textContent === "" || display.textContent === 'NaN'){
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
            let currentNum = display.textContent.split(/[\/\*\+\-]/).pop();
            let previousChar = display.textContent.substring(display.textContent.length-1);
            if (currentNum.indexOf('.')> -1){
              return;
            }
            else if (a === "" && display.textContent === "" ){
              display.textContent = 0 + keyContent;
              return;
            }
            else if (previousChar==="*" || previousChar==="/" || previousChar==="+"
            || previousChar==="-" ){
              display.textContent = display.textContent + 0 +keyContent;
              return;
            }
            display.textContent = display.textContent + keyContent;
                  break;
case 'calculate':
            if (display.textContent === ""){
              return;
            }
            if (b === ""){
              b = display.textContent.split(/[\/\*\+\-]/).pop()
            }
            else {
              b = b;
            }
            if (operator === ""){
              return;
            }
            else {
            operate(a, operator, b);
            a = display.textContent;
            
            console.log(a);
            console.log(operator);
            console.log(b);
                  break;
                };
case 'back':
            console.log('go back');
            var str = display.textContent
            var newStr = str.slice(0, -1)
            display.textContent = newStr;
            if (newStr === ""){
              a="";
              operator="";
              b="";
            }
                  break;
case 'clear':
            display.textContent = "";
            a="";
            b="";
            operator="";
                  break;
default:
                  break;
}}));

// if display is NaN clear screen before being able to press another button
// make it so if you press another operator it works
// when using a decimal get rid of the extra million 0s
// display.textContent = new value
// show value to 6 decimal places
// make sure the a value updates. I think it does already..
// convert from string to number
// remove any newOperators
//b = // b - operator
//a = a + b;
//display.textContent = a + operator
// return newOperator


function add (a, b){
  display.textContent = +a + +b;
}
function subtract (a, b){
  display.textContent = a - b;
}
function multiply (a,b){
  display.textContent = a * b;
}
function divide (a, b){
if (b === '0'){
  console.log('hmm');
  divZero = "It's infinite!"
  display.textContent = divZero;
}
else {
  display.textContent= a/b;
}}


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
    console.log('here');
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
// after pressing equals the answer should pop up and then clear the screen once another number is pressed
// get keyboard shortcut to work
// Get font digital-7 to apear when the numbers are typed in. While display number is
// equal to 07734, 14, 5508.14, 5318008 rotate the display div and maybe round and
// unround the css edges
