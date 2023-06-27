let variable1 = 0;
let variable2 = 0;
let operation = "";

// dont know how to use objects with bottons

let user1 = {
    name: 'john',
    age: 30
};

let currentScreen = document.querySelector('.screen-current');
let prevScreen = document.querySelector('.screen-previous');
const buttons = document.querySelectorAll('button');
const clear = document.getElementById('clear');
const result = document.getElementById('equal');


// MAYBE USELESS???
// const addBtn = document.getElementById('addition');
// const subBtn = document.getElementById('subtraction');
// const multBtn = document.getElementById('multiplication');
// const divBtn = document.getElementById('division'); 


// First sequence

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        // alert(button.id);
        // if(button.first)
        if(button.firstElementChild.className === 'number') {
            // return;
            currentScreen.textContent += parseInt(button.textContent);
            variable1 = parseInt(currentScreen.textContent);
        }
        // Doesn't wrap yet
        
        // This is coming out wrong
        // variable1 += button.textContent; 
        // console.log(variable1);
    })
})


// buttons.forEach(button => console.log(button));

// 2nd Sequence
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if(button.firstElementChild.className === 'op') {
            prevScreen.textContent = currentScreen.textContent + " " + button.textContent;
            variable2 = parseInt(prevScreen.textContent);
            operation = button.id;
            console.log(operation);
            currentScreen.textContent = ' ';
        }
    })
})


// Third sequence 
result.addEventListener('click', () =>{
    prevScreen.textContent += variable1 + ' ' + "=";
    console.log(prevScreen.textContent);
    currentScreen.textContent = operatorFunc(operation,variable2, variable1);
    console.log(currentScreen.textContent);
})


function test(){
    variable1 = parseInt(currentScreen.textContent);
    console.log(variable1);
};

function answer() {
    console.log(variable1 + variable2);
}

clear.addEventListener('click', () => {
    currentScreen.textContent = ' ';
    prevScreen.textContent = ' ';
})


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
        default:
            ("Unknown");
    }
}



console.log("hello: " + operatorFunc("subtraction", 10, 6));


