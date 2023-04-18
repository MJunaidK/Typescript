var apples = 5;
apples = 10;
var speed = 'fast';
var hasName = true;
var nothingMuch = null;
var nothing = undefined;
// built in objects
var now = new Date();
console.log(now);
// Array
var colors = ['red', 'green', 'blue'];
var myNumbers = [1, 2, 3];
var truths = [true, true, false];
// Classes
var Car = /** @class */ (function () {
    function Car() {
    }
    return Car;
}());
var car = new Car();
// Object literal
var point = {
    x: 10,
    y: 20,
    //a: 10,
};
// Function
var logNumber = function (i) {
    console.log(i);
};
