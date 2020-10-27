
//inline annotation
let drawPoint = (point: { x: number, y: number }){
    //...
}


drawPoint({ x: 1, y: 1 });


// we can instead use an interface
//#region interfaces
interface IPoint {
    x: number,
    y: number
}

let drawPoint2 = (point: IPoint){
    ///
}

drawPoint2({ x: 1, y: 1 });



// we can define optional properties


interface IPointWithColor {
    x: number;
    y: number;
    color?: string;
}

let drawPointWithColor = (point: IPointWithColor){
    //...
}

drawPointWithColor({ x: 1, y: 1, color: 'blue' });

//or if can call it with out color since its optional

drawPointWithColor({ x: 1, y: 1 });



// we can define  readonly properties
interface IPointWithReadOnly {
    readonly x: number;
    readonly y: number;
}

let p1: IPointWithReadOnly = { x: 1, y: 1 };
p1.x = 5; //is an error (can not assign to x because it is a read-only property)




// Describing functions signature using interfaces
//This is like a function declaration with only the parameter list and return type given. 
//Each parameter in the parameter list requires both name and type.

//name of parameters do no need to match .

interface addFunc {
    (x: number, y: number): number;
}

let sum: addFunc = (x: number, y: number) => { return x + y };

let anotherSum: addFunc = (a: number, b: number) => { return a + b };



// indexable types like objects/ arrays


//index signature number
interface StringArray {
    [index: number]: string;
}

let myArray: StringArray;
myArray = ["Bob", "Fred"];

let myStr: string = myArray[0];


//index signature string

interface Animal {
    name: string;
    age: number;
}

interface Dog extends Animal {
    breed: string;
    age: number
}