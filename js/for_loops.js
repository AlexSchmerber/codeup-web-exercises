"use strict";

function showMultiplicationTable(input){
    if(input === true || input === false || isNaN(input) === true || input === null){
        return "insert number"
    } else{
        let i = 1;
        while (i <= 10) {
            console.log(input + " * " + i + " = " + (input * i));
            i++;
        }
    }
}

// Use a for loop and the code from the previous lessons to generate 10 random numbers
// between 20 and 200 and output to the console whether each number is odd or even. For example:
// 123 is odd
// 80 is even
// 24 is even
// 199 is odd

let numberRange = 0;
function tenNumbers(input) {
    for (let i = 0; i <= 10; i++) {
        numberRange = Math.floor((Math.random() * 200) + 20);
        if (numberRange % 2 === 0) {
            console.log(numberRange + " is even")
        } else {
            console.log(numberRange + " is odd")
        }
    }
}

// Create a for loop that uses console.log to create the output shown below.
//
//
// 1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777
// 88888888
// 999999999

// Create a for loop that uses console.log to create the output shown below.
//
//
// 100
// 95
// 90
// 85
// 80
// 75
// 70
// 65
// 60
// 55
// 50
// 45
// 40
// 35
// 30
// 25
// 20
// 15
// 10
// 5
