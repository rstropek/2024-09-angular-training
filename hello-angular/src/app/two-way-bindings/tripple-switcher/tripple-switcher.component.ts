import { Component, input, model } from '@angular/core';

@Component({
  selector: 'app-tripple-switcher',
  standalone: true,
  imports: [],
  templateUrl: './tripple-switcher.component.html',
  styleUrl: './tripple-switcher.component.css'
})
export class TrippleSwitcherComponent {
  item1 = input<string>('');
  item2 = input<string>('');
  item3 = input<string>('');

  selection = model<string | undefined>(undefined);

  onClick(e: Event) {
    const element = e.target as HTMLDivElement;

    if (element.innerText === this.item1()) {
      this.selection.set(this.item1());
    } else if (element.innerText === this.item2()) {
      this.selection.set(this.item2());
    } else if (element.innerText === this.item3()) {
      this.selection.set(this.item3());
    }
  }
}
