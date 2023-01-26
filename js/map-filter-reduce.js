const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

let userLanguages = users.filter(function(user) {
   return user.languages.length >= 3
});
console.log(userLanguages);

let userEmails = users.map(function(user) {
    return user.email
});
console.log(userEmails);

let userYearOfExperience = users.map(function(user) {
    return user.yearsOfExperience
});

const sumYearsExperiece = userYearOfExperience.reduce((yearsSum, addedYears) => {
    return yearsSum + addedYears;
}, 0);
let average = sumYearsExperiece / users.length
console.log(average);

function upperCaseFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);;
}

const userNames = users.reduce((namesString, name) => {
    if (namesString === ''){
        return 'Your instructors are: ' + namesString + upperCaseFirst(name.name);
    } else if(name.name === users[users.length - 1].name){
        return namesString + ", and " + upperCaseFirst(name.name);
    } else {
        return namesString + ", " + upperCaseFirst(name.name);
    }
}, '');

console.log(userNames);