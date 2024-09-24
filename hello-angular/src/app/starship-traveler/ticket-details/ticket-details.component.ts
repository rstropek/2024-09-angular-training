import { Component, computed, input } from '@angular/core';
import { demoTickets, Ticket } from '../data';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-ticket-details',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './ticket-details.component.html',
  styleUrl: './ticket-details.component.css'
})
export class TicketDetailsComponent {
  id = input.required<string>();

  ticket = computed<Ticket>(() => demoTickets.find(ticket => ticket.id === this.id())!);
}
