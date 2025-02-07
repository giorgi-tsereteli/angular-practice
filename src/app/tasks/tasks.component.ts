import { Component, Input, Output } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from "./new-task/new-task.component";
import { EventEmitter } from '@angular/core';
import { type NewTaskData } from './task/task.model';

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
  @Output() addNewTask = new EventEmitter<void>();
  isAddingTask:boolean = false

  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ];

  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.userId);
  }

  onCompleteTask(id: string) {
    // filter again the output of the filter so completed task is not part of it
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  onStartAddTask() {
    console.log('boolean display value gets changed')
    this.isAddingTask = true
  }

  onCancelAddTask() {
    console.log('task cancel event captured')
    this.isAddingTask = false
  }

  onAddTask(taskData : NewTaskData) {
    this.tasks.unshift({
      // id needs to be unique, so its randomly generated
      id: new Date().getTime().toString(),
      // userId is know because you already need it in order to have add new task popup
      // you just assign expected object key the known value
      userId: this.userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date
    })
    console.log('Newly added task:\n', this.tasks[0])
    this.isAddingTask = false // just to close modal after adding the task
  }
}
