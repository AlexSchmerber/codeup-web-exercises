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
});