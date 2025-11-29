// * * Type Annotations

// * TypeScript Type Annotations allow developers to specify the types of variables, function parameters, return types, and object properties.
let awesomeName: string = "Jerome";
awesomeName = "something";
awesomeName = awesomeName.toUpperCase();
console.log(awesomeName);
// awesomeName = 20
let amount: number = 35;
amount = 12 - 1;
// amount = "pass";
// * * ## Type Inference
// * The typescript compiler can infer the type of the variable based on the literal value that is assigned when it is defined. Just make sure you are work
let isAwesome = true;
isAwesome = true;
// isAwesome = "jksajkbck"
// isAwesome = 23
// TODO: - 1. Create a variable of type string and try to invoke a string method on it. 2.Create a variable of type number and try to perform a mathematical operation on it. 3.Create a variable of type boolean and try to perform a logical operation on it. 4. Try to assign a value of a different type to each of these variables and observe the TypeScript compiler's response. 5. You can use type annotation or inference
let name: string = "jerome";
name = name.slice(1, 4);
console.log(name);
let currentYear = new Date().getFullYear();
let birthYear = 2000;
let age = currentYear - birthYear;
console.log(age);
let isAdult: boolean;
isAdult = age >= 18 ? true : false;
console.log(isAdult);

// * * ## Union Type

// * In TypeScript, a Union Type allows a variable to hold a value of multiple, distinct types, specified using the | operator. It can also be used to specify that a variable can hold one of several specific values. More examples are coming up.

let tax: number | string = 10;
tax = 12;
tax = "janice";

let requestStatus: "pending" | "success" | "denied" = "pending";
requestStatus = "success";

// * * ## Type - "any"

// * In TypeScript, the "any" type is a powerful way to work with existing JavaScript, allowing you to opt-out of type-checking and let the values pass through compile-time checks. It means a variable declared with the any type can hold a value of any type. Later will also cover - "unknown" and "never"

let notSure: any = 4;
notSure = "something else";
notSure = false;
let random;

//* * ## Practical Application of Type Annotation
const books = ["1984", "Brave New World", "Fahrenheit 451"];

let foundBook: string | undefined;

for (let book of books) {
  if (book === "1984") {
    foundBook = book;
    foundBook.length;
    break;
  }
}
// foundBook = 10;
// console.log(foundBook);
foundBook?.length;
console.log(foundBook);

let discount: number | string = 20;
discount = "20%";
// discount = true;

let orderStatus: "processing" | "shipped" | "delivered" = "processing";
orderStatus = "delivered";
// orderStatus = "cancel";

// * * ## Arrays - Fundamentals

// * In TypeScript, arrays are used to store multiple values in a single variable. You can define the type of elements that an array can hold using type annotations.

let prices: number[] = [10, 75, 65, 300];
// prices.push("st");
let fruit: string[] = ["apple", "orange"];
// fruit.push(34)
// let randomValues: [] = ["hello"]
// let emptyValues = [12, "hello"];

// let names = ["peter", "susan", 1];
let arr: (string | boolean)[] = ["apple", true];

// ## Challenge

/* Create an array temperatures of type number[] and assign it some values. Then, try to add a string value to it.
Create an array colors of type string[] and assign it some values. Then, try to add a boolean value to it.
Create an array mixedArray of type (number | string)[] and assign it some values. Then, try to add a boolean value to it. */

let temperatures: number[] = [90, 85, 75, 60];
let colors: string[] = ["red", "blue", "orange"];
let mixedArr: (string | number)[] = ["john", 12, "belga", 14];

// ** ## Objects - Fundamentals

// * In TypeScript, an object is a collection of key-value pairs with specified types for each key, providing static type checking for properties.

let car: { brand: string; year: number } = { brand: "toyota", year: 2020 };
car.brand = "ford";
// car.color = "white"

let car1: { brand: string; year: number } = { brand: "mitsubishi", year: 2022 };
let book = { title: "book", cost: 20 };
let pen = { title: "pen", cost: 15 };
let notebook = { title: "notebook" };
let items: { readonly title: string; cost?: number }[] = [book, pen, notebook];

// items[0].title = "nen"

//** ## Challenge

/* - Create an object bike of type { brand: string, year: number } and assign it some values. Then, try to assign a string to the year property.
- Create an object laptop of type { brand: string, year: number } and try to assign an object with missing year property to it.
- Create an array products of type { title: string, price?: number }[] and assign it some values. Then, try to add an object with a price property of type string to it. 
*/

let bike: { brand: string; year: number } = { brand: "Mikasa", year: 2025 };
// bike.year = "22"
let laptop: { brand: string; year?: number } = { brand: "Lenovo" };

let product1 = { title: "coke", price: 15 };
let product2 = { title: "royal", price: 14 };
let product3 = { title: "sparkle" };
let products: { title: string; price?: number }[] = [
  product1,
  product2,
  product3,
];
products[2].price = 13;
// products[2].price = "str"

//* *## Functions - Fundamentals

// * In TypeScript, functions can have typed parameters and return values, which provides static type checking and autocompletion support.

function sayHi(name: string) {
  console.log(`Hello there ${name.toUpperCase()}`);
}

// -any
// -config
// type

sayHi("jerome");
// sayHi(3);

function calculateDiscount(price: number): number {
  const hasDiscount = true;
  if (hasDiscount) {
    // return "Discount is applied";
    return price;
  }
  return price * 0.9;
}

const finalPrice = calculateDiscount(200);

//* *## Challenge

/* Create a new array of names.
- Write a new function that checks if a name is in your array. This function should take a name as a parameter and return a boolean.
- Use this function to check if various names are in your array and log the results. */

let teamMaki: string[] = ["jerome", "johnpaul", "catrina", "ann"];

function checkTeamMember(str: string): boolean {
  if (teamMaki.includes(str)) {
    console.log(str);
    return true;
  } else {
    console.log(str);
    return false;
  }
}

console.log(checkTeamMember("jerome"));
console.log(checkTeamMember("ace"));
console.log(checkTeamMember("catrina"));
console.log(checkTeamMember("johnpaul"));
console.log(checkTeamMember("ann"));

//* *## Functions - Optional and Default Parameters

/* In TypeScript, a default parameter value is an alternative to an optional parameter. When you provide a default value for a parameter, you're essentially making it optional because you're specifying a value that the function will use if no argument is provided for that parameter.

However, there's a key difference between a parameter with a default value and an optional parameter. If a parameter has a default value, and you call the function without providing an argument for that parameter, the function will use the default value. But if a parameter is optional (indicated with a ?), and you call the function without providing an argument for that parameter, the value of the parameter inside the function will be undefined.

- a function with optional parameters must work when they are not supplied
*/

function calculatePrice(price: number, discount?: number): number {
  return price - (discount || 0);
}

let priceAfterDiscount = calculatePrice(100, 20);

function calculateScore(
  initialScore: number,
  penaltyPoint: number = 0
): number {
  return initialScore - penaltyPoint;
}

let scoreAfterPenalty = calculateScore(100, 20);
let scoreWithoutPenalty = calculateScore(100);

//* *## Function - rest parameter

// In JavaScript, a rest parameter is denoted by three dots (...) before the parameter's name and allows a function to accept any number of arguments. These arguments are collected into an array, which can be accessed within the function.
function sum(message: string, ...nums: number[]): string {
  const doubled = nums.map((num) => num * 2);
  console.log(doubled);

  let total = nums.reduce((prev, acc) => {
    return prev + acc;
  }, 0);
  return `${message}  ${total}`;
}

let result = sum("The total is: ", 1, 2, 3, 4, 5);
console.log(result);

//* ## Functions - Using Union Types as Function Parameters

//* *### Challenge

// Your task is to create a function named processInput that accepts a parameter of a union type string | number. The function should behave as follows:

/* - If the input is of type number, the function should multiply the number by 2 and log the result to the console.
- If the input is of type string, the function should convert the string to uppercase and log the result to the console.*/

function processInput(random: string | number): void {
  if (typeof random === "number") {
    console.log(random * 2);
  } else {
    console.log(random.toUpperCase());
  }
}

processInput("jerome");
processInput(12);

//** ## Functions - Using Objects as Function Parameters

function createEmployee({ id }: { id: number }): {
  id: number;
  isActive: boolean;
} {
  return { id: 24, isActive: id % 2 === 0 };
}

const first = createEmployee({ id: 1 });
const second = createEmployee({ id: 2 });
console.log(first, second);

// alternative

function createStudent(student: { id: number; name: string }): void {
  console.log(`Welcome ${student.name} with an id of ${student.id} in Class B`);
}

const newStudent = createStudent({ id: 23, name: "Anna" });

/*
TypeScript only performs excess property checks on object literals where they're used, not on references to them.

In TypeScript, when you pass an object literal (like { id: 1, name: 'bob', email: 'bob@gmail.com' }) directly to a function or assign it to a variable with a specified type, TypeScript checks that the object only contains known properties. This is done to catch common errors.

However, when you pass newStudent to createStudent, TypeScript doesn't complain about the email property. This is because newStudent is not an object literal at the point where it's passed to createStudent.

*/

//! Challenge

/* Your task is to create a function named processData that accepts two parameters:

- The first parameter, input, should be a union type that can be either a string or a number.
- The second parameter, config, should be an object with a reverse property of type boolean, by default it "reverse" should be false

The function should behave as follows:

- If input is of type number, the function should return the square of the number.
- If input is of type string, the function should return the string in uppercase.
- If the reverse property on the config object is true, and input is a string, the function should return the reversed string in uppercase.

*/

function processData(
  input: number | string,
  config: { reverse: boolean } = { reverse: false }
): string | number {
  if (typeof input === "number") {
    return input ** 2;
  } else {
    return config.reverse
      ? input.toUpperCase().split("").reverse().join("")
      : input.toUpperCase();
  }
}

const data1 = processData(22, { reverse: true });
const data2 = processData("jerome");
const data3 = processData("bulosan", { reverse: true });
console.log(data1, data2, data3);
