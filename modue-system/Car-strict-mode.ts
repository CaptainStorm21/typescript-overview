export class Car {
  year: number;

  constructor() {
    this.year = 2010;
  }

  //strict mode requires a paramter inside of the function to have a type
  drive(speed: number) {
    console.log(`Driving at ${speed}`)
  }
}

const myCar = new Car();
console.log(myCar.year);
//undefined

//go to tsconfig file switch "strict" to true