import { Component, OnInit } from '@angular/core';
import { DashboardItemComponent } from '../dashboard-item/dashboard-item.component';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})

// Implement OnInit interface to use ngOnInit() method
// Not required but a good practice to implement and then use the method
export class ServerStatusComponent implements OnInit {
  
  // String literal helps with typos - only 'online', 'offline' or 'unknown' are allowed
  currentStatus: 'online' | 'offline' | 'unknown' = 'online';

  // Creating interval variable to store setInterval() method
  private interval?: ReturnType<typeof setInterval>;

  constructor() {
    // Simulate server status change
    // setInterval(() => {
    //   const rnd = Math.random(); // Random number between 0 and 1
    //   if (rnd < 0.5) {
    //     this.currentStatus = 'online';
    //   } else if (rnd < 0.9) {
    //     this.currentStatus = 'offline';
    //   } else {
    //     this.currentStatus = 'unknown';
    //   }
    // }, 1000);
  }

  // This method is called when the component is initialized
  // It's better to use ngOnInit() instead of the constructor for such actions
  ngOnInit() {
    console.log('ngOnInit initialized');
    // Simulate server status change
    this.interval = setInterval(() => {
      const rnd = Math.random(); // Random number between 0 and 1
      if (rnd < 0.5) {
        this.currentStatus = 'online';
      } else if (rnd < 0.9) {
        this.currentStatus = 'offline';
      } else {
        this.currentStatus = 'unknown';
      }
    }, 1000);
  }

  // ngAfterViewInit() {
  //   console.log('ngAfterViewInit initialized');
  // }

  // Just a practice of cleaning timouts after ng destroy
  // Currently component is never destroyed so this won't work
  ngOnDestroy() {
    clearTimeout(this.interval);
  }
}
