import { Component, DestroyRef, effect, inject, OnInit, signal } from '@angular/core';

import { interval, map } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {

constructor() {

  // effect is a function that runs when the signal changes
  effect(() => {
    console.log('Click count changed:', this.clickCount());
  }
  );
}

  clickCount = signal(0);
  private destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    const subscription =  interval(1000).pipe(
      // map is a function of a pipe()
      map((val) => val * 2),
      // filter((val) => val % 2 === 0),
      // take(5)
      // takeUntil(timer(5000))
    ).subscribe({
      // next: (val) => {console.log('Next value emitted by interval observable:', val);},
      // error: (err) => {console.error('Error emitted by observable (example http request)):', err);},
      // complete: () => {console.log('Interval observable completed');}
    }
    );

    this.destroyRef.onDestroy(() => {
      console.log('DestroyRef to clean up subscription');
      subscription.unsubscribe();
    }
    );
  }

  onClick() {
    this.clickCount.update((prevCount) => prevCount + 1);
    console.log('Click count:', this.clickCount());
  }
}
