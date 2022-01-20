var apple = 15;
var speed = "fast";
var hasName = true;
var nothingMuch = null;
var nothing = undefined;
//built in objects
var now = new Date();
//Arrays
var colors = ["red", "green", "blue"];
var myNumbers = [1, 2, 3, 4];
var truths = [true, true, false];
//Classes
var Car = /** @class */ (function () {
    function Car() {
    }
    return Car;
}());
var car = new Car();
//Object Literal
var point = {
    x: 10,
    y: 30
};
// function
var logNumber = function (i) {
    console.log(i);
};
//When to use annotations
// 1) Function that returns the "any" type
//Any type is just as "string" or boolean are
// Avoid variable with "any" at all costs
/* const json = '{"x": 10, "y": 20}';
const coordinates = JSON.parse(json);
console.log(coordinates); //{"x": 10, "y": 20} */
//fixing the "any" type
var json = '{"x": 10, "y": 20}';
var coordinates = JSON.parse(json);
console.log(coordinates); //{"x": 10, "y": 20}
// 2) When we declare a variable on the line
//and initiate it late
var words = ["red", "green", "blue"];
var foundedWord = false;
for (var i = 0; i < words.length; i++) {
    if (words[i] === "green") {
        foundedWord = true;
    }
}
// 3) Variable whose type cannot be inferred correctly
var numbers = [-10, -1, 12];
var numberAboveZero = false;
for (var i = 0; i < words.length; i++) {
    if (numbers[i] > 0) {
        numberAboveZero = numb;
        ers[i];
    }
}
