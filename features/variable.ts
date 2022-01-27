const apple: number = 15;
const speed: string = "fast";
const hasName: boolean = true;
const nothingMuch: null = null;
const nothing: undefined = undefined;

//built in objects
const now: Date = new Date();

//Arrays

let colors: string[] = ["red", "green", "blue"];
let myNumbers: number[] = [1, 2, 3, 4];
let truths: boolean[] = [true, true, false];

//Classes

class Car {}

let car: Car = new Car();

//Object Literal

let point: { x: number; y: number } = {
  x: 10,
  y: 30,
};

// function
const logNumber: (i: number) => void = (i: number) => {
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

const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates); //{"x": 10, "y": 20}

// 2) When we declare a variable on the line
//and initiate it late

let words = ["red", "green", "blue"];
let foundedWord = false;

for (let i = 0; i < words.length; i++) {
  if (words[i] === "green") {
    foundedWord = true;
  }
}

// 3) Variable whose type cannot be inferred correctly

let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < words.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
