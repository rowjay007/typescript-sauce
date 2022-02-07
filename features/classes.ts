class Vehicle {
  drive(): void {
    console.log("chugga chugga");
  }

  honk(): void {
    console.log("beep");
  }
}


//Class Inheritance 
class Car extends Vehicle {
  drive(): void {
    console.log("vroom");
  }
}

const vehicle = new Vehicle();
vehicle.drive();
vehicle.honk();
