const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
};

//Type alais
types Drink = [string, boolean, number];

const pepsi: Drink = ['brown', true, 40];
const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['brown', true, 0];

//using tuples to represent items can be confusing 
const carSpecs: [number, number] = [400, 3354]


//using object give more clarity

const carSpecs = {
    horsePower: 400,
    weight: 3354
};

