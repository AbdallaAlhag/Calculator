let variable1 = 0;
let variable2 = 0;
let operator = 0;


const buttons = document.querySelectorAll('button');
const currentScreen = document.querySelector('.screen-current');
const prevScreen = document.querySelector('.screen-previous');
const clear = document.getElementById('clear');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        // alert(button.id);
        // if(button.first)
        if(button.firstElementChild.className !== 'number') {
            return;
        }
        // Doesn't wrap yet
        currentScreen.textContent += parseInt(button.textContent); 
        // This is coming out wrong
        variable1 += button.textContent; 
        console.log(variable1);
    })
})




clear.addEventListener('click', () => {
    currentScreen.textContent = ' ';
    prevScreen.textContent = ' ';
})


const add = function(a,b) {
    return a + b;
}

const subtract = function(a,b) {
    return a - b;
}

const multiply = function(a,b) {
    return a * b;
}

const divide = function(a,b) {
    if(b === 0){
        return "Can't divide by zero";
    }
    else {
        return a / b;
    }
}



function operatorFunc(op, a, b) {
    switch(op) {
        case "1":
            console.log(add(a,b));
            break;
        case "2":
            console.log(subtract(a,b));
            break;
        case "3":
            console.log(multiply(a,b));
            break;
        case "4":
            console.log(divide(a,b));
            break;
        default:
            console.log("Unknown");
    }
}

operatorFunc(operator, variable1, variable2);


