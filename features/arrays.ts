//Where to use typed array
//Any time we need to represent a collection of records with some arbitrary sort order

const carMakers = ["ford", "benz", "toyota"];
const dates = [new Date(), new Date()];

const carsByMake: string[][] = [];

//Help with inference when extracting values

const car = carMakers[0];
const myCar = carMakers.pop();

//prevent incomplete values
carMakers.push(100);

//Help with 'map

carMakers.map((car: string): string => {
  return car.toLowerCase();
});

//flexible types

const importantDates: (Date | string)[] = [];
importantDates.push("2030-10-10");
importantDates.push(new Date());
