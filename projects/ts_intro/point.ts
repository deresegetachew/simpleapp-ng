export class Point {
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

