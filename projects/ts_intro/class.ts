//defining a class
class Point {
    x: number;
    y: number

    draw() {
        console.log(`x: ${x} , y: ${y}`);
    }
}

//to create an object we use


//creating an object.
let pointObject = new Point();
pointObject.x = 1;
pointObject.y = 1;

pointObject.draw();




// constructors
//what if we had a few other properties in side property do we go on
// doing  pointObject.<propertyName> = '' or is there a better way of initializing objects.

//constructors are a method that are called when we create an instance of the class (a new object);
// if we dont know the values of some properties during initialization we can make them optional in the constructor using  ?

class Point2 {
    x: number;
    y: number;
    z: number;

    constructor(x: number, y: number, z?: number) {

    }


    draw() {
        console.log(`x: ${x} , y: ${y}`);
    }
}

let pointObject2 = new Point2(1, 2);

// accessors and class constructors
//public default i.e. they are accessible out side of the object/instance
//private hides : restricts access to members of certain properties or behaviors of an object
//protected

class Point3 {
    constructor(private x: number, private y: number, public z?: number) {

    }

    draw() {
        console.log(`x: ${this.x} , y: ${this.y}`);
    }
}

let pointObject3 = new Point3(1, 2, 3);



//properties:
//we can not access the private fields in out classes so we create a property to access them
//a property looks like a field from outside but is a method from the inside


//js uses camel case thats why we change X x and x to _x
class Point4 {
    constructor(private _x: number, private _y: number, public z?: number) {

    }

    //called getter
    get x() {
        return this._x;
    }

    //called setters
    set x(val: number) {
        this._x = val;
    }


    draw() {
        console.log(`x: ${this.x} , y: ${this.y}`);
    }
}

let pointObject4 = new Point4(1, 2, 3);

console.log(pointObject4.x);
pointObject4.x = 10;