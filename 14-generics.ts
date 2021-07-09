// Generics

// Number
class NumberHolder {
  value: number;
}
// const numberHolder = new NumberHolder();
// numberHolder.value = 10;

// StringHolder
class StringHolder {
  value: string;
}
// const stringHolder = new StringHolder();
// stringHolder.value = 'This is a strong hold';


// BooleanHolder
class BooleanHolder {
  value: boolean;
}
// const booleanHolder = new BooleanHolder();
// booleanHolder.value = true;

class ValueHolder<TypeForValueProperty>{
  value: TypeForValueProperty;
}

//<number> type will be used only in this instance 
const numberHolder = new ValueHolder<number>();
numberHolder.value;

new ValueHolder<string>();
new ValueHolder<boolean>();
