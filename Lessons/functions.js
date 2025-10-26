
function favAnimal(animal) {
    return "My favorite animal is a " + animal + ".";
}

const message = favAnimal("elephant");
// console.log(message);


// Exerciese; Write a function called add7 that takes one number and returns that number + 7. add7(10) should return 17.
function add7(number){
    return number + 7;
}
// console.log("exercise add7: " + add7(10));

//Exercise: Write a function called multiply that takes 2 numbers and returns their product. multiply(3, 2) should return 6.
function multiply(number1, number2){
    return number1 * number2;
}
// console.log("Exercise multiply " + multiply(3, 2))

// Excercise: Write a function called capitalize that takes a string and returns that string with only the first letter capitalized. Make sure that it can take strings that are lowercase, UPPERCASE or BoTh. capitalize("abcd") should return "Abcd", capitalize("ABCD") should return "Abcd", capitalize("aBcD") should return "Abcd";

function capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
// console.log("Exercise capitalize: " + capitalize("aBcD") + ", " + capitalize("abcd") + ", " + capitalize("ABCD"));

// Exercise: Write a function called lastLetter that takes a string and returns the very last letter of that string: lastLetter("abcd") should return "d"

function lastLetter(str){
    return str.charAt(str.length - 1);
}
console.log("Exercise lastLetter: " + lastLetter("abcd"));
