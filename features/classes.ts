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
class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  private drive(): void {
    console.log("vroom");
  }
  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const vehicle = new Vehicle(4, "red");
vehicle.drive();
vehicle.honk();

const car = new Car();
car.startDrivingProcess();
