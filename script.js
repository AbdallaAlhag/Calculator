let variable1 = 0;
let variable2 = 0;
let operation = "";
let isNewNumber = false;
let isEqual = false;
let isDot = false;

// dont know how to use objects with bottons

let currentScreen = document.querySelector('.screen-current');
let prevScreen = document.querySelector('.screen-previous');
const buttons = document.querySelectorAll('button');
const clear = document.getElementById('clear');
const result = document.getElementById('equal');
const negate = document.getElementById('negate');
const decimal = document.getElementById('decimal');

// MAYBE USELESS???
// const addBtn = document.getElementById('addition');
// const subBtn = document.getElementById('subtraction');
// const multBtn = document.getElementById('multiplication');
// const divBtn = document.getElementById('division'); 

// const calculator = {
//     currentValue: 0,

//     add(num) {
//         this.currentValue += num;
//         return this;
//     },

//     subtract(num) {
//         this.currentValue -= num;
//         return this;
//     },

//     multiply(num) {
//         this.currentValue *= num;
//         return this;
//     },

//     divide(num) {
//         this.currentValue /= num;
//         return this;
//     },

//     clear() {
//         this.currentValue = 0;
//         return this;
//     },

//     getResult() {
//         return this.currentValue;
//     }
// }

// calculator.add(5); // Add 5 to the current value
// calculator.multiply(3); // Multiply the current value by 3
// calculator.subtract(2); // Subtract 2 from the current value
// calculator.divide(2); // Divide the current value by 2
// const result = calculator.getResult(); // Get the final result
// console.log(result); // Output: 7

// First sequence
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        
        if(button.firstElementChild.className === 'number' && currentScreen.textContent.length < 22) {
            // return;
            if (isNewNumber === true) {
                currentScreen.textContent = ' ';
                isNewNumber = false;
                isDot = false;
            }
            currentScreen.textContent += parseFloat(button.textContent);
            variable1 = parseFloat(currentScreen.textContent);
        }
        
    })
})

// buttons.forEach(button => console.log(button));

// 2nd Sequence
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if(button.firstElementChild.className === 'op') {
            prevScreen.textContent = variable1 + " " + button.textContent;
            variable2 = parseFloat(prevScreen.textContent);
            operation = button.id;
            currentScreen.textContent = ' ';
            isEqual = false;
            isDot = false;
        }
    })
})

// Third sequence equal button clicked
result.addEventListener('click', () =>{
    if(isEqual === true) {
        return;
    }
    prevScreen.textContent += variable1 + ' ' + "=";
    currentScreen.textContent = operatorFunc(operation, variable2, variable1);
    variable1 = parseFloat(currentScreen.textContent);
    isNewNumber = true;
    isEqual = true;
});

// dot button
decimal.addEventListener('click', () => {
    if(isDot === true) {
        return;
    }
    currentScreen.textContent += ".";
    variable1 = parseFloat(currentScreen.textContent);
    isDot = true;
});

negate.addEventListener('click', () =>{
    variable1 *= -1;
    currentScreen.textContent = variable1;
});

clear.addEventListener('click', () => {
    currentScreen.textContent = ' ';
    prevScreen.textContent = ' ';
    variable1 = 0;
    variable2 = 0;
});

const add = function(a,b) {
    return (a + b);
}

const subtract = function(a,b) {
    return (a - b);
}

const multiply = function(a,b) {
    return (a * b);
}

const divide = function(a,b) {
    if(b === 0){
        return "Can't divide by zero";
    }
    else {
        return (a / b);
    }
}

const modular = function(a,b) {
    return (a % b);
}

function operatorFunc(op, a, b) {
    switch(op) {
        case "addition":
            return add(a,b);
            break;
        case "subtraction":
            return subtract(a,b);
            break;
        case "multiplication":
            return multiply(a,b);
            break;
        case "division":
            return divide(a,b);
            break;
        case "modular":
            return modular(a,b);
            break;
        default:
            ("Unknown");
    }
}

// console.log("hello: " + operatorFunc("subtraction", 10, 6));


console.log("test: " + parseFloat("123.5"));