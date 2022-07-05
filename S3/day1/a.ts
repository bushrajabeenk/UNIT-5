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

// CUSTOM TYPES

type Human = {
  hasLegs: boolean;
  veg: boolean;
};

// animal is of type Human, which in turn is an object
type User = {
  username: string;
  age?: number;
  isMarried: boolean;
  animal: Human;
  salary?: number;
  // if i  dont want to include salary data in
  //Jenna user, then i should give it as ?,
  // ie salary?: number, this way we dont have
  // to compulsorily give the salary data in Jenna
  // user profile, ie salary is optional
  // typescript will not give error if you give ?
  // it is considered optional
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
  // ctrl space will give all these key value pairs
};

const Jenna: User = {
  username: "Jenna",
  age: 24,
  animal: {
    hasLegs: true,
    veg: true,
  },
  isMarried: true,
};

//another way using Interface

// interface
interface Pet {
  name: string;
  age: number;
  owner?: Human;
}

// inheritance
interface Animal {
  noOfLags: number;
  hasWings: boolean;
}

interface Dog extends Animal {
  // can have its own properties + properties
  // from Animal
  food: string;
}

const myDog: Dog = {
  food: "pedigree",
  hasWings: true,
  noOfLags: 4,
  //on ctrl space, we get all the properties
  // from Dog as well as from Animal
};

const dog: Pet = {
  name: "tommy",
  age: 3,
  // here owner is optional
};
