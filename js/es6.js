// (function(){ //IIFE
/*
 * Complete the TODO items below
 */
const users = [
    {
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash']
    },
    {
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript']
    },
    {
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php']
    },
    {
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql']
    },
    {
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php']
    }
];

// TODO: fill in your name and email and add some programming languages you know
// to the languages array
users.push({name: 'Alex', email: 'alex@codeup.com', languages: ['html', 'javascript']});
console.log(users);
// TODO: replace the `var` keyword with `const`, then try to reassign a variable
// declared as `const`
// const name = 'your_name_here';
// const email = '';
// const languages = [];
// name = 'alex'

// TODO: rewrite the object literal using object property shorthand
// users.push({
//     name: name,
//     email: email,
//     languages: languages
// });

// let email = 'steve.com'
// let languages = ['html']
// users.push({
//     name,
//     email,
//     languages
// });
// console.log(users);

let {name, email, languages} = users[0];
users.push({
    name,
    email,
    languages
});

// TODO: replace `var` with `let` in the following variable declarations
let emails = [];
let names = [];

// TODO: rewrite the following using arrow functions
users.forEach((user) => {
    return emails.push(user.email);
});
users.forEach( (user) => {
    return names.push(user.name);
});

// TODO: replace `var` with `let` in the following declaration
let developers = [];
users.forEach(({name, email, languages}) =>{
    // TODO: rewrite the code below to use object destructuring assignment
    //       note that you can also use destructuring assignment in the function
    //       parameter definition
    console.log(name);
    console.log(email);
    console.log(languages);

    // TODO: rewrite the assignment below to use template strings
    developers.push(`${name}'s email is ${email} and ${name} knows ${languages.join(' , ')}`);
});
console.log(developers);
// TODO: Use `let` for the following variable
let list = '<ul>';

// TODO: rewrite the following loop to use a for..of loop
// developers.forEach(function (developer) {
//
//     // TODO: rewrite the assignment below to use template strings
//     list += '<li>' + developer + '</li>';
// });
for (const developer of developers) {
    list += `<li> ${developer} </li>`;
}
list += '</ul>';
console.log(list);
document.write(list)

//Practice

// function sayHello(name = "unknown person"){
//     console.log(`Hello ${name}`);
// }
// sayHello('bob');
// sayHello();
//
// // object property variable assignment shorthand
// let firstName = 'bob';
// let lastName = 'smith';
// let age = 42;
// //declare a name and age variable
// let person = {
//     firstName,
//     lastName,
//     age
// }
// console.log(person);
//
// //Object destructuring
// let car = {
//     make: 'Toyota',
//     model: 'Tundra',
//     year: 2020
// }
// const make = car.make //old way
// const {make, model, year} = car; // new way
// console.log(make);
// console.log(model);
// console.log(year);

// function printCar({make, model, year}){
//     console.log(make);
//     console.log(model);
//     console.log(year);
// }
// printCar(car); // try to make it an empty function call
//
// const fruits = ['orange', 'apple', 'mango'];
// const [a, c, b] = fruits;
// console.log(c);
// console.log(a);
// console.log(b);
// const [e, , d] = fruits; // weird
// console.log(d);
// }); //IIFE