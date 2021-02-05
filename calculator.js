var allKeys = document.querySelectorAll('.keys');
const display = document.getElementById('display');
const roundingMessage = document.getElementById('rounding');
let a="";
let b="";
let operator="";


allKeys.forEach(allKeys => allKeys.addEventListener('click', function(e){
  const action = e.target.dataset.action
  const keyContent = e.target.textContent
  const keySet = e.target.dataset.type
if (!action && display.textContent === '0' || !action && display.textContent === ''
|| !action && display.textContent === 'NaN'|| !action && display.textContent === "It's infinite!"){
          display.textContent= allKeys.textContent;
          a="";
          b="";
          operator="";
          }
else if (!action) {
          const displayedNum = display.textContent
          display.textContent = displayedNum + keyContent
          }
else switch(action){
case 'op':
          if (display.textContent === "It's infinite!"){
            break;
          }
           if ((display.textContent.indexOf('+')> -1)||(display.textContent.indexOf('/^[0-9]/-')> -1)
           || (display.textContent.indexOf('/')> -1) || (display.textContent.indexOf('*')> -1)) {
             console.log('already');
             b = display.textContent.split(/[\/\*\+\-]/).pop();
             console.log(b);
             operate(a, operator, b);
             if (display.textContent === "It's infinite!"){
               return
             }
             else{operator = keySet;
             a = display.textContent;
             console.log(a);
             display.textContent = a + keyContent;
             break;
          }}
          else if (display.textContent === ""|| display.textContent === "0"
          || display.textContent === 'NaN'){
              return;
            }
            else if (display.textContent.slice(-1) === "."){
              a = display.textContent;
              operator= keySet;
              display.textContent = display.textContent + 0 + keyContent;
              return;}
          else {
               a = display.textContent;
               operator = keySet;
              display.textContent = display.textContent + keyContent;
          break;
          }

case 'minus':
// if there are 2 or more - in the sentence eval.
// if 2 in a row change to add
          if (display.textContent=== ""){
            display.textContent = keyContent
            break;
          }
          if (display.textContent ==="-"){
            display.textContent = "";
            break;
          }
          if (display.textContent === "It's infinite!"){
            break;
          }
          if (display.textContent === a + "-"){
            console.log('Yeah!')
            display.textContent = a + "+";
            operator = "plus";
            break;
          }
          if (display.textContent === a+ "+"){
            display.textContent = a + "-";
            operator="minus";
            break;
          }
          if ((display.textContent.indexOf('+')> -1)||(display.textContent.indexOf('/^[0-9]/-')> -1)
          || (display.textContent.indexOf('/')> -1) || (display.textContent.indexOf('*')> -1)) {
          console.log('already');
          b = display.textContent.split(/[\/\*\+\-]/).pop();
          operate(a, operator, b);
          if (display.textContent === "It's infinite!"){
            return
          }
          else{
            operator = 'minus';
          a = display.textContent;
          display.textContent = a + keyContent;
            break;
          }}
          else if (display.textContent === ""){
            display.textContent= keyContent;
            break;
            }
          else if (display.textContent === 'NaN'){
            return;
          }
          else if (display.textContent.slice(-1) === "."){
            a = display.textContent;
            operator= 'minus';
            display.textContent = display.textContent + 0 + keyContent;
            return;
          }
          else {
            a = display.textContent;
            operator = 'minus'
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
// if the last thing is an operator return;
            if (display.textContent.charAt(display.textContent.length-1)=== "-"||
             display.textContent.charAt(display.textContent.length-1)=== "+"||
             display.textContent.charAt(display.textContent.length-1)=== "/" ||
             display.textContent.charAt(display.textContent.length-1)=== "*"){
              display.textContent = a;
              operator = "";
              b =="";
              console.log(a)
              console.log(b)
              console.log(operator)
              break;
            }
            if (display.textContent.charAt(display.textContent.length-1)=== "."){
              var str =display.textContent;
              display.textContent = str.slice(0, -1);
              return;
            }
            if (display.textContent === ""|| operator === ""){
              return;
            }
            else {
            b = display.textContent.split(/[\/\*\+\-]/).pop()
            operate(a, operator, b);
            b="";
                  break;
                };
case 'back':
            roundingMessage.textContent="";
            console.log('go back');
            var str = display.textContent
            var newStr = str.slice(0, -1)
            var removed = str.charAt(str.length -1);
            console.log(removed);
            display.textContent = newStr;
            if (newStr === ""){
              a="";
              operator="";
              b="";
            }
                  break;
case 'clear':
            roundingMessage.textContent="";
            display.textContent = "";
            a="";
            b="";
            operator="";
                  break;
default:
                  break;
}}));
// add a class to equals so that if anything other then another = is pressed the div resets
// make it so if you press another operator it works
// display.textContent = new value
// remove any newOperators


function add (a, b){
  answer = +a + +b;
  roundA= Math.round((answer + Number.EPSILON)*10000)/10000;
  display.textContent = roundA;
  if (roundA !== answer){
    roundingMessage.textContent = "rounded to 4 d.p"
  }
  else {
    roundingMessage.textContent="";
}};
function subtract (a, b){
  answer = a - b;
  roundA= Math.round((answer + Number.EPSILON)*10000)/10000;
  display.textContent = roundA;
  if (roundA !== answer){
    roundingMessage.textContent = "rounded to 4 d.p"
  }
  else {
    roundingMessage.textContent="";
}};
function multiply (a,b){
  answer = a * b;
  roundA= Math.round((answer + Number.EPSILON)*10000)/10000;
  display.textContent = roundA;
  if (roundA !== answer){
    roundingMessage.textContent = "rounded to 4 d.p"
  }
  else {
    roundingMessage.textContent="";
}};
function divide (a, b){
  if (b===""){
    return;
  }
if (b == 0){
  divZero = "It's infinite!"
  display.textContent = divZero;
}
else {
  answer = a/b;
  roundA= Math.round((answer + Number.EPSILON)*10000)/10000;
  display.textContent = roundA;
  if (roundA !== answer){
    roundingMessage.textContent = "rounded to 4 d.p"
  }
  else {
    roundingMessage.textContent=""
}}};


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
//get 9x-6 to work
// and -6-3 to operate with next operator
//if an operator is pressed straight after an operator change the operator to new one
// add a % button
// add a factoral button! that calculates before pressing enter?
// after pressing equals the answer should pop up and then clear the screen once another number is pressed
// get keyboard shortcut to work
// Get font digital-7 to apear when the numbers are typed in. While display number is
// equal to 07734, 14, 5508.14, 5318008 rotate the display div and maybe round and
// unround the css edges
