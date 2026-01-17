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

// function createEmployee({ id }: { id: number }): {
//   id: number;
//   isActive: boolean;
// } {
//   return { id: 24, isActive: id % 2 === 0 };
// }

// const first = createEmployee({ id: 1 });
// const second = createEmployee({ id: 2 });
// console.log(first, second);

// alternative

// function createStudent(student: { id: number; name: string }): void {
//   console.log(`Welcome ${student.name} with an id of ${student.id} in Class B`);
// }

// const newStudent = createStudent({ id: 23, name: "Anna" });

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
*/

// function createEmployee({ id }: { id: number }): {
//   id: number;
//   isActive: boolean;
// } {
//   return { id, isActive: id % 2 === 0 };
// }

// const first = createEmployee({ id: 1 });
// const second = createEmployee({ id: 2 });

// console.log(first, second);

// ## Type Alias

// A type alias in TypeScript is a new name or shorthand for an existing type, making it easier to reuse complex types. However, it's important to note that it doesn't create a new unique type - it's just an alias.All the same rules apply to the aliased type, including the ability to mark properties as optional or readonly.

/*Easy to use and navigate */
// type User = { id: number; name: string; isActive: boolean };

// const john: User = {
//   id: 1,
//   name: "john",
//   isActive: true,
// };
// const susan: User = {
//   id: 1,
//   name: "susan",
//   isActive: false,
// };

// function createUser(user: User): User {
//   console.log(`Hello there ${user.name.toUpperCase()} !!!`);

//   return user;
// }

// createUser(john);
// createUser(susan);

/*
## Challenge

- Define the Employee type: Create a type Employee with properties id (number), name (string), and department (string).

- Define the Manager type: Create a type Manager with properties id (number), name (string), and employees (an array of Employee).

- Create a Union Type: Define a type Staff that is a union of Employee and Manager.

- Create the printStaffDetails function: This function should accept a parameter of type Staff. Inside the function, use a type guard to check if the 'employees' property exists in the passed object. If it does, print a message indicating that the person is a manager and the number of employees they manage. If it doesn't, print a message indicating that the person is an employee and the department they belong to.

- Create Employee and Manager objects: Create two Employee objects. One named alice and second named steve. Also create a Manager object named bob who manages alice and steve.

- Test the function: Call the printStaffDetails function with alice and bob as arguments and verify the output.

*/

// type Employee = { id: number; name: string; department: string };

// type Manager = { id: number; name: string; employees: Employee[] };

// type Staff = Employee | Manager;

// const alice: Staff = {
//   id: 1,
//   name: "alice",
//   department: "HR",
// };
// const steve: Staff = {
//   id: 2,
//   name: "steve",
//   department: "IT",
// };

// const bob: Staff = {
//   id: 3,
//   name: "bob",
//   employees: [steve, alice],
// };

// function printStaffDetails(staff: Staff): void {
//   if ("employees" in staff) {
//     console.log(
//       `${staff.name} is the manager and they manage ${staff.employees.length}`
//     );
//   } else {
//     console.log(
//       `${staff.name} is an employee and they belong to the ${staff.department} department.`
//     );
//   }
// }

// printStaffDetails(alice);
// printStaffDetails(steve);
// printStaffDetails(bob);

/*
## Intersection Types
In TypeScript, an intersection type (TypeA & TypeB) is a way of combining multiple types into one. This means that an object of an intersection type will have all the properties of TypeA and all the properties of TypeB. It's a way of creating a new type that merges the properties of existing types.
*/

// type Book = { id: number; name: string; price: number };
// type DiscountedBook = Book & { discount: number };
// const book1: Book = {
//   id: 1,
//   name: "How to become a lumpiang Toge",
//   price: 150,
// };

// const book2: Book = {
//   id: 2,
//   name: "secret life of Rizal",
//   price: 200,
// };

// const discountedBook: DiscountedBook = {
//   id: 3,
//   name: "How to get money without going to job",
//   price: 100,
//   discount: 0.15,
// };

/*
## Interface - Fundamentals
- allow to setup shape for objects (only objects)

*/

// interface Book {
//   readonly isbn: number;
//   title: string;
//   author: string;
//   genre?: string;
//   printAuthor(): void;
//   printTitle(message: string): string;
//   printSomething: (someValue: number) => number;
// }

// const deepWork: Book = {
//   isbn: 123,
//   title: "Deep Work",
//   author: "cal newport",
//   genre: "self-help",
//   printAuthor() {
//     console.log(this.author);
//   },
//   printTitle(message) {
//     return `${message} ${this.title}`;
//   },

// printSomething: function (someValue) {
//   return someValue;
// },

//   printSomething: (someValue) => someValue,
// };

// deepWork.isbn = "sj"
// deepWork.printAuthor();
// console.log(deepWork.printTitle("The title of the book is"));
// console.log(deepWork.printSomething(24));

/*

## Challenge

- Start by defining an interface Computer using the interface keyword. This will serve as a blueprint for objects that will be of this type.
- Inside the interface, define the properties that the object should have. In this case, we have id, brand, ram, and storage.
- Use the readonly keyword before the id property to indicate that it cannot be changed once it's set.
- Use the ? after the storage property to indicate that this property is optional and may not exist on all objects of this type.
- Also inside the interface, define any methods that the object should have. In this case, we have upgradeRam, which is a function that takes a number and returns a number.
- Now that we have our interface, we can create an object that adheres to this interface. This object should have all the properties defined in the interface (except for optional ones, which are... optional), and the methods should be implemented.
- Finally, we can use our object. We can call its upgradeRam method to increase its RAM.

*/

// interface Computer {
//   readonly id: number;
//   brand: string;
//   ram: number;
//   storage?: number;
//   updateRam(num: number): string;
// }

// const computer1: Computer = {
//   id: 1,
//   brand: "Lenovo",
//   ram: 35,
//   updateRam(num) {
//     this.ram += num;
//     return `Your ram is increase by ${this.ram}`;
//   },
// };

// console.log(computer1.updateRam(24));
// console.log(computer1);

// ## Interface - Merging, Extend, TypeGuard

// interface Person {
//   name: string;
//   getDetails(): string;
// }

// interface Dogowner {
//   dogName: string;
//   getDogDetails(): string;
// }

// interface Person {
//   age: number;
// }

// const person: Person = {
//   name: "jerome",
//   age: 24,
//   getDetails() {
//     return `Name: ${this.name}, Age: ${this.age}`;
//   },
// };

// interface Employee extends Person {
//   employeeId: number;
// }

// const employee: Employee = {
//   employeeId: 123,
//   name: "peter",
//   age: 22,
//   getDetails() {
//     return `Name: ${this.name}, Age: ${this.age}, EmployeeId: ${this.employeeId}`;
//   },
// };

// interface Manager extends Person, Dogowner {
//   managePeople(): void;
// }

// const manager: Manager = {
//   name: "bob",
//   age: 35,
//   dogName: "rex",
//   getDetails() {
//     return `Name: ${this.name}, Age: ${this.age}, dog name: ${this.dogName}`;
//   },
//   getDogDetails() {
//     return `dog name: ${this.dogName}`;
//   },
//   managePeople() {
//     console.log(`${this.name} is the Manager.`);
//   },
// };
// console.log(person.getDetails());
// console.log(employee.getDetails());
// console.log(manager.getDogDetails());

/*
## Challenge - Part 1

- Define the Person interface Start by defining a Person interface with a name property of type string.
- Define the DogOwner interface Next, define a DogOwner interface that extends Person and adds a dogName property of type string.
- Define the Manager interface Then, define a Manager interface that extends Person and adds two methods: managePeople and delegateTasks. Both methods should have a return type of void.
- Define the getEmployee function Now, define a function called getEmployee that returns a Person, DogOwner, or Manager. Inside this function, generate a random number and use it to decide which type of object to return. If the number is less than 0.33, return a Person. If it's less than 0.66, return a DogOwner. Otherwise, return a Manager.
- Finally, create a variable called employee that can be a Person, DogOwner, or Manager, and assign it the return value of getEmployee. Then, log employee to the console.
*/

// interface Person {
//   name: string;
// }

// interface DogOwner extends Person {
//   dogName: string;
// }

// interface Manager extends Person {
//   managePeople(): void;
//   delegateTask(): void;
// }

// function getEmployee(): Manager | Person | DogOwner {
//   let randomNum = Math.random();
//   console.log(randomNum);
//   if (randomNum < 0.33) {
//     return {
//       name: "Jerome",
//     };
//   } else if (randomNum < 0.66) {
//     return {
//       name: "John",
//       dogName: "rex",
//     };
//   } else {
//     return {
//       name: "bob",
//       managePeople() {
//         console.log("I manage people");
//       },
//       delegateTask() {
//         console.log("Your task is to manage people");
//       },
//     };
//   }
// }

// const employee: Manager | Person | DogOwner = getEmployee();
// console.log(employee);

// function isManager(obj: Manager | Person | DogOwner): obj is Manager {
//   return "managePeople" in obj;
// }

// if (isManager(employee)) {
//   employee.delegateTask();
// }

/*
## Interface vs Type Alias

A type alias is a way to give a name to a type. It can represent primitive types, union types, intersection types, tuples, and any other types. Once defined, the alias can be used anywhere in place of the actual type.

Key Differences
- Type aliases can represent primitive types, union types, intersection types, tuples, etc., while interfaces are primarily used to represent the shape of an object.
*/

/*
## Tuples
In TypeScript, a Tuple is a special type that allows you to create an array where the type of a fixed number of elements is known, but need not be the same - in other words it's an array with fixed length and ordered with fixed types. This is useful when you want to group different types of values together.

Tuples are useful when you want to return multiple values from a function.

By default, tuples in TypeScript are not read-only. This means you can modify the values of the elements in the tuple.However, TypeScript does provide a way to make tuples read-only using the readonly keyword.

*/

// let person: [string, number] = ["john", 25];

// function getPerson(): [string, number] {
//   return ["john", 25];
// }

// let randomPerson = getPerson();
// console.log(randomPerson);

/*
## Enums

Enums in TypeScript allow us to define a set of named constants. Using enums can make it easier to document intent, or create a set of distinct cases.

*/

// enum ServerResponseStatus {
//   Success = 200,
//   Error = 500,
// }

// Object.values(ServerResponseStatus).forEach((value) => {
//   if (typeof value === "number") {
//     console.log(value);
//   }
// });

// console.log(ServerResponseStatus);

// interface Serverresponse {
//   result: ServerResponseStatus;
//   data: string[];
// }

// function getServerResponse(): Serverresponse {
//   return {
//     result: ServerResponseStatus.Success,
//     data: ["john", "belga"],
//   };
// }
// const response: Serverresponse = getServerResponse();
// console.log(response);

/*
## Enums - Gotcha : Reverse Mapping

In a numeric enum, TypeScript creates a reverse mapping from the numeric values to the enum member names. This means that if you assign a numeric value to an enum member, you can use that numeric value anywhere the enum type is expected.

In a string enum, TypeScript does not create a reverse mapping. This means that if you assign a string value to an enum member, you cannot use that string value anywhere the enum type is expected. You must use the enum member itself.
*/

/*
## Challenge

- Define an enum named UserRole with members Admin, Manager, and Employee.
- Define a type alias named User with properties id (number), name (string), role (UserRole), and contact (a tuple with two elements: email as string and phone as string).
- Define a function named createUser that takes a User object as its parameter and returns a User object.
- Call the createUser function with an object that matches the User type, store the result in a variable, and log the variable to the console.

*/

// enum UserRole {
//   Admin = "admin",
//   Manager = "manager",
//   Employee = "employee",
// }

// type User = {
//   id: number;
//   name: string;
//   role: UserRole;
//   contact: [email: string, phone: string];
// };

// function createUser(user: User): User {
//   return user;
// }

// const user1: User = {
//   id: 1,
//   name: "john",
//   role: UserRole.Employee,
//   contact: ["john@gmail.com", "123-456"],
// };

// console.log(createUser(user1));

/*
## Type Assertion

Type assertion in TypeScript is a way to tell the compiler what the type of an existing variable is. This is especially useful when you know more about the type of a variable than TypeScript does.

*/

// let someValue: any = "this is a string";
// let strLength: number = (someValue as string).length;

// type Bird = {
//   name: string;
// };

// let birdString = '{ "name": "Eagle" }';
// let dogString = '{ "breed": "Poodle" }';

// let birdObject = JSON.parse(birdString);
// let dogObject = JSON.parse(dogString);

// let bed = birdObject as Bird;
// let pulogoso = dogObject as Bird;

// console.log(bed.name);
// console.log(pulogoso.name);

// enum Status {
//   Pending = "pending",
//   Decline = "declined",
// }

// type User = {
//   name: string;
//   status: Status;
// };

// save Status.Pending in the DB as a string
// retrieve string from the DB

// const statusValue = "pending";

// const user: User = { name: "John", status: statusValue as Status };

/*
## Type - 'unknown'

The unknown type in TypeScript is a type-safe counterpart of the any type. It's like saying that a variable could be anything, but we need to perform some type-checking before we can use it.

"error instanceof Error" checks if the error object is an instance of the Error class.

*/

// let unknownValue: unknown;

// unknownValue = "Hello World";
// unknownValue = [12, "jerome"];
// unknownValue = 43.23556;

// if (typeof unknownValue === "number") {
//   unknownValue.toFixed(2);
// }

// function runSomeCode() {
//   const random = Math.random();
//   if (random < 0.5) {
//     throw new Error("there was an error");
//   } else {
//     throw "some error";
//   }
// }

// try {
//   runSomeCode();
// } catch (error) {
//   if (error instanceof Error) {
//     console.log(error.message);
//   } else {
//     console.log(error);
//   }
// }

/*
## Type - "never"

In TypeScript, never is a type that represents the type of values that never occur.you can't assign any value to a variable of type never.
TypeScript will give a compile error if there are any unhandled cases, helping ensure that all cases are handled.

*/

// let someValue: never = 0;

type Theme = "light" | "dark";

function checkTheme(theme: Theme): void {
  if (theme === "light") {
    console.log("light theme");
    return;
  }
  if (theme === "dark") {
    console.log("dark theme");
    return;
  }
  theme;
}

enum Color {
  Red,
  Blue,
  Green,
}

function getColorName(color: Color) {
  switch (color) {
    case Color.Red:
      return "Red";
    case Color.Blue:
      return "Blue";

    case Color.Green:
      return "Green";
    default:
      //at build time
      let unexpected: never = color;
      //at run time
      throw new Error(`Unexpected color value: ${unexpected}`);
  }
}

console.log(getColorName(Color.Red));
console.log(getColorName(Color.Blue));
console.log(getColorName(Color.Green));

/*
## Modules - Global Scope "Gotcha"

If your TypeScript files aren't modules (i.e., they don't have any import or export statements), they're treated as scripts in the global scope. In this case, declaring the same variable in two different files would cause a conflict.

tutorial.ts

```ts
let name = 'shakeAdnBake';

const susan = 'susan';

export let something = 'something';
```

actions.ts

```ts
const susan = 'susan';

export const something = 'something';
```

tsconfig.json

```json
"moduleDetection": "force",
```

- output

tsconfig.json

```json
"module": "ESNext",
```

## Modules - Imports/Exports (including types)

```ts
export function sayHello(name: string): void {
  console.log(`Hello ${name}!`);
}

export let person = 'susan';

export type Student = {
  name: string;
  age: number;
};

const newStudent: Student = {
  name: 'peter',
  age: 24,
};

export default newStudent;
```

```ts
import newStudent, { sayHello, person, type Student } from './actions';

sayHello('TypeScript');
console.log(person);
console.log(newStudent);

const anotherStudent: Student = {
  name: 'bob',
  age: 23,
};

console.log(anotherStudent);
```

## Modules - Javascript Files

When you set "allowJs": true in your tsconfig.json, TypeScript will process JavaScript files and can infer types to a certain extent based on the structure and usage of your JavaScript code.

However, TypeScript's ability to infer types from JavaScript is not as robust as when working with TypeScript files. For example, it might not be able to infer complex types or types that depend on runtime behavior.

- create example.js
- export someValue, import in tutorial

```ts
  "allowJs": true,
```

*/
