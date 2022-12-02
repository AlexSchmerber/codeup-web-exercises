(function() {
    "use strict";
    console.log("Hello from external Javascript")
    alert('Welcome to my Website!')
    let color = prompt('What is your favorite color??')
    alert(`Wow! ${color} is my favorite too! `)

    let brotherBear = prompt('How many days would you like to rent brother bear?');
    let theLittleMermaid = prompt('How many days would you like to rent Little Mermaid?');
    let Hercules = prompt('How many days would you like to rent Hercules?');

    alert('That will cost you ' + (parseInt(brotherBear) + parseInt(theLittleMermaid) + parseInt(Hercules)) * 3);
}) ();