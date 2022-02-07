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
class Car extends Vehicle {
    constructor(wheels, color) {
        super(color);
        this.wheels = wheels;
    }
    drive() {
        console.log("vroom");
    }
    startDrivingProcess() {
        this.drive();
        this.honk();
    }
}
const vehicle = new Vehicle(4, "red");
vehicle.drive();
vehicle.honk();
const car = new Car();
car.startDrivingProcess();
