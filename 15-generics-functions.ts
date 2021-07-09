// Generics function
class ValueHolder<T>{
  value: T;
}

//number[] means we will return an array with numbers
const numberWrapper = (value: number): number[] => {
  return [value];
};

const booleanWrapper = (value: boolean): boolean[] => {
  return [value];
};

const stringWrapper = (value: string): string[] => {
  return [value];
};


//generic function
const valueWrapper = <T>(value: number): number[] => {
  return [value];
}

// valueWrapper<number>(10);
// valueWrapper<boolean>(true);

const value = valueWrapper < number >(90)