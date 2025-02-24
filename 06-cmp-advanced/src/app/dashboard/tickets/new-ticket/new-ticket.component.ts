import { Component, ElementRef, ViewChild } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from "../../../shared/control/control.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent {

  // ViewChild decorator is used to access the elements in the template
  // It makes these elements available to the component class
  // You can also pass classnames and interact with the instanc ef that element. You can NOT pass css class like .form
  @ViewChild('form') form?: ElementRef<HTMLFormElement>;

  onSubmit(title: string, description: string, form: HTMLFormElement) {
    console.log(title);
    console.log(description);
    console.log(form);
    
    // Reset the form after submission using the #form template variable from the components template
    // Question mark is needed since the value might not be available at the time of the call
    // Since rest works on the form element, you need to access the nativeElement property of the form variable
    // In previous example, you just passed template variable form into the function and didn't use ViewChild at all
    this.form?.nativeElement.reset();
  }

}
