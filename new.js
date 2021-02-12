var allKeys = document.querySelectorAll('.keys');
var screenValue = display.textContent;
var a="";
var b="";
var operator="";
var previousCharacter = screenValue.slice(-1)
const containsOperator = (display.textContent.indexOf('+')> -1)||
(display.textContent.indexOf('/')> -1) || (display.textContent.indexOf('*')> -1)
var findB = display.textContent.split(/[\/\*\+]/).pop();

document.body.addEventListener("keyup", (event) =>
{
const keyValue = event.key;
const typeOfKey = keyType(key);
})

allKeys.forEach( key => {
  key.addEventListener("click", (event) =>{
    const keyValue = event.target.textContent;
    const typeOfKey = keyType(key);
  })
})

const keyType = (value)=> {
  if(/[0-9]/.test(value)){
    console.log('digit');
    return `digit`;
  }
  if (value === '.'){
    return 'decimal';
  }
  if(/\+\*\//.test(value)){
    return `operator`;
  }
  if(value === '-'){
    return `minus`;
  }
  if(value === '='){
    return `equals`;
  }
  if (value==='c'|| value==='AC'){
    return `clear`;
  }
  if (value ==='Backspace'|| value ==='back'){
    return `back`;
  }
}

function whatToDoWithKeyValue(keyType, value){
  if ((screenValue === ''|| screenValue === 'NaN'||
  screenValue === "It's infinite!")){
    clearComponents()
  }
  switch(keyType){
    case 'digit':
    digits(value);
    break;
    case 'decimal':
    decimals(value);
    break;
    case 'operator':
    break;
    case 'minus':
    break;
    case 'equals':
    break;
    case 'clear':
    break;
}}

function digits(value){
 if (screenValue === '0'){
   clearComponents();
   return value;
 }
 else{
   return screenValue + value;
 }
}

function decimals (value){
  let currentNum = screenValue.split(/[\/\*\+\-]/).pop();
  let previousChar = screenValue.substring(screenValue.length-1);
  if (currentNum.indexOf('.')> -1){
    return;
  }
  else if (screenValue === "" ||previousChar==="*" ||
  previousChar==="/" || previousChar==="+"|| previousChar==="-"){
    return screenValue + 0 + value;
  }
  else {
    return screenValue + value
}};

function clearComponents (){
  screenValue = "";
  a="";
  b="";
  operator="";
}

function add (a, b){
        answer = +a + +b;
        roundAnswer(answer);
      };

function subtract (a, b){
        answer = a - b;
        roundAnswer(answer);
        };

function multiply (a,b){
        answer = a * b;
        roundAnswer(answer);
};

function divide (a, b){
      if (b == 0){
        display.textContent = "It's infinite!";
      }
      else {
        answer = a/b;
        roundAnswer(answer);
      }};


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
      return a;
      break;
  }

  function roundAnswer(answer){
    roundA= Math.round((answer + Number.EPSILON)*10000)/10000;
    display.textContent = roundA;
    a = answer;
    if (roundA !== answer){
      roundingMessage.textContent = "rounded to 4 d.p"
    }
    else {
      roundingMessage.textContent="";
  }}}
