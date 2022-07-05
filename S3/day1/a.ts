const x: number = 5;
const y: string = "Hey Bushra here!";
console.log(y + x);

let arr1: Array<string | number> = [1, "2", 3, "4", "5"];
let arr2: string[] = ["1", "2", "3", "4", "5"];

// array of number | boolean
let arr3: Array<number | boolean> = [1, true];

// array of number | string
let arr4: Array<number | string> = [1, "4", 56];

// array of boolean only
let arr5: boolean[] = [true, false];
// constructor way, usually used for or operator
let arr6: Array<boolean> = [true, false];

// null
let a: null | number = null;
a = 5;

//undefined
let b: undefined | number;
b = 5;

function add(x: number, y: number): number {
  return x + y;
}

const sum = (x: number, y: number): number => {
  return x + y;
};

let output = add(1, 2);

type Human = {
  hasLegs: boolean;
  veg: boolean;
};

// animal is of type Human, which in turn is an object
type User = {
  username: string;
  age: number;
  isMarried: boolean;
  animal: Human;
};

// masai is of type User
const masai: User = {
  username: "Masaischool",
  age: 12,
  animal: {
    hasLegs: false,
    veg: true,
  },
  isMarried: true,
};
