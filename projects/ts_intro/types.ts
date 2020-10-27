//no type definition.
let name = "we";

//boolean
let isDone: boolean = false;


//number
//As in JavaScript, all numbers in TypeScript are either floating point values or BigIntegers. 
// These floating point numbers get the type number, while BigIntegers get the type bigint.In addition to hexadecimal and decimal literals, 
// TypeScript also supports binary and octal literals introduced in ECMAScript 2015.

let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;


//string
// to represent textual datatypes 
let color: string = "blue";
color = "red";
let sentence: string = `Hello, my color is ${color}`. //using template strings

//arrays
let list: number[] = [1, 2, 3];
let names: string[] = ["a", "b", "c"];

//Enums
//A helpful addition to the standard set of datatypes from JavaScript is the enum
//By default, enums begin numbering their members starting at 0. 
//You can change this by manually setting the value of one of its members.
//For example, we can start the previous example at 1 instead of 0:

enum Color {
    Red,
    Green,
    Blue,
}
let c: Color = Color.Green; // 1


enum Color2 {
    Red = 1,
    Green,
    Blue,
}

let d: Color2 = Color2.Green // 2


//Any
//In some situations, not all type information is available or its declaration would take an inappropriate amount of effort. 
//These may occur for values from code that has been written without TypeScript or a 3rd party library.In these cases, 
//we might want to opt - out of type checking.To do so, we label these values with the any type:
//The any type is a powerful way to work with existing JavaScript, allowing you to gradually opt-in and opt-out of type checking during compilation.

let looselyTyped: any = {};
looselyTyped.a = "";


//Void
//void is a little like the opposite of any: the absence of having any type at all. 
//You may commonly see this as the return type of functions that do not return a value:

function warnUser(): void {
    console.log("This is my warning message");
}


//Type assertions
//Sometimes you’ll end up in a situation where you’ll know more about a value than TypeScript does. 
//Usually, this will happen when you know the type of some entity could be more specific than its current type.

let someValue: unknown = "this is a string";

let strLength: number = (someValue as string).length;


//The other version is the “angle - bracket” syntax:

let someValue1: unknown = "this is a string";

let strLength2: number = (<string>someValue).length;



export { };
