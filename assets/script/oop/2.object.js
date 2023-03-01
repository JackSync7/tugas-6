class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
  getInfo() {
    return `this car is a ${this.make} ${this.model}`;
  }
}

let myCar = new Car("Toyota", "Supra");
console.log(myCar.getInfo());
