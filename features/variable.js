<<<<<<< HEAD
var apple = 15;
var speed = "fast";
var hasName = true;
var nothingMuch = null;
var nothing = undefined;
var now = new Date();
var colors = ["red", "green", "blue"];
var myNumbers = [1, 2, 3, 4];
var truths = [true, true, false];
var Car = (function () {
    function Car() {
    }
    return Car;
}());
var car = new Car();
var point = {
    x: 10,
    y: 30,
};
var logNumber = function (i) {
    console.log(i);
};
var json = '{"x": 10, "y": 20}';
var coordinates = JSON.parse(json);
console.log(coordinates);
var words = ["red", "green", "blue"];
var foundedWord = false;
for (var i = 0; i < words.length; i++) {
=======
const apple = 15;
const speed = "fast";
const hasName = true;
const nothingMuch = null;
const nothing = undefined;
const now = new Date();
let colors = ["red", "green", "blue"];
let myNumbers = [1, 2, 3, 4];
let truths = [true, true, false];
class Car {
}
let car = new Car();
let point = {
    x: 10,
    y: 30,
};
const logNumber = (i) => {
    console.log(i);
};
const json = '{"x": 10, "y": 20}';
const coordinates = JSON.parse(json);
console.log(coordinates);
let words = ["red", "green", "blue"];
let foundedWord = false;
for (let i = 0; i < words.length; i++) {
>>>>>>> function
    if (words[i] === "green") {
        foundedWord = true;
    }
}
<<<<<<< HEAD
var numbers = [-10, -1, 12];
var numberAboveZero = false;
for (var i = 0; i < words.length; i++) {
=======
let numbers = [-10, -1, 12];
let numberAboveZero = false;
for (let i = 0; i < words.length; i++) {
>>>>>>> function
    if (numbers[i] > 0) {
        numberAboveZero = numbers[i];
    }
}
