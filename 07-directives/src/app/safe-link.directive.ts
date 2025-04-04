import { Directive, input } from '@angular/core';

@Directive({
  selector: 'a[appSafeLink]',
  standalone: true,
  // Here you are trying to listen to click events on the host element
  host: {
    '(click)': 'onConfirmLeavePage($event)',
  },
})
export class SafeLinkDirective {
  // This is a property that will hold the query parameter value for custom attribute
  queryParam = input('defaultText');

  // Alias allows u to set the custom text right on the directive name in html
  // Both ways work but this is cleaner and simpler way
  queryParam2 = input('defaultText', { alias: 'appSafeLink' });

  constructor() {
    console.log('SafeLink directive initialized');
  }

  onConfirmLeavePage(event: MouseEvent) {
    const wantsToLeave = window.confirm(
      'Are you sure you want to leave this page?'
    );
    if (wantsToLeave) {
      // HTMLAnchorElement is a type of element that represents an anchor (<a>) element in the DOM.
      // Following a way to access host element data and modify if needed
      const address = (event.target as HTMLAnchorElement).href;
      (event.target as HTMLAnchorElement).href = address + this.queryParam2;
      console.log((event.target as HTMLAnchorElement).href);

      return;
    }

    event.preventDefault();
  }
}
