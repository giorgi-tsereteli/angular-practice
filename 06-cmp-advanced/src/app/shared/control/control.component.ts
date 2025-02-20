import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    // Prior, u added class names in the template each time when u used the component
    // Now, u can add class names here and they will be added to the host element
    class: 'control',
  },
})
export class ControlComponent {
  @Input({ required: true }) label!: string;
}
