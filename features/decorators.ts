class Boat {
  color: string = "red";

  get formattedColor(): string {
    return `This boats color is ${this.color}`;
  }

  @logError
  pilot(): void {
      throw new Error()
    console.log("swish");
  }
}

function logError(target: any, key: string, desc: PropertyDescriptor): void {
  console.log("Target:", target);
  console.log("Key:", key);
}
