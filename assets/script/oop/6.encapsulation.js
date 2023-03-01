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

  //setter
  set make(value) {
    if (value === "") {
      console.log("tidak boleh kosong");
    }
    this._make = value;
  }
}

let myCar = new Car("tayo", "okeeee");
myCar.make = "";
console.log(myCar.make);
