"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */
//
// function numberGuess(){
//     var answer =  confirm("Do you want to enter a number?");
//
//     if(answer == true);
//         var input = prompt("What is your number?");
//
//         if(isNaN(input)){
//             alert("That is not a number");
//         } else{
//
//             //alert 1
//             alert("The number plus 100 is " + (parseInt(input) + 100));
//
//             //alert2
//             if(input % 2 == 0){
//                 alert("Your number is even");
//             } else{
//                 alert("Your number is odd");
//             }
//
//             //alert3
//             if(Math.sign(input) == 1) {
//                 alert("Your number is positive");
//             }else{
//                 alert("Your number is negative");
//             }
//         }
// }
//
//
//
// numberGuess();
/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined above, if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)
// var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// var randomColor = colors[Math.floor(Math.random() * colors.length)];
//************************************************************************************
// function analyzeColor(colorName){
//     var message = "";
//
//     if (colorName === 'blue'){
//         message = "blue is the color of the sky";
//     } else if (colorName === 'red'){
//         message = "strawberries are red";
//     } else {
//         message = "I don't know anything about that color.";
//     }
//     return message;
// }
//
// // console.log(analyzeColor("blue"));
// // console.log(analyzeColor("red"));
//
// var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// var randomColor = colors[Math.floor(Math.random() * colors.length)];
//
// console.log(analyzeColor(randomColor));




/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message everytime you refresh the page
 */

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */
// function analyzeColor(colorName){
//     var message = "";

// switch(analyzeColor) {
//     case "red":
//         message = "strawberries are red";
//         break;
//     case "blue":
//         message = "the sky is blue";
//         break;
//     case "cayan":
//         message = "I dont know anything about cayan";
//         break;
//         default:
//             message = "Not sure about that color";
// // }
//     return message;
// }
//
// console.log(analyzeColor(randomColor));

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
// var userString = prompt("Pick a color");
// function analyzeColor(colorName){
//     if (colorName === 'blue'){
//         alert ("blue is the color of the sky");
//     } else if (colorName === 'red'){
//         alert("strawberries are red");
//     } else {
//         alert("I don't know anything about cayan.");
//     }
// }
//
// console.log(analyzeColor(userString));

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `caculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

function calculateTotal(luckyNumber, total) {
    var discountPercentage;
    var discountedPrice;

    if (luckNumber < 0 || luckNumber > 5) {
        return "Invalid lucky number given!";
    }

    discountPercentage = calculatePercentage(luckyNumber);
    discountedPrice = total - (total * discountPercentage);

    return discountedPrice;
}

    switch(luckyNumber) {
        case 0:
            discountPercentage = 0;
            break;
        case 1:
            discountPercentage = .1;
            break;
        case 2:
            discountPercentage = .25;
            break;
        case 3:
            discountPercentage = .35;
            break;
        case 4:
            discountPercentage = .5;
            break;
        case 5:
            discountPercentage = 1;
            break;
    }

    discountedPrice= total - (total * discountPercentage);


    return discountedPrice;
}

console.log(calculateTotal(0,100));
console.log(calculateTotal(4,100));
console.log(calculateTotal(5,100));

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6

var luckyNumber = Math.floor(Math.random() * 6);
var totalBill = prompt("Please enter your total bill.");

alert("Your lucky number is: " + luckyNumber);
alert("YOur total bill before the discount is: " + totalBill);
alert("Price after discount applied is: " + calculateTotal(luckyNumber, totalBill));




