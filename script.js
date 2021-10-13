const display = document.querySelector(".display");
const buttonOne = document.querySelector(".one");
const buttons = document.querySelectorAll(".btn");
const clear = document.querySelector(".clear");
const deleteBtn = document.querySelector(".delete");
const equal = document.querySelector(".equal");
const plus = document.querySelector(".plus")
display.textContent = "0";
let displayValue = 0;
let beforeValue;
let afterValue;
let operator;
updateDisplay();

clear.addEventListener("click", () => {
    displayValue = "0";
    updateDisplay();
})

deleteBtn.addEventListener("click", () => {
    if(displayValue.length === 1 || displayValue.length === 0){
        displayValue = "0";
        display.textContent = displayValue;
    }
    else{
    displayValue = displayValue.substring(0,(displayValue.length-1));
    updateDisplay();
    }
});

equal.addEventListener("click", function(){
    afterValue = parseInt(displayValue);
    if(operator === "add"){
       displayValue = operate(addNumbers,beforeValue,afterValue);
       updateDisplay();
       displayValue = "";
    }
})
plus.addEventListener("click", function(){
    operator = "add";
    beforeValue = parseInt(displayValue);
    displayValue = `+`;
    updateDisplay();
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

buttons.forEach(function(button){
    button.addEventListener("click", function(e){
        if(parseInt(displayValue) === 0){
            displayValue = e.target.textContent;
            updateDisplay();
        }
        else{
        displayValue += e.target.textContent;
        updateDisplay();
        }
    })
})


function updateDisplay(){
    display.textContent = displayValue;
}


