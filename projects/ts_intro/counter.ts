export class CounterApp {

    private _counter;
    private _status;

    get counter() {
        return this._counter;
    }
    constructor(private _start: number = 0) {
        this._status = 'on';
        this._counter = _start;
    }

    increment() {
        this._counter = this._counter + 1;
    }

    decrement() {
        this._counter = this._counter - 1;
    }


    turnOff() {
        this._status = 'off';
    }

}