(function() {
    "use strict";

    // create a circle object
    var circle = {
        radius: 3,

        getArea: function () {
            // TODO: complete this method
            // hint: area = pi * radius^2
            let circleArea = Math.PI * Math.pow(this.radius, 2);
            return circleArea; // TODO: return the proper value
        },

        logInfo: function (doRounding) {
            // TODO: complete this method.
            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value
            let areaOfCircle = this.getArea();
            let areaRounded = Math.round(areaOfCircle)
            if(doRounding === true){
                console.log("Area of a circle with radius: " + this.radius + ", is: " + areaRounded);
            } else{
                console.log("Area of a circle with radius: " + this.radius + ", is: " + areaOfCircle);
            }
        }
    };

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("======================================================");
    // TODO: Change the radius of the circle to 5.

    // log info about the circle
    circle.radius = 5;
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);




    //Practice

    console.log(Math.random());
    console.log(Math.random() * 9);
    console.log(Math.random() * 9 + 1);

    // rounding down, up, and to the most close whole number
    let randomNum = Math.random() * 10 + 1
    console.log(randomNum);
    console.log(Math.floor(randomNum));
    console.log(Math.ceil(randomNum));
    console.log(Math.round(randomNum));
    console.log(Math.trunc(randomNum));

    // If you want it rounded multiply and divide by the place you want it
    console.log(Math.round(3.145643 * 1000) / 1000);

    // Exponents
    console.log(Math.pow(10, 3));
    console.log(10 ** 3);

    //Square Root
    console.log(Math.sqrt(16));
    // Pi
    console.log(Math.PI);
    function roundFloat(floatNum, decimalDigit){
        floatNum = floatNum * (10 ** decimalDigit);
        Math.round(floatNum);
        floatNum = floatNum / (10 ** decimalDigit);
        return floatNum
    }
    // DOES THIS WORK??
    console.log(roundFloat(34.288735, 2));
})();