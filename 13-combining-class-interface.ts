// Combining interface with classes

interface Drivable {
  speed: number;
  drive(): string;
}

// class Car {
//   speed = 100;

//   drive() {
//     console.log(`I am driving at ${this.speed}`)
//   }
// }

class Car implements Drivable{
  speed = 100;

  drive() {
    return (`I am driving at ${this.speed}`)
  }
}

const myCar = new Car();

const startDriving = (vehicle: Drivable) => {
  vehicle.drive()
}

startDriving(myCar)