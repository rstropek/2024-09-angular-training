import { NgClass } from '@angular/common';
import { Component, model, signal } from '@angular/core';

export type TimeSelectorValue = 'future' | 'past';

@Component({
  selector: 'app-time-selector',
  standalone: true,
  imports: [NgClass],
  templateUrl: './time-selector.component.html',
  styleUrl: './time-selector.component.css'
})
export class TimeSelectorComponent {
  selection = model<TimeSelectorValue>('past');

  toggle(target: TimeSelectorValue) {
    this.selection.set(target);
  }
}
