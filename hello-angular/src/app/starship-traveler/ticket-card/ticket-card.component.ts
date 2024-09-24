import { Component, input } from '@angular/core';
import { Ticket } from '../data';

@Component({
  selector: 'app-ticket-card',
  standalone: true,
  imports: [],
  templateUrl: './ticket-card.component.html',
  styleUrl: './ticket-card.component.css'
})
export class TicketCardComponent {
  ticket = input.required<Ticket>();
}
