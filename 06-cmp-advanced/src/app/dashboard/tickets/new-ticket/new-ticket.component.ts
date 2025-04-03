import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent implements AfterViewInit, OnInit {
  // ViewChild decorator is used to access the elements in the template
  // It makes these elements available to the component class
  // You can also pass classnames and interact with the instanc ef that element. You can NOT pass css class like .form
  @ViewChild('form') form?: ElementRef<HTMLFormElement>;

  @Output() add = new EventEmitter<{ title: string; ticketText: string }>();

  ngAfterViewInit(): void {
    console.log(
      'NewTicketComponent.ngAfterViewInit() - form should be available',
      this.form
    );
  }

  ngOnInit(): void {
    console.log(
      'NewTicketComponent.ngOnInit() - form might not be available yet',
      this.form
    );
  }

  onSubmit(title: string, ticketText: string, form: HTMLFormElement): void {
    // console.log(`Title: ${title}, Description: ${ticketText}, Form:`, form);

    // This method emits the submitted form data which is then used in tickets.component to add to tickets array
    this.add.emit({ title, ticketText });

    // Reset the form after submission using the #form template variable from the components template
    // Question mark is needed since the value might not be available at the time of the call
    // Since rest works on the form element, you need to access the nativeElement property of the form variable
    // In previous example, you just passed template variable form into the function and didn't use ViewChild at all
    this.form?.nativeElement.reset();

    // If you were to use two way binding, you could just set the values to empty strings
    // Above is just an example of way of doing same with template variables and nativeElement
  }
}
