"use strict";

/** bv
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 *  > sayHello("codeup") // returns "Hello, codeup!"
 */
//
// function sayHello(name) {
//     return "Hello " + name + "!";
// }
//     console.log (sayHello ("Codeup"));
/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */


// var helloMessage = sayHello("Abby");
//
// console.log(helloMessage);


/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */

// var myName = "Roger";
//
// console.log(sayHello(myName));
//
// // Don't modify the following line, it generates a random number between 1 and 3
// // and stores it in a variable named random
// var random = Math.floor((Math.random() * 3) + 1);

/**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 *
 * Example
 *  > isTwo(1) // returns false
 *  > isTwo(2) // returns true
 *  > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 */

// function isTwo(number){
//     if(number == 2){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
//
// console.log (isTwo(random));

/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Example:
 * > calculateTip(0.20, 20) // returns 4
 */

// function calculateTip (total, tipPercentage){
//     var tip = (total*(tipPercentage/100));
//     return tip;
// }
//
// console.log(calculateTip(30, 10));

/**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */

// return total;

// function calculateTip (billAmount, tip){
//
//     var tipAmount = billAmount * (tip/100);
//     return alert("You should tip " + tipAmount);
// }
//
// var billAmount = prompt ("What is the total of your bill?");
// var tip = prompt("What percentage would you like to tip?");
// calculateTip(billAmount, tip);


/** RYAN'S EXERCISES */

function identity(input){
    return input;
}

console.log(identity("Abby"));


function getRandomNumber(min, max){
    return Math.random() * (max - min) + min;

}

console.log (getRandomNumber(1, 100));