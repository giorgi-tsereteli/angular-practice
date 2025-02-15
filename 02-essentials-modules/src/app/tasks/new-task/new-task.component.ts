import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { type NewTaskData } from '../task/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  // standalone: true,
  // imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  
  // this value is already available in parent tasks.component
  @Input({ required: true }) userId!: string;

  @Input() enteredTitle: string = '';
  @Input() enteredSummary: string = '';
  @Input() enteredDate: string = '';
  @Output() close = new EventEmitter<void>();
  
  //@Output() add = new EventEmitter<NewTaskData>();

  // following is another way of injecting service
  // it works same as constructor exmaple in tasks.component
  private tasksService = inject(TasksService);

  // emit void event just to have an event of clicking on cancel btn
  // tasks.component listens to this event and stops displaying the modal
  onCancelClick() {
    console.log('emitting void cancel');
    this.close.emit();
  }

  // this function was refactored to use service function
  // userId input var had to be created since service function
  // is using it to match tasks to user id
  /**
   * Also, submit click listener is not needed anymore.
   * close event happens on submission and data get passed right into tasks array of a specific user
   */
  onSubmit() {
    this.tasksService.addTask(
      {
        title: this.enteredTitle,
        summary: this.enteredSummary,
        date: this.enteredDate,
      },
      this.userId
    );
    this.close.emit();
  }
}
