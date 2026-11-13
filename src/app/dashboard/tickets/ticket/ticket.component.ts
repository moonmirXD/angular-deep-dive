import { Component, input, InputSignal, signal } from '@angular/core';
import { Ticket } from './ticket.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css',
})
export class TicketComponent {
  data = input.required<Ticket>();
  visibleDetails = signal<boolean>(false);

  onToggleDetails() {
    this.visibleDetails.update((isVisible) => !isVisible);
  }
}
