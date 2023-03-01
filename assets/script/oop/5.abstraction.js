class Car {
  constructor(make, model) {
    this._make = make;
    this._model = model;
  }

  // getter
  get make() {
    return this._make;
  }

  get model() {
    return this._model;
  }
}

let myCar = new Car("tayo", "okeeee");
myCar._make = "jeri";
console.log(myCar.make);
