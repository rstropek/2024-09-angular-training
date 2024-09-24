import { Component } from '@angular/core';
import { demoTickets } from '../data';
import { TicketCardComponent } from '../ticket-card/ticket-card.component';
import { TimeSelectorComponent } from '../time-selector/time-selector.component';

@Component({
  selector: 'app-ticket-list',
  standalone: true,
  imports: [TicketCardComponent, TimeSelectorComponent],
  templateUrl: './ticket-list.component.html',
  styleUrl: './ticket-list.component.css'
})
export class TicketListComponent {
  tickets = demoTickets;
}
