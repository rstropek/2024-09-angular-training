import { Component, effect, model, OnDestroy, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TrippleSwitcherComponent } from '../tripple-switcher/tripple-switcher.component';

@Component({
  selector: 'app-two-way-demo',
  standalone: true,
  imports: [FormsModule, TrippleSwitcherComponent],
  templateUrl: './two-way-demo.component.html',
  styleUrl: './two-way-demo.component.css'
})
export class TwoWayDemoComponent implements OnDestroy {
  intervalId: any;

  changingTextSignal = signal('');
  changingTextModel = model('');

  selection = model('Burger');

  constructor() {
    effect(() => {
      console.log(this.changingTextSignal(), this.changingTextModel());
    });

    this.intervalId = setInterval(() => {
      this.changingTextSignal.set(`The time is now ${new Date().toLocaleTimeString()}`);
      this.changingTextModel.set(`The time is now ${new Date().toLocaleTimeString()}`);
    }, 5000);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }
}
