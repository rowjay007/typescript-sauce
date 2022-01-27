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
    if (words[i] === "green") {
        foundedWord = true;
    }
}
var numbers = [-10, -1, 12];
var numberAboveZero = false;
for (var i = 0; i < words.length; i++) {
    if (numbers[i] > 0) {
        numberAboveZero = numbers[i];
    }
}
