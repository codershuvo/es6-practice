// function doubleIt (num) {
//     return num * 2; 
// }

// function expression 
// const doubleIt = function (num) {
//     return num * 2; 
// }

// arrow function es6
const doubleIt = num => num * 2; 
const add = (x, y) => x + y; 
const give5 = () => 5; 

const doMath = (x, y) => {
    const sum = x + y; 
    const diff = x - y; 
    const result = sum * diff; 
    return result;
}

const result = doMath(7, 5); 
console.log(result); 