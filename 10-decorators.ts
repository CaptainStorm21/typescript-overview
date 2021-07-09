// Decorator

const Component = (target: any) => {
  console.log(target)
};

@Component
class Car {
  @Component year: string;

  @Component
  drive(@Component speed: number) {
    
  }

  @Component
  get year {}
}

// component does not get called 2nd time
new Car();