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

## Challenge

/* Create an array temperatures of type number[] and assign it some values. Then, try to add a string value to it.
Create an array colors of type string[] and assign it some values. Then, try to add a boolean value to it.
Create an array mixedArray of type (number | string)[] and assign it some values. Then, try to add a boolean value to it. */

let temperatures: number[] = [90, 85, 75, 60];
let colors: string[] = ["red", "blue", "orange"];
let mixedArr: (string | number)[] = ["john", 12, "belga", 14];

// ** ## Objects - Fundamentals

// * In TypeScript, an object is a collection of key-value pairs with specified types for each key, providing static type checking for properties.

let car: {brand: string, year: number} = {brand: "toyota", year: 2020}
car.brand = "ford"
// car.color = "white"

let car1: {brand: string, year: number} = {brand: "mitsubishi", year: 2022}
let book = {title: "book", cost: 20}
let pen = {title: "pen", cost: 15}
let notebook = {title: "notebook"}
let items: {readonly title: string, cost?: number}[] = [book, pen, notebook]

// items[0].title = "nen"

//** ## Challenge

/* - Create an object bike of type { brand: string, year: number } and assign it some values. Then, try to assign a string to the year property.
- Create an object laptop of type { brand: string, year: number } and try to assign an object with missing year property to it.
- Create an array products of type { title: string, price?: number }[] and assign it some values. Then, try to add an object with a price property of type string to it. 
*/

let bike: {brand: string, year: number} = {brand: "Mikasa", year: 2025};
// bike.year = "22"
let laptop: {brand: string, year?: number} = {brand: "Lenovo",}


let product1 = {title: "coke", price: 15}
let product2 = {title: "royal", price: 14}
let product3 = {title: "sparkle"}
let products: {title: string, price?: number}[] = [product1, product2, product3]
products[2].price = 13
// products[2].price = "str"

// * *## Functions - Fundamentals

// * In TypeScript, functions can have typed parameters and return values, which provides static type checking and autocompletion support.