(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    let person = {
        firstName: "Alex",
        lastName: "Schmerber"
    };
    console.log(person.firstName);
    console.log(person.lastName);

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    person.sayHello = function() {
        console.log("Hello from " + this.firstName + " " + this.lastName + "!");
    }
    person.sayHello();

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    let shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];
    shoppers.forEach(function(shopper){
        let shopperDiscount = shopper.amount * 0.12;
        let totalAfterDiscount = shopper.amount - shopperDiscount;
        if(shopper.amount <= 200){
            console.log(shopper.name + " your cart total is $" + shopper.amount);
        } else{
            console.log(shopper.name + " your cart total before your discount is $" + shopper.amount);
            console.log("Your total discounted amount is $" + shopperDiscount);
            console.log("Your cart total after your discount is $" + totalAfterDiscount);
        }
    });

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
    let books = [
        {title: "The Leviathan", author: {firstName: "Thomas", lastName: "Hobbes"}},
        {title: "The Prince", author: {firstName: "Niccolo", lastName: "Machiavelli"}},
        {title: "Moby Dick", author: {firstName: "Herman", lastName: "Melville"}},
        {title: "Project Hail Mary", author: {firstName: "Andy", lastName: "Weir"}},
        {title: "To Kill a Mockingbird", author: {firstName: "Harper", lastName: "Lee"}}
    ];
    console.log(books[0].title);
    console.log(books[0].author.firstName);
    console.log(books[0].author.lastName);

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    books.forEach(function(Book){
        console.log("Book # " + (books.indexOf(Book) + 1));
        console.log("Title: " + Book.title);
        console.log("Author: " + Book.author.firstName + " " + Book.author.lastName);
    })

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

    function createBook (title, author) {
        let splitAuthor = author.split(" ")
        let book = {
            title: title,
            author: {
                firstName: splitAuthor[0],
                lastName: splitAuthor[1]
            }
        };
        return book;
    };

    let booksVersionTwo = [];
    booksVersionTwo.push(createBook("To Kill a Mockingbird", "Harper Lee"));
    booksVersionTwo.unshift(createBook("Project Hail Mary", "Andy Weir"));
    booksVersionTwo.unshift(createBook("Moby Dick", "Herman Melville"));
    booksVersionTwo.unshift(createBook("The Prince", "Niccolo Machiavelli"));
    booksVersionTwo.unshift(createBook("The Leviathan", "Thomas Hobbes"));


    booksVersionTwo.forEach(function(book){
        console.log("This is book number " + (booksVersionTwo.indexOf(book) + 1));
        console.log(showBookInfo(book));
    });

    function showBookInfo(obj){
        console.log("The books name is " + obj.title);
        console.log("The books author is " + obj.author.firstName + " " + obj.author.lastName);
    };
    booksVersionTwo.forEach(function(book){
        showBookInfo(book);
    });

    // // Object practice
    //
    // let rey = new Object;
    // // or you could do "let rey = {};"
    //
    // // assigning properties
    // rey.type = "dog";
    // rey.breed = "german shepherd";
    // console.log(rey);
    // console.log(rey.breed); // use this majority of time
    // console.log(rey["breed"]); // don't use this as much
    //
    // //Assignment and reassignment of properties
    // rey.breed = "chihuahua";
    // rey.gender = "female";
    //
    // const dolly = {
    //     name: "Dolly",
    //     gender: "female",
    //     breed: "american bulldog"
    // }
    // dolly.type = "dog";
    // console.log(dolly);
    //
    // //Object nesting in another object
    // const candy = {
    //     name: "Candy",
    //     age: 2,
    //     petType: "dog",
    //     gender: "female",
    //     breed: "pug",
    //     owner: {
    //         name: {
    //             firstName: "Joe",
    //             lastName: "Shmoe"
    //         },
    //         address: "3123 sesame street",
    //         phone: "2324563556"
    //     }
    // }
    //
    // console.log(candy);
    // console.log(candy.owner.name);
    //
    // //objects in an array
    // const pets = [];
    // pets.push(rey);
    // pets.push(dolly);
    // pets.unshift(candy);
    // rey.name = "rey";
    // console.log(pets);
    // console.log(pets[1]);
    //
    // //Arrays in objects
    // candy.favoriteToys = [
    //     "tennis ball",
    //     "stick"
    // ];
    // console.log(pets[0].favoriteToys[1]);
    //
    // //Methods or functions that are part of an object
    // rey.sit = function() {
    //     console.log("rey sits");
    // };
    // rey.sit();
    // // candy.sit();
    // function sit(){
    //     console.log("The dog sits");
    // };
    // candy.sit = sit;
    // candy.sit();
    // dolly.sit = sit;
    // dolly.sit();
    //
    // // using "this"
    // rey.sit = function(){
    //     console.log(this.name + " sits");
    // }
    // rey.sit();
    // candy.sit = rey.sit;
    // candy.sit();
    //
    // const red1 = {
    //     make: "chevy",
    //     model: "corvette",
    //     honk: function()  { // can't use arrow function when using "this"
    //         console.log(this.make + " says Beep");
    //     }
    // }
    // const blue1 = {
    //     make: "dodge",
    //     model: "charger",
    //     honk: function() {
    //         console.log(this.model + " says Honk");
    //     }
    // }
    //
    // red1.honk();
    // blue1.honk();

})();