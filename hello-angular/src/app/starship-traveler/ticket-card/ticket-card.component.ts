import { Component, input } from '@angular/core';
import { Ticket } from '../data';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-ticket-card',
  standalone: true,
  imports: [DatePipe, RouterLink],
  templateUrl: './ticket-card.component.html',
  styleUrl: './ticket-card.component.css'
})
export class TicketCardComponent {
  ticket = input.required<Ticket>();
}
