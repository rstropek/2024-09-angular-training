import { from, interval, Observable, Subject  } from "rxjs";

const myNumbers = [1, 2, 3];

from(myNumbers).subscribe(v => console.log(v));

const subscription = interval(1000).subscribe(v => console.log(v));
setTimeout(() => subscription.unsubscribe(), 5100);
