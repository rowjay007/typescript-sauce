class Vehicle {
    constructor(color) {
        this.color = color;
    }
    honk() {
        console.log("beep");
    }
}
const vehicle = new Vehicle("orange");
console.log(vehicle.color);
