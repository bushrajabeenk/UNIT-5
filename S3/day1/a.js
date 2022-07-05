var x = 5;
var y = "Hey Bushra here!";
console.log(y + x);
var arr1 = [1, "2", 3, "4", "5"];
var arr2 = ["1", "2", "3", "4", "5"];
// array of number | boolean
var arr3 = [1, true];
// array of number | string
var arr4 = [1, "4", 56];
// array of boolean only
var arr5 = [true, false];
// constructor way, usually used for or operator
var arr6 = [true, false];
// null
var a = null;
a = 5;
//undefined
var b;
b = 5;
function add(x, y) {
    return x + y;
}
var sum = function (x, y) {
    return x + y;
};
var output = add(1, 2);
// masai is of type User
var masai = {
    username: "Masaischool",
    age: 12,
    animal: {
        hasLegs: false,
        veg: true
    },
    isMarried: true
};
var Jenna = {
    username: "Jenna",
    age: 24,
    animal: {
        hasLegs: true,
        veg: true
    },
    isMarried: true
};
var dog = {
    name: "tommy",
    age: 3
};
var myDog1 = {
    food: "pedigree",
    hasWings: true,
    noOfLags: 4
};
// Dog2 & Animal2 ia called as composition
// here both Dog2 and Animal2properties are included
var myDog2 = {
    food: "pedigree",
    hasWings: true,
    noOfLags: 3
};
// here | - OR need not take all the properties from
// both Dog2 amd Animal2, it can skip some
var myDog3 = {
    food: "pedigree",
    hasWings: true,
    noOfLags: 3
};
var myDog4 = {
    food: "pedigree"
};
var myPets1 = [1, 2, 3, 4, 5];
// creating array of objects
var myPets2 = [{ food: "pedigree" }];
// composition of array of objects
var myPets3 = [{ food: "pedigree" }];
// can only store either Dog4 or Animal4
// composition of array of objects
// const myPets4: Dog4[] & Animal4[] = [{ food: "pedigree" }, {}];
// can store both Dog4 and Animal4
