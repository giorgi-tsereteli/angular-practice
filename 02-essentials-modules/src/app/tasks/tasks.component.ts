import { Component, Input, Output } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from "./new-task/new-task.component";
import { EventEmitter } from '@angular/core';
import { type NewTaskData } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  imports: [TaskComponent, NewTaskComponent],
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;
  isAddingTask:boolean = false

  // dependency injection of service into constructor
  // adding private is a shortcut which makes a property of a tasksService
  // so you don't need separate var and then assignment inside constructor
  constructor(private tasksService: TasksService) {}

  get selectedUserTasks() {
    return this.tasksService.getUserTask(this.userId);
  }

  onStartAddTask() {
    console.log('boolean display value gets changed')
    this.isAddingTask = true
  }

  onCloseAddTask() {
    console.log('task cancel event captured')
    this.isAddingTask = false
  }
}
