(function(){
    "use strict";

    const planets = [
        'Mercury',
        'Venus',
        'Earth',
        'Mars',
        'Jupiter',
        'Saturn',
        'Uranus',
        'Neptune'
    ];

    /**
     * TODO:
     * Read each console log below, and write some javascript code to perform
     * the step that it describes
     */

    console.log('Adding "The Sun" to the beginning of the planets array.');
    planets.unshift('The Sun')
    console.log(planets);

    console.log('Adding "Pluto" to the end of the planets array.');
    planets.push('Pluto')
    console.log(planets);

    console.log('Removing "The Sun" from the beginning of the planets array.');
    planets.shift()
    console.log(planets);

    console.log('Removing "Pluto" from the end of the planets array.');
    planets.pop()
    console.log(planets);

    console.log('Finding and logging the index of "Earth" in the planets array.');
    console.log(planets.indexOf('Earth'));

    console.log("Reversing the order of the planets array.");
    planets.reverse()
    console.log(planets);

    console.log("Sorting the planets array.");
    planets.sort()
    console.log(planets);


    //notes
    // // adding and removing elements in array
    // let fruits = ["apple", "pear", "orange", "banana"]
    //
    // console.log(fruits);
    //
    // fruits.unshift("Guava")
    // console.log(fruits)
    //
    // fruits.push("melon")
    // console.log(fruits);
    //
    // fruits.pop()
    // console.log(fruits);
    //
    // fruits.shift()
    // console.log(fruits);
    //
    // //finding values in arrays
    // console.log(fruits.indexOf("pear"));
    //
    // //finding multiple values
    // fruits.unshift("apple");
    // fruits.push("apple");
    // console.log(fruits);
    // console.log(fruits.indexOf("apple"));
    // console.log(fruits.indexOf("apple", 1));
    // console.log(fruits.indexOf("apple", 2));
    //
    // // .includes returns boolean for if item is in array
    // console.log(fruits.includes("pear"));
    // console.log(fruits.includes("durian"));
    //
    // // .slice copys a subset of an array but doesn't modify original
    // console.log(fruits.slice(2, 5));
    // // .slice with 1 argument, goes from first argument to end
    // console.log(fruits.slice(2));
    // // reversing an array which does modify original array
    // console.log(fruits.reverse());
    // console.log(fruits.reverse());
    //
    // // sorting that which modifies original
    // fruits.sort()
    // console.log(fruits);
    //
    // // sorting number array
    // let numArray = [1, 6, 12, 4, 6]
    // console.log(numArray.sort());
    // numArray.sort(function(a, b) {
    //     return a - b;
    // });
    // console.log(numArray);
    //
    // // splitting an string into an array
    // let str = "the quick brown fox";
    // let words = str.split(" ");
    // console.log(words);
    //
    // // joining an array: join the split array back to the
    // console.log(fruits.join(", "));
    // console.log(words.join(", "));
})();