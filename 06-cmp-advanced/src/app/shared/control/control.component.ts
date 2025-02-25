import {
  afterNextRender,
  afterRender,
  Component,
  ContentChild,
  ElementRef,
  HostBinding,
  HostListener,
  inject,
  Input,
  ViewEncapsulation,
} from '@angular/core';

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
    '(click)': 'onClick()',
  },
})
export class ControlComponent {
  constructor() {
    // This defines which function get called when anythig is changed in the app
    afterRender(() => {
      console.log('ControlComponent.afterRender()');
    });

    /**
     * This hook is called after the next rendering cycle is complete.
     * It is useful when you want to perform an action after the next change in the application, not immediately after the current change.
     * This can be helpful for deferring actions that should only occur once the next set of changes has been rendered.
     */
    afterNextRender(() => {
      console.log('ControlComponent.afterNextRender()');
    });
  }

  // Add class names to the host element. Similar to above in component decorator
  // @HostBinding('class') className = 'control';

  // Add event listeners to the host element. Similar to above in component decorator
  // @HostListener('click') onClick() {
  //     console.log('ControlComponent.onClick()');
  // }

  // Access the host element using ElementRef
  private element = inject(ElementRef);

  // Since both types of elements can be projected into app-control, u need to specify below
  @ContentChild('input') private control!: ElementRef<
    HTMLInputElement | HTMLTextAreaElement
  >;

  @Input({ required: true }) label!: string;

  onClick() {
    // console.log('ControlComponent.onClick()');
    // console.log(this.element);
    console.log(this.control);
  }
}
