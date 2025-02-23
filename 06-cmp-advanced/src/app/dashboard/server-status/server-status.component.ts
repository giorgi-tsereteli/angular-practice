import { Component, OnInit } from '@angular/core';
import { DashboardItemComponent } from '../dashboard-item/dashboard-item.component';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [DashboardItemComponent],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})

// Implement OnInit interface to use ngOnInit() method
// Not required but a good practice to implement and then use the method
export class ServerStatusComponent implements OnInit {
  // String literal helps with typos - only 'online', 'offline' or 'unknown' are allowed
  currentStatus: 'online' | 'offline' | 'unknown' = 'online';

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
    console.log('ServerStatusComponent initialized');
    // Simulate server status change
    setInterval(() => {
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
}
