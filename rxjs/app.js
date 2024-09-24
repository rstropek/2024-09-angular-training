"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const myNumbers = [1, 2, 3];
(0, rxjs_1.from)(myNumbers).subscribe(v => console.log(v));
const subscription = (0, rxjs_1.interval)(1000).subscribe(v => console.log(v));
setTimeout(() => subscription.unsubscribe(), 5100);
