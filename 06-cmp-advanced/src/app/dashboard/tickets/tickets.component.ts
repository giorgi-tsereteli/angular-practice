import { Component } from '@angular/core';
import { NewTicketComponent } from './new-ticket/new-ticket.component';
import { Ticket } from './ticket.model';
import { TicketComponent } from './ticket/ticket.component';
import { tick } from '@angular/core/testing';

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [NewTicketComponent, TicketComponent],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css',
})
export class TicketsComponent {
  // Need to specify Ticket[] that it is array of ticket type
  tickets: Ticket[] = [
    // {
    //   id: '1',
    //   title: 'Ticket 1',
    //   request: 'This is a ticket description',
    //   status: 'open',
    // },
  ];

  onAdd(ticketData: { title: string; ticketText: string }): void {
    const ticket: Ticket = {
      id: Math.random().toString(),
      title: ticketData.title,
      request: ticketData.ticketText,
      status: 'open',
    };
    this.tickets.push(ticket);
  }

  onCloseTicket(id: string) {
    // console.log('Closing ticket with id:', id);
    this.tickets = this.tickets.map((ticket) => {
      if (ticket.id === id) {
        return { ...ticket, status: 'closed' };
      }
      return ticket;
    });
  }
}
