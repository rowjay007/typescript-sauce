import { Mappable } from "./CustomMap";
// import * as faker from "@faker-js/faker";
const { faker } = require("@faker-js/faker");
export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string =  "red";
  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }
  markerContent(): string {
    return `User Name: ${this.name}`;
  }
}
