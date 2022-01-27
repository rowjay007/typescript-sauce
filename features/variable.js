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
    if (words[i] === "green") {
        foundedWord = true;
    }
}
let numbers = [-10, -1, 12];
let numberAboveZero = false;
for (let i = 0; i < words.length; i++) {
    if (numbers[i] > 0) {
        numberAboveZero = numbers[i];
    }
}
