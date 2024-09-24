import { AsyncPipe } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { filter, interval, map, Observable, Subscription, tap } from 'rxjs';

@Component({
  selector: 'app-hello-rxjs',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './hello-rxjs.component.html',
  styleUrl: './hello-rxjs.component.css',
})
export class HelloRxjsComponent /*implements OnDestroy*/ {
  /*
  private subscription: Subscription;
  currentValue = -1;

  constructor() {
    const observableInterval = interval(1000);
    this.subscription = observableInterval.subscribe((value) => {
      this.currentValue = value;
      console.log('Value:', value);
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  */

  /*
  currentValue$: Observable<number> = interval(1000);
  */

  currentValue = -1;

  constructor() {
    const observableInterval = interval(1000).pipe(
      tap((value) => console.log('Original value:', value)),
      map((value) => value * 2),
      tap((value) => console.log('Doubled value', value)),
      filter((value) => value % 3 === 0),
      tap((value) => console.log('Filtered value', value)),
      takeUntilDestroyed()
    );
    observableInterval.subscribe((value) => {
      this.currentValue = value;
      console.log('Value:', value);
    });
  }
}
