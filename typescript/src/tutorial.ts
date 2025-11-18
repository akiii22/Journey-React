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
