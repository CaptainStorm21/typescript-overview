// Classes and properties
class Car {
  color: string;
  year: number;
  drive() {
    console.log('vroom vroom')
  }

  constructor(color: string, year: number) {
    this.color = color;
    this.year = year;
  }
}

const myCar = new Car(
  'red',
  2000
);
myCar.drive();

console.log(myCar.color);
console.log(myCar.year);



