import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
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

  onSubmit(title: string, description: string, form: HTMLFormElement): void {
    console.log(`Title: ${title}, Description: ${description}, Form:`, form);

    // Reset the form after submission using the #form template variable from the components template
    // Question mark is needed since the value might not be available at the time of the call
    // Since rest works on the form element, you need to access the nativeElement property of the form variable
    // In previous example, you just passed template variable form into the function and didn't use ViewChild at all
    this.form?.nativeElement.reset();
  }
}
