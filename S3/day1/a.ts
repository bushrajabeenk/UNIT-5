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
console.log(output);

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

//-----------------------------------------------------------------------

//another way is by using Interface
// interface
interface Pet {
  name: string;
  age: number;
  owner?: Human;
}
const dog: Pet = {
  name: "tommy",
  age: 3,
  // here owner is optional
};

// --------------------------------------------------------------------------

// inheritance - using interface
interface Animal1 {
  noOfLags: number;
  hasWings: boolean;
}
interface Dog1 extends Animal1 {
  // can have its own properties + properties
  // from Animal
  food: string;
}
const myDog1: Dog1 = {
  food: "pedigree",
  hasWings: true,
  noOfLags: 4,
  //on ctrl space, we get all the properties
  // from Dog as well as from Animal
};

//-------------------------------------------------------------------------------------------

// Composition - in type
// exact same thing as above (INHERITANCE) using types
type Animal2 = {
  noOfLags: number;
  hasWings: boolean;
};
type Dog2 = {
  food: string;
};
// Dog2 & Animal2 ia called as composition
// here both Dog2 and Animal2properties are included
const myDog2: Dog2 & Animal2 = {
  food: "pedigree",
  hasWings: true,
  noOfLags: 3,
};
// here | - OR need not take all the properties from
// both Dog2 amd Animal2, it can skip some
const myDog3: Dog2 | Animal2 = {
  food: "pedigree",
  hasWings: true,
  noOfLags: 3,
};

//---------------------------------------------------------------------------------------

// array of objects
type Dog4 = {
  food: string;
};

const myDog4: Dog4 = {
  food: "pedigree",
};

const myPets1: number[] = [1, 2, 3, 4, 5];

// creating array of objects
const myPets2: Dog4[] = [{ food: "pedigree" }];

type Animal4 = {
  noOfLags: number;
  hasWings: boolean;
};

// composition of array of objects
const myPets3: Dog4[] | Animal4[] = [{ food: "pedigree" }];
// can only store either Dog4 or Animal4


// composition of array of objects
// const myPets4: Dog4[] & Animal4[] = [{ food: "pedigree" }, {}];
// can store both Dog4 and Animal4