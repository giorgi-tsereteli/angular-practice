import { Component, input, output, Output, signal } from '@angular/core';
import { Ticket } from '../ticket.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css',
})
export class TicketComponent {
  data = input.required<Ticket>();
  close = output();
  detailsVisible = signal(false);

  onToggleDetails(): void {
    // Following allows to keep clicking button and toggling the details on and off
    this.detailsVisible.set(!this.detailsVisible());
  }

  // Emitting nothing just for practice purpose. This help to captchure the event in tickets.component
  onMarkAsCompleted() {
    this.close.emit();
  }
}
