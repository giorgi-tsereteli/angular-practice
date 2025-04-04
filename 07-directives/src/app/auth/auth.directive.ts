import {
  Directive,
  effect,
  inject,
  input,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { Permission } from './auth.model';
import { AuthService } from './auth.service';

@Directive({
  selector: '[appAuth]',
  standalone: true,
})
export class AuthDirective {
  // Purpose of this directive is to add a custom attribute to the host element
  // For example, creating a condition on p tag for which p tag will be shown or hidden

  userType = input.required<Permission>({ alias: 'appAuth' });
  private authService = inject(AuthService);

  // Following two give access to template reference and place in the dom for structural directive
  private templateRef = inject(TemplateRef);
  private viewContainer = inject(ViewContainerRef);

  /**
   * The constructor initializes a reactive effect that monitors changes in the user's permissions
   * and dynamically updates the view based on the result.
   *
   * A reactive effect is a mechanism that automatically re-runs whenever the reactive state it depends on changes.
   * In this case, it observes the `authService.activePermission()` and `userType()` values.
   *
   * This is necessary here to ensure that the view dynamically reflects the user's permissions in real-time.
   * If the user's permission matches the required user type, the template is rendered; otherwise, the view is cleared.
   */
  constructor() {
    effect(() => {
      if (this.authService.activePermission() === this.userType()) {
        this.viewContainer.createEmbeddedView(this.templateRef);
      } else {
        this.viewContainer.clear();
      }
    });
  }
}
