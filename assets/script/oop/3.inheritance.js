class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
  getInfo1() {
    return `this car is a ${this.make} ${this.model}`;
  }
}

class electricCar extends Car {
  constructor(make, model, batteryCapacity) {
    super(make, model);
    this.batteryCapacity = batteryCapacity;
  }
  getInfo() {
    return `${super.getInfo1()} it has a battery capacitu of ${
      this.batteryCapacity
    }`;
  }
}

//   let myCar = new Car("Toyota", "Supra");
//   console.log(myCar.getInfo());
let myElectricCar = new electricCar("Tesla", "Mode S", 100);
console.log(myElectricCar.getInfo());
