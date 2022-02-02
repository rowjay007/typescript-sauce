const oldCivic = {
    name: "civic",
    year: new Date(),
    broken: true,
    summary() {
        return `Name: ${this.name}`;
    },
};
const drink = {
    color: "string",
    carbonated: true,
    sugar: 40,
    summary() {
        return `NNMy drink has ${this.sugar} grams of sugar`;
    },
};
const printSummary = (item) => {
    console.log(item.summary());
};
printSummary(oldCivic);
printSummary(drink);
