/* class Vehicle {
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
vehicle.honk(); */
class Vehicle {
  //   color: string;
  constructor(public color: string) {
    // this.color = color;
  }

  protected honk(): void {
    console.log("beep");
  }
}

const vehicle = new Vehicle("orange");
console.log(vehicle.color);
/* class Car extends Vehicle {
  private drive(): void {
    console.log("vroom");
  }
}

const vehicle = new Vehicle();
vehicle.drive();
vehicle.honk(); */
