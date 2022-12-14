(function() {
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */

    const fourNames = ["Pete", "Zeke", "Bob", "Tiffany"];

    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */

    console.log(fourNames.length);

    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */

    console.log(fourNames[0])
    console.log(fourNames[1])
    console.log(fourNames[2])
    console.log(fourNames[3])

    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */

    for (let i = 0; i < fourNames.length; i++) {
        console.log(fourNames[i]);
    }
    ;

    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */

    fourNames.forEach(function (name) {
        console.log(name)
    })

    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */
    let fiveNumbers = [1, 2, 3, 4, 5]

    function returnFirstItem(input) {
        return input[0]
    }

    function returnSecondItem(input) {
        return input[1]
    }

    function returnLastItem(input) {
        return input[input.length - 1]
    }

    console.log(returnLastItem(fiveNumbers));


// Practice
    fruits = ["banana", "apple", "orange", "tomato"]
    for (let i = 0; i < fruits.length; i++) {
        console.log(fruits[i]);
    }

    function arrayStringify(arr) {
        let result = "";
        for (let i = 0; i < arr.length; i++) {
            if (i > 0) {
                result += ", ";
            }
            result += fruits[i];
        }
        return result;
    }

    console.log("Stringify result is " + arrayStringify(fruits))
}) ();