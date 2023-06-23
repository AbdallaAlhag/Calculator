let variable1 = 0;
let variable2 = 0;
let operator = 0;

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

console.log(divide(9,0));


// variable1 = prompt("Enter number 1 : ");
// variable2 = prompt("Enter number 2 : ");
// operator = prompt("Enter a number 1-4 : ") ;

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


