import { Component } from '@angular/core';
import { demoTickets } from '../data';
import { TicketCardComponent } from '../ticket-card/ticket-card.component';

@Component({
  selector: 'app-ticket-list',
  standalone: true,
  imports: [TicketCardComponent],
  templateUrl: './ticket-list.component.html',
  styleUrl: './ticket-list.component.css'
})
export class TicketListComponent {
  tickets = demoTickets;
}
