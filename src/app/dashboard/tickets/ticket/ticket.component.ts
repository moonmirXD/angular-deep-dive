import { Component, EventEmitter, input, InputSignal, output, Output, signal } from '@angular/core';
import { Ticket } from './ticket.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css',
})
export class TicketComponent {
  close = output();
  data = input.required<Ticket>();
  visibleDetails = signal<boolean>(false);

  onToggleDetails() {
    this.visibleDetails.update((isVisible) => !isVisible);
  }

  onMarkAsCompleted() {
    this.close.emit();
  }
}
