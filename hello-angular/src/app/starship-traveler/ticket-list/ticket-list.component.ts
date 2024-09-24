import { Component, computed, model } from '@angular/core';
import { demoTickets } from '../data';
import { TicketCardComponent } from '../ticket-card/ticket-card.component';
import { TimeSelectorComponent, TimeSelectorValue } from '../time-selector/time-selector.component';

@Component({
  selector: 'app-ticket-list',
  standalone: true,
  imports: [TicketCardComponent, TimeSelectorComponent],
  templateUrl: './ticket-list.component.html',
  styleUrl: './ticket-list.component.css'
})
export class TicketListComponent {
  timeSelection = model<TimeSelectorValue>('future');

  tickets = computed(() => demoTickets.filter(ticket => {
    const now = new Date();
    return this.timeSelection() === 'future'
      ? ticket.date >= now
      : ticket.date < now;
  }));

  numberOfTickets = computed(() => this.tickets().length);
}
