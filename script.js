const display = document.querySelector(".display");
const buttonOne = document.querySelector(".one");
const buttons = document.querySelectorAll(".btn");
const clear = document.querySelector(".clear");
const deleteBtn = document.querySelector(".delete");
const equal = document.querySelector(".equal");
const plus = document.querySelector(".plus")
const minus = document.querySelector(".minus");
const multiply = document.querySelector(".ex");
const divide = document.querySelector(".divide");
const dot = document.querySelector(".dot");
let beforeValue = 0;
let afterValue = 0;
let operator = "";
let equalPressed = false;

display.textContent = "0";
let displayValue = "0";
updateDisplay();

clear.addEventListener("click", clearEvent);
deleteBtn.addEventListener("click", deleteEvent);
dot.addEventListener("click", dotEvent);
equal.addEventListener("click", equalEvent);
plus.addEventListener("click", addEvent);
minus.addEventListener("click", subtractEvent);
multiply.addEventListener("click", multiplyEvent);
divide.addEventListener("click", divideEvent);

buttons.forEach(function(button){
    button.addEventListener("click", function(e){
        buttonEvent(e);
    });
})


document.addEventListener("keydown", function(e){
    if(e.key >= "0" && e.key <= "9") keyEvent(e);
    if(e.key === ".") dotEvent();
    if(e.key === "+") addEvent();
    if(e.key === "-") subtractEvent(); 
    if(e.key === "*") multiplyEvent(); 
    if(e.key === "/") divideEvent();
    if(e.key === "Enter") equalEvent();
    if(e.key === "Backspace") deleteEvent();
    if(e.key === "Delete" || e.key === "c") clearEvent();
})



function operate(operator, num1, num2){
    return operator(num1,num2);
}

function addNumbers(num1,num2){
    return num1 + num2;
}

function subtractNumbers(num1, num2){
    return num1 - num2;
}

function multiplyNumbers(num1, num2){
    return num1 * num2;
}

function divideNumbers(num1, num2){
    return +(num1 / num2);
}

function chooseOperator(){
    if(operator === "add")
    {
        return addNumbers;
    } 
    if(operator === "minus"){
        return subtractNumbers;
    }
    if(operator === "divide"){
        return divideNumbers;
    }
    if(operator === "multiply"){
        return multiplyNumbers;
    }
}

function updateDisplay(){
    display.textContent = displayValue;
}

function addEvent(){
    if (beforeValue !== 0){
        beforeValue = operate(chooseOperator(), beforeValue, parseFloat(displayValue));
        operator = "add";
        displayValue = `${beforeValue.toFixed(2)}+`;
        updateDisplay();
        displayValue = "";
    }
    else{
        operator = "add";
        beforeValue = parseFloat(displayValue);
        displayValue = `+`;
        updateDisplay();
        displayValue = "";
    }
}

function multiplyEvent(){
    if (beforeValue !== 0){
        beforeValue = operate(chooseOperator(), beforeValue,parseFloat(displayValue));
        operator = "multiply";
        displayValue = `${beforeValue.toFixed(2)}×`;
        updateDisplay();
        displayValue = "";
    }
    else{
        operator = "multiply";
        beforeValue = parseFloat(displayValue);
        displayValue = `×`;
        updateDisplay();
        displayValue = "";
    }
}

function subtractEvent(){
    if (beforeValue !== 0){
        beforeValue = operate(chooseOperator(), beforeValue,parseFloat(displayValue));
        operator = "minus";
        displayValue = `${beforeValue.toFixed(2)}-`;
        updateDisplay();
        displayValue = "";
    }
    else{
        operator = "minus";
        beforeValue = parseFloat(displayValue); 
        displayValue = `-`;
        updateDisplay();
        displayValue = "";
    }

}

function divideEvent(){
    if (beforeValue !== 0){
        beforeValue = operate(chooseOperator(), beforeValue,parseFloat(displayValue));
        operator = "divide";
        displayValue = `${beforeValue.toFixed(2)}÷`;
        updateDisplay();
        displayValue = "";
    }
    else{
        operator = "divide";
        beforeValue = parseFloat(displayValue);
        displayValue = `÷`;
        updateDisplay();
        displayValue = "";
    }   
}

function dotEvent(){
    displayValue = displayValue.toString();
    if(!displayValue.includes("."))
    displayValue = displayValue.concat(".");
    updateDisplay();
}

function equalEvent(){
    afterValue = parseFloat(displayValue);
    

    if(operator === "add"){
       displayValue = operate(addNumbers,beforeValue,afterValue).toFixed(2);
       beforeValue = 0;
       updateDisplay();
 
    }

    if(operator === "minus"){
        displayValue = operate(subtractNumbers,beforeValue,afterValue).toFixed(2);
        beforeValue = 0;
        updateDisplay();
  
     }

     if(operator === "multiply"){
        displayValue = operate(multiplyNumbers,beforeValue,afterValue).toFixed(2);
        beforeValue = 0;
        updateDisplay();
  
     }

     if(operator === "divide"){
        displayValue = operate(divideNumbers,beforeValue,afterValue).toFixed(2);
        beforeValue = 0;
        updateDisplay();
  
     }
}

function deleteEvent(){
    if(displayValue.length === 1 || displayValue.length === 0){
        displayValue = "0";
        display.textContent = displayValue;
    }
    else{
    displayValue = displayValue.substring(0,(displayValue.length-1));
    updateDisplay();
    }

}

function buttonEvent(e){
    if(e.target.textContent !== "."){
        if(parseFloat(displayValue) === 0 && displayValue.length < 2){
            displayValue = e.target.textContent;
            updateDisplay();
        }
        else{
        displayValue += e.target.textContent;
        updateDisplay();
        }
        
    
    }
}

function keyEvent(e){
    if(parseFloat(displayValue) === 0 && displayValue.length < 2){
        displayValue = e.key;
        updateDisplay();
    }
    else{
    displayValue += e.key;
    updateDisplay();
    }
}

function clearEvent(){
    displayValue = "0";
    beforeValue = 0;
    afterValue = 0;
    updateDisplay();
}