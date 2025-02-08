import { Injectable } from '@angular/core';
import { type NewTaskData } from './task/task.model';

/**
 * The @Injectable decorator in Angular is used to mark a class as available to be provided and
 * injected as a dependency. The { providedIn: 'root' } syntax specifies that the service should
 * be provided in the root injector, making it available application-wide.
 */
@Injectable({ providedIn: 'root' })
export class TasksService {
  // constructor was added here to handle browser local storage
  constructor() {
    const tasks = localStorage.getItem('tasks');

    // if tasks were stored in browser
    if (tasks) {
      this.tasks = JSON.parse(tasks);
    }
  }

  private tasks = [
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

  getUserTask(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }

  // this was a function in tasks.component but is moved to service
  // since userId is not present in this class, it needs to be passed here
  addTask(taskData: NewTaskData, userId: string) {
    this.tasks.unshift({
      // id needs to be unique, so its randomly generated
      id: new Date().getTime().toString(),
      // userId is know because you already need it in order to have add new task popup
      // you just assign expected object key the known value
      userId: userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date,
    });

    // store changes in the browser storage
    this.saveTasks();
  }

  removeTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.saveTasks();
  }

  // helper function to store changes to tasks array in the browser local storage
  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
