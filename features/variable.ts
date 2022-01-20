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

const json = '{"x": 10, "y": 20}';
const coordinates = JSON.parse(json);
console.log(coordinates); //{"x": 10, "y": 20}
