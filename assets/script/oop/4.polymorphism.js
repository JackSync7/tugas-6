class Vehicle {
  drive() {
    return "the Vehicle is Driving...";
  }
}

class Car extends Vehicle {
  drive() {
    return "the Car is Driving ...";
  }
}

class ElectricCar extends Vehicle {
  drive() {
    return "the electric car is driving silently...";
  }
}
let myCar = new ElectricCar();
console.log(myCar.drive());
