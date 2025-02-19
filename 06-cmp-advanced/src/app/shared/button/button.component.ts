import { Component } from '@angular/core';

@Component({
  // Important: appButton is an attribute selector. 
  // You tell angular to use this component when a button element has the appButton attribute.
  // You render the component templates depending on the selectors like class or attribute. Check official docs.
  // Part 104 from the 6th section of the course
  selector: 'button[appButton]',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {}
