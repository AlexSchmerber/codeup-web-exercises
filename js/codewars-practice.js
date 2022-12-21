(function () {

    // Squares all digits individually of a given number
    function squareDigits(num){
        let numArray = num.toString().split('');
        let emptyArray = [];
        numArray.forEach(element => {
            emptyArray.push(element ** 2)
        });
        let result = Number(emptyArray.join(''));
        return result;
    }

    // Filter out names that aren't 4 letters
    function friend(friends){
        return friends.filter(n => n.length === 4)
    }
    //First Attempt
    function friend(friends){
        let friendList = [];
        for(let element of friends){
            if (element.length > 4 | element.length < 4){
                continue;
            } else {
                friendList.push(element)
            }
        }
        return friendList;
    }

    // Function to return true for 4 or 6 numbered pin
    function validatePIN(pin) {
        return /^(\d{4}|\d{6})$/.test(pin)
    }
    //First Attempt
    function validatePIN (pin) {
        if (isNaN(pin) == true) {
            return false;
        } else if (pin.indexOf('.', '-', ' ', '+') !== -1 || pin.indexOf('-') !== -1 || pin.indexOf(' ') !== -1 || pin.indexOf('+') !== -1){
            return false;
        } else if(pin.trim() !== pin) {
            return false;
        }else if (pin.length == 4 || pin.length == 6) {
            return true;
        }else {
            return false;
        }
    }

    // Function returns true for numbers that have a square root whole number
    function isSquare(n) {
        return Math.sqrt(n) % 1 === 0;
    }
    //First attempt
    function isSquare(n) {
        return Math.sqrt(n) % 1 === 0;
    }
});