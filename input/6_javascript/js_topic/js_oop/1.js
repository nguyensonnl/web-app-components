class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age(x) {
    return (x = this.year);
  }
}

const date = new Date();
let year = date.getFullYear();

const myCar = new Car("Ford", 2024);
console.log(myCar.age(year));
