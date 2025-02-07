import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {

  @Output() onCancel = new EventEmitter<void>()

  onCancelClick(){
    console.log('emitting void cancel')
    this.onCancel.emit()
  }
}
