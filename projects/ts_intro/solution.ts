import { CounterApp } from './counter';

let app = new CounterApp();
console.log("started", app.counter);


app.increment()
console.log("after increment", app.counter);

app.increment();
app.increment();
app.increment();
app.decrement();
console.log("counter is", app.counter);


let app2 = new CounterApp(5);
console.log("started app2", app2.counter);