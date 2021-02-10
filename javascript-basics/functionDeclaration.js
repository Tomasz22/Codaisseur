
//function declaration

function sayHello(name) {
    console.log(`Hello ${name}!`)
}

sayHello('Tomasz');
sayHello('XXX');

//getting values back out of functions: return


//en example
function bmi(heightInM, weightInKg){
    // return the result of the calculation
    return Math.round(weightInKg / (heightInM * heightInM))
}

// call the function with argument
// assign the value that is returned to a variable
const person1BMI = bmi(1.79, 83) 
const person2BMI = bmi(1.61, 55) 

// Use the variable in your program
console.log(person1BMI) // 26
console.log(person2BMI) // 21

function add(number1, number2){

    return number1+number2
}

const result = add(4,8);
console.log(result);