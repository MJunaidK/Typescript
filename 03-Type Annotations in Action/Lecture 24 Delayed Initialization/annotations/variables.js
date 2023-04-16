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
// When to use annotations
// 1) Function that return the 'any' type
var json = '{"x": 10,"y": 20}';
var coordinates = JSON.parse(json);
//coordinates.jagfeygfuyewgfyuewgf;
console.log(coordinates); // {x: 10,y: 20};
// 2) When we declare a variable on one line and initialize it later
var words = ['red', 'green', 'blue'];
var foundWord; // Have to define type here or give a default value like foundWord =false.
for (var z = 0; z < words.length; z++) {
    if (words[z] === 'green') {
        foundWord = true;
        console.log("found at index ".concat(z));
    }
}
