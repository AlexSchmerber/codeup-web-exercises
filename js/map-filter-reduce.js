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

let userLanguagesLength = users.filter(function(user) {
   return user.languages.length >= 3
});

console.log(userLanguagesLength);

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
        return namesString + ", and " + upperCaseFirst(name.name) + '.';
    } else {
        return namesString + ", " + upperCaseFirst(name.name);
    }
}, '');

console.log(userNames);



let languagesList = users.reduce((languagesString, user) => {
    if (languagesString === ''){
        return languagesString + user.languages.join(' ')
    } else {
        return languagesString + ' ' + user.languages.join(' ')
    }
}, '');
languagesList = languagesList.split(' ')
console.log(languagesList);
let uniqueLanguages = languagesList.reduce((languagesString, language) => {
    if(languagesString.includes(language + ' ')){
        return languagesString;
    } else if (languagesString === ''){
        return languagesString + language
    } else{
        return languagesString + ' ' + language
    }
}, '')
uniqueLanguages = uniqueLanguages.split(' ')
console.log(uniqueLanguages);