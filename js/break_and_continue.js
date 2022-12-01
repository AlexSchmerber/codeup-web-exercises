"use strict";

function skipEvensOneToFifty (input) {
    input = prompt("Enter an odd number between 1 and 50");
    while(isNaN(input) === true || input % 2 === 0 || input < 1 || input > 49) {
        input = prompt("Enter an odd number between 1 and 50")
    }
    console.log("The number we're skipping is " + input)
    for(let i = 0; i < 50; i++) {
        if(i % 2 === 0){
            continue;
        }
        if(i == input){
            console.log("We're skipping " + i)
            continue;
        }
        console.log(i)
    }
}
