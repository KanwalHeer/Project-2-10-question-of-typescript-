//                                           ::::::::::;EXERCISE OF TYPESCRIPT:::::::::::::
/*Type Annotations:::::::::::::

 Question: # 01::
 Declare a variable message and assign it a string value "Hello, TypeScript!". Add a type annotation to explicitly specify the type of the
 variable as string.

 Explanation:
 This exercise introduces you to type annotations in TypeScript. Type annotations allow you to explicitly specify the type of a variable,
 providing better documentation and catching errors early in development.

Basic Functions::::::::::::::
 Question: 02:
 Write a TypeScript function called add that takes two parameters x and y of type number and returns their sum. Add type annotations to the
 function parameters and return type.

Explanation:
 This exercise helps you practice defining functions with typed parameters and return types in TypeScript. It reinforces the concept of type
 safety in function declarations.

Interfaces::::::::::::::::::::
Question: 03:
 Define an interface named Person with properties name of type string and age of type number. Declare a variable person of type Person and
 assign an object with name "Alice" and age 30 to it.

Explanation:
 Interfaces allow you to define custom types in TypeScript. This exercise familiarizes you with defining interfaces and using them
to enforce a specific shape of objects.

Enums:::::::::::::::::::::::
Question: 04:
 Declare an enum named Direction with values Up, Down, Left, and Right. Create a variable direction and assign one of the enum values to it.

Explanation:
 Enums provide a way to define a set of named constants. This exercise helps you understand how to define and use enums in TypeScript.

Classes:::::::::::::
Question: 05:
 Define a TypeScript class named Car with properties make and model of type string. Add a constructor to initialize these properties.
 Create an instance of the Car class and assign values to its properties.

Explanation:
Classes are a fundamental feature of object-oriented programming. This exercise allows you to practice defining classes in TypeScript and
creating instances of those classes.

Type Guards:::::::::::::::::::::
Question: 06:
 Write a TypeScript function named isString that takes a parameter value of type any and returns true if the value is a string, otherwise false.

Explanation:
 Type guards are used to narrow down the type of a variable within a conditional block. This exercise helps you understand how to implement and
  use type guards in TypeScript.

Generics::::::::::::::::::::
Question: 07:
 Implement a generic function named identity that takes a parameter arg of type T and returns the same value. Call the function with different
 types of arguments and observe the inferred return type.

Explanation:
 Generics allow you to write reusable, type-safe functions and classes. This exercise introduces you to the concept of generics in TypeScript
 and their practical usage.

Array Operations:::::::::::::::::::::
Question: 08:
 Write a TypeScript function named sumArray that takes an array of numbers as input and returns the sum of all elements. Add type annotations to
 the function parameter and return type.

Explanation:
 This exercise helps you practice working with arrays and defining functions with typed parameters and return types in TypeScript.

Promises:::::::::::::::::
Question: 09
 Write a TypeScript function named delay that accepts a number milliseconds as input and returns a Promise that resolves after the specified
 time. Use setTimeout inside the function to delay execution.

Explanation:
 Promises are a way to handle asynchronous operations in JavaScript and TypeScript. This exercise allows you to practice working with Promises
in TypeScript.

Type Assertion::::::::::::::::::
Question:  10:
Declare a variable value of type any and assign it a string value. Use type assertion to explicitly specify the type of value as string.

Explanation:
 Type assertion is a way to tell the TypeScript compiler about the type of a variable when you know more information than TypeScript can infer.
 this exercise helps you understand how to perform type assertion in TypeScript.

These exercises cover various fundamental concepts of TypeScript and should provide a good starting point for practice. Feel free
to modify them or add more complexity as you become more comfortable with TypeScript. */
//________________________________________________________________________________________________________________________________________________
//                                               :::::::::SOLUTIONS::::::::::::
//Solution # 01:
const mesage = "Hello,'Typescript learner'";
console.log(mesage);
//Solution # 02:
function doSum(x, y) {
    const result = x + y;
    return result;
}
const sum = doSum(5, 5);
console.log(sum);
const person = { name: "Alice", age: 23 };
console.log(person);
// //Solution # 04:
var DIRECTION;
(function (DIRECTION) {
    DIRECTION[DIRECTION["RIGHT"] = 0] = "RIGHT";
    DIRECTION[DIRECTION["LEFT"] = 1] = "LEFT";
    DIRECTION[DIRECTION["UP"] = 2] = "UP";
    DIRECTION[DIRECTION["DOWN"] = 3] = "DOWN";
})(DIRECTION || (DIRECTION = {}));
console.log("___________________enum_______________");
console.log(DIRECTION);
console.log("_________index of directions_______________");
const direction = DIRECTION;
console.log(direction.DOWN);
console.log(direction.UP);
console.log(direction.RIGHT);
console.log(direction.LEFT);
console.log("____________________directions______________");
console.log(direction[DIRECTION.UP]);
console.log(direction[DIRECTION.RIGHT]);
console.log(direction[DIRECTION.DOWN]);
console.log(direction[DIRECTION.LEFT]);
const direction2 = {
    up: DIRECTION.UP,
    down: DIRECTION.DOWN,
    right: DIRECTION.RIGHT,
    left: DIRECTION.LEFT
};
console.log("index and direction of direction2");
console.log(direction2.up);
console.log(direction2.right);
console.log(direction2.left);
console.log(direction2.down);
// //Solution # 05:
class Car {
    make = "default";
    model = "eee5556ff";
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
}
const myCar = new Car("audi", "ff4433hhee");
console.log(myCar);
// //Solution # 06:
function isString(peram) {
    if (typeof peram === "string") {
        console.log(true);
    }
    else {
        console.log(false);
    }
}
isString("heer");
isString(33);
isString(false);
// //Solution # 07:
console.log("____________1st function___________");
function GeNric(a, b) {
    return a;
    b;
}
const sum1 = GeNric("kanwal", "heer");
console.log(sum1);
const sum2 = GeNric(4, 5);
console.log(sum2);
const sum3 = GeNric(true, false);
console.log(sum3);
console.log("______________2nd function______________");
function generic2(params2) {
    return [params2[1], params2[0]];
}
const result1 = generic2(["kanwal", "heer"]);
console.log(result1);
const result2 = generic2([23, 32]);
console.log(result2);
const result3 = generic2([false, true]);
console.log(result3);
console.log("_____________________3rd function_____________________");
function generic3(aarg1) {
    return [aarg1[1], aarg1[0]];
}
const answer1 = generic3(["home", "school"]);
console.log(answer1);
const answer2 = generic3([20, 40]);
console.log(answer2);
const answer3 = generic3([true, false]);
console.log(answer3);
// //Solution # 08:
function sumArray(nums) {
    return nums.reduce((sum, num) => sum + num, 0);
}
const sumOfArry = sumArray([1, 5, 4, 7, 8, 9]);
console.log(sumOfArry);
//we  also can get sum of array by this method//
function sumArray1(nums2) {
    let sumOfArray1 = 0;
    for (let index = 0; index < nums2.length; index++) {
        const element = nums2[index];
        sumOfArray1 += nums2[index];
    }
    return sumOfArray1;
}
const Summ = sumArray1([3, 4, 2, 1, 6, 7, 8]);
console.log(Summ);
//      //Solution # 09:
function delay(miliseconds) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
            console.log("heelo");
        }, miliseconds);
    });
}
const delayFunction = delay(10000);
console.log(delayFunction);
//                 //Another Promise function Example//
function PromiseFun(resolve, reject) {
    let age = 45;
    if (age > 18) {
        resolve(age);
    }
    else {
        reject("rejcted");
    }
}
const promiseData = new Promise(PromiseFun);
promiseData.then((success) => {
    console.log(`success ${success}`);
})
    .catch((err) => {
    console.log(`err ${err}`);
});
// //Solution # 10::
let value = "value";
let asrtType = value.length;
console.log(asrtType);
let asrtType1 = value.length;
// //you can assert other types too//
// // const numberValue:number = value as number;
// // const booleangValue:boolean = value as boolean;
// // const stringValue:string = value as string;
// // const arrayValue:number[] = value as number[];
// // const objectValue:object = value as object;
// //After assering types you can apply different methods like the below//
// // Asserting `value` to a string
// let strValue: string = value as string;
// console.log(strValue.length);  // Accessing string-specific method `.length`
// // Asserting `value` to a number
// let numValue: number = value as number;
// console.log(numValue.toFixed(2));  // Using number-specific method `.toFixed()`
// // Asserting `value` to a boolean
// let boolValue: boolean = value as boolean;  // No specific methods for boolean
// // Asserting `value` to an array of numbers
// let numArrayValue: number[] = value as number[];  // Array-specific methods can be used
// // Asserting `value` to an object
// let objValue: object = value as object;  // Generic object methods can be used
// Generic object methods can be used like this:
class container {
    box;
    constructor(box) {
        this.box = value;
    }
    getValueOfBox() {
        return this.box;
    }
}
const Container = new container(45);
const Container1 = new container("Good");
const Container2 = new container(true);
console.log(Container.getValueOfBox());
//Another Example::
class Friend {
    bestfriend;
    goodFriend;
    justFriend;
    constructor(bestfriend, goodFriend, justFriend) {
        this.bestfriend = bestfriend;
        this.goodFriend = goodFriend,
            this.justFriend = justFriend;
    }
    callFriend() {
        return this.bestfriend, this.goodFriend, this.justFriend;
    }
}
const myFriend = new Friend("Rabia", "mahnoor", "sara");
const friendNumber = new Friend(4, 5, 6);
const isBestFriend = new Friend(true, false, false);
console.log(myFriend.callFriend());
console.log(friendNumber.callFriend());
console.log(isBestFriend.callFriend());
export {};
//                                          **********************************************
