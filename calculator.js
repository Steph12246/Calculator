var allKeys = document.querySelectorAll('.keys');
const display = document.getElementById('display');
const roundingMessage = document.getElementById('rounding');
let a="";
let b="";
let operator="";
let eqs = "";
let manyM =""



window.onload = function(){
    display.textContent = " 14";
    rotate()
}
// I can console.log the one I want but can't get the action for the switch statement below.
function collectData (e){
  upSide()
  if (display.textContent === " 14"){
    display.textContent = "";
  }
let action = '';
if (e.key >= 0 && e.key <= 9) {console.log(e.key)}
if (e.key === "."){action= 'decimal'; console.log(e.key) }
if (e.key === "="){action= 'calculate'; console.log(e.key)}
if (e.key === "Backspace"){action= 'back'; console.log(e.key)}
if (e.key === "+"|| e.key === "/"|| e.key === "*"){action= 'op';
  console.log(e.key);
    data = this.id;
    display.textContent= display.textContent + e.key;}
if ( e.key === "-"){ action= 'minus'; console.log(action)}
};

allKeys.forEach(allKeys => allKeys.addEventListener('click', function(e){
  upSide();
  if (display.textContent === " 14"){
  display.textContent= "";
}
  const action = e.target.dataset.action
  const keyContent = e.target.textContent
  const keySet = e.target.dataset.type
  if (eqs === "yes" && action === "calculate"){
    a = display.textContent;
    operate(a, operator, b);
    return;
  }
  else if (eqs ==="yes" && !action){
    display.textContent = "";
    eqs = "";
    console.log('roundme');
    roundingMessage.textContent = "";
  }
  else {
    eqs = "";
  }
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
          if (display.textContent.slice(-1)=== "*" || display.textContent.slice(-1)=== "+"
           || display.textContent.slice(-1)=== "/"|| display.textContent.slice(-1)=== "-"){
             let preC = display.textContent.charAt(display.textContent.length -2);
             let before = display.textContent.slice(-1);
             if (preC ==="+" || preC ==="-" || preC ==="*"
             || preC ==="/"){
               operator = keySet;
               var strS = display.textContent
               var newStrS = strS.slice(0, -2)
               display.textContent = newStrS + keyContent;
               break;
             }
             else{
             operator = keySet;
             display.textContent = display.textContent.slice(0, -1) + keyContent;
             return;
           }}
           if ((display.textContent.indexOf('+')> -1)
           || (display.textContent.indexOf('/')> -1) || (display.textContent.indexOf('*')> -1)) {
             b = display.textContent.split(/[\/\*\+]/).pop();
             operate(a, operator, b);
             if (display.textContent === "It's infinite!"){
               return
             }
             else{operator = keySet;
             a = display.textContent;
             display.textContent = a + keyContent;
             break;
          }}
          if (display.textContent.indexOf('-')> -1){
            multipleMinus()
            if (manyM != ""){
              b= display.textContent.split('-').pop();
              operate(a, operator, b);
              manyM = "";
              display.textContent= display.textContent + keyContent;
              break;
            }
            else {
              a= display.textContent;
              operator = keySet;
              display.textContent = display.textContent + keyContent;
              break;
            }
            break;
          }
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
            display.textContent = a + "+";
            operator = "plus";
            break;
          }
          if (display.textContent === a+ "+"){
            display.textContent = a + "-";
            operator="minus";
            break;
          }
          if ((display.textContent.indexOf('+')> -1)|| (display.textContent.indexOf('/')> -1)
          || (display.textContent.indexOf('*')> -1)) {
              b = display.textContent.split(/[\/\*\+]/).pop();
              if (b===""){
                display.textContent= display.textContent+ keyContent;
                break;
              }
              if (b === "-"){
                display.textContent= display.textContent.slice(0,-1);
                break;
              }
              else {
                operate(a, operator, b);
              if (display.textContent === "It's infinite!"){
                return;
              }}}
          if (display.textContent.indexOf('-')> -1){
            multipleMinus()
            if (manyM != ""){
              b = display.textContent.split(/[-]/).pop();
            operate(a, operator, b);
            display.textContent = display.textContent + keyContent
            manyM = ""
          break;
          }
            else {
              a = display.textContent;
              operator = 'minus';
              display.textContent= display.textContent + keyContent;
            }
            break;
          }
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
            if (currentNum.indexOf('.')> -1 || display.textContent === "It's infinite!"){
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
          var prev = display.textContent.charAt(display.textContent.length-1);
            upSide();
            if(display.textContent === "0.7734" || display.textContent === "14" ||
             display.textContent ==="5508.14" || display.textContent === "5318008"
             ||  display.textContent === "58008"){
                rotate();
                eqs="yes";
                break;
              }
            if (prev === "-"|| prev === "+"|| prev === "/" || prev === "*"){
              display.textContent = a;
              operator = "";
              b =="";
              break;
            }
            if (prev === "."){
              var str =display.textContent;
              display.textContent = str.slice(0, -1);
            }
            if (display.textContent === ""|| operator === ""){
              return;
            }
            if (display.textContent.includes("+")|| display.textContent.includes("*")||
          display.textContent.includes("/")){
            b = display.textContent.split(/[\/\*\+]/).pop()
            operate(a, operator, b);
            eqs = "yes";
            return;
          }
          if (display.textContent.includes("-")){
            multipleMinus();
            var beforeMinus = +manyM-1;
            if (manyM != "" && display.textContent[beforeMinus] !== "/"
            || manyM != "" && display.textContent[beforeMinus] !== "*"){
              b = display.textContent.split(/[-]/).pop();
              operate(a, operator, b);
              eqs= "yes";
              return;
            }
              return;
            }
            if (display.textContent.indexOf('-') >0){
              return;
            }
            else {
            operate(a, operator, b);
            eqs = "yes";
            return;
          }
                  break;
case 'back':
          var str = display.textContent
          var newStr = str.slice(0, -1)
          var removed = str.charAt(str.length -1);
          roundingMessage.textContent="";
          display.textContent = newStr;
            if (removed === "+"||removed === "/"||removed === "*"){
              operator = "";
              return;
            }
            if (removed === "-"){
              if (newStr.includes("*")|| newStr.includes("+") || newStr.includes("/")){
                return;
              }
              else if (newStr.includes("-")){
                multipleMinus()
                if (manyM != ""){
                  manyM="";
                  return;
                }
                else {
                  operator = "";
                  return;
                }
              }
            }
            if (newStr === ""){
              clearComp();
            }
                  break;
case 'clear':
          upSide();
            roundingMessage.textContent="";
            display.textContent = "";
            clearComp()
                  break;
default:
                  break;
}}));

function add (a, b){
        answer = +a + +b;
        rounding(answer);};

function subtract (a, b){
        answer = a - b;
        rounding(answer);
        };

function multiply (a,b){
        answer = a * b;
        rounding(answer);
};

function divide (a, b){
      if (b == 0){
        display.textContent = "It's infinite!";
      }
      else {
        answer = a/b;
        rounding(answer);
      }};


function operate (a, operator, b){
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
function multipleMinus() {
function getAllIndexes(arr, val){
  var indexes =[],i =-1;
  while ((i= arr.indexOf(val, i+1)) != -1){
    indexes.push(i);
  }
  return indexes;
}
var indexes = getAllIndexes(display.textContent, "-");
manyM = indexes;
if (indexes[0] === 0){
  indexes.splice(0,1);
  manyM= indexes;
}
}

function clearComp(){
  a="";
  operator="";
  b="";
}

function rounding(answer){
  roundA= Math.round((answer + Number.EPSILON)*10000)/10000;
  display.textContent = roundA;
  a = answer;
  if (roundA !== answer){
    roundingMessage.textContent = "rounded to 4 d.p"
  }
  else {
    roundingMessage.textContent="";
}};

function rotate(){
  display.style.transform = "rotate(180deg)";
  display.style.borderTopLeftRadius= "0px";
  display.style.borderBottomRightRadius = "30px";
  display.style.textAlign = "center";
}
function upSide(){
  display.style.transform = "rotate(0deg)";
  display.style.borderTopLeftRadius= "30px";
  display.style.borderBottomRightRadius = "0px";
  display.style.textAlign = "right";
}

window.addEventListener('keydown', collectData);
