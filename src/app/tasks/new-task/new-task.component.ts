import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { type NewTaskData } from '../task/task.model';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Input() enteredTitle: string = '';
  @Input() enteredSummary: string = '';
  @Input() enteredDate: string = '';
  @Output() onCancel = new EventEmitter<void>();
  @Output() add = new EventEmitter<NewTaskData>();

  // emit void event just to have an event of clicking on cancel btn
  // tasks.component listens to this event and stops displaying the modal
  onCancelClick() {
    console.log('emitting void cancel');
    this.onCancel.emit();
  }

  onSubmit() {
    this.add.emit({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate,
    });
  }
}
