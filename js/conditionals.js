"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

// function analyzeColor(color){
//     if(color === 'blue') {
//         return "blue is the color of the sky"
//     } else if(color === 'red'){
//         return "Strawberries are red"
//     } else if(color === 'orange'){
//         return "Traffic cones are orange"
//     } else if(color === 'green'){
//         return "The grass is a vibrant green"
//     } else if(color === 'yellow'){
//         return "Lemons are a solid yellow"
//     } else{
//         return "I don't know anything about " + color
//     }
// }

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */

// console.log(analyzeColor(randomColor))

/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */

// switch (randomColor){
//     case"red":
//         console.log("Strawberries are red")
//     break;
//     case"orange":
//         console.log("Traffic cones are orange")
//     break;
//     case"yellow":
//         console.log("Lemons are a solid yellow")
//     break;
//     case"green":
//         console.log("The grass is a vibrant green")
//     break;
//     case"blue":
//         console.log("blue is the color of the sky")
//     break;
//     default:
//         console.log("I don't know anything about " + randomColor)
// }

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

// let userColor = prompt("Input random color.")
// alert(analyzeColor(userColor))

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
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

// function calculateTotal(luckyNum, customerBill){
//     switch(luckyNum){
//         case(0):
//             return customerBill
//             break;
//         case(1):
//             return customerBill * 0.9
//             break;
//         case(2):
//             return customerBill * 0.75
//             break;
//         case(3):
//             return customerBill * 0.65
//             break;
//         case(4):
//             return customerBill * 0.5
//             break;
//         case(5):
//             return 0
//             break;
//         default:
//             return "Invalid lucky number."
//     }
// }

/** TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */

// const luckyNumber = Math.floor(Math.random() * 6);
// let userBill = prompt("What is your total bill?");
// let discountedBill = calculateTotal(luckyNumber, userBill);
// alert("Your lucky number was " + luckyNumber)
// alert("Your price before your lucky discount was " + userBill + " and your price after is " + discountedBill)
// if(discountedBill === userBill){
//     alert("unluckyyyy")
// } else if(discountedBill === 0){
//     alert("Your lucky day!!")
// }

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
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

// let userInputNumber = confirm("Would you like to enter a number?");
// if (userInputNumber){
//     let userResponse = prompt("Ok, what number?");
//     if(isNaN(userResponse)){
//         alert("Incorrect input data type.")
//     } else{
//         if(userResponse % 2 === 0){
//             alert("Your number is even.")
//         }else{
//             alert("Your number is odd.")
//         }
//         if(userResponse > 0){
//             alert("Your number is positive.")
//         }else if(userResponse < 0){
//             alert("Your number is negative.")
//         }else{
//             alert("Your number is neither positive nor negative")
//         }
//         alert("Your number plus 100 is " + (parseInt(userResponse) + 100))
//     }
// }

// Refactoring to use functions.

function userNumberInfo(input){
    let userAccept = confirm("Would you like to enter a number?");
    if (userAccept){
        let input = prompt("Ok, what number?");
        if(isNaN(input)){
            alert("Incorrect input data type.")
        } else{
            threeFunctions(input);
        }
    }
}

function threeFunctions(input){
    if(input % 2 === 0){
        alert("Your number is even.")
    } else{
        alert("Your number is odd.")
    }
    if(input > 0){
        alert("Your number is positive.")
    }else if(input < 0){
        alert("Your number is negative.")
    }else{
        alert("Your number is neither positive nor negative")
    }
    alert("Your number plus 100 is " + (parseInt(input) + 100))
}

userNumberInfo();