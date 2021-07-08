// Public and Private
class Car {
  public color: string;
  private year: number;

  constructor(color: string, year: number) {
    this.color = color;
    this.year = year;
  }

  public drive() {
    console.log('vroom vroom');
    console.log(this.year)
  }

  private howToDrive() {
    this.shiftGears();
    this.brakeCar();
  }

  private shiftGears() { };
  public brakeCar() {};
}

const myCar = new Car(
  'red',
  2000
);
myCar.drive();

console.log(myCar.color);

//error - due ot private
// console.log(myCar.year);

