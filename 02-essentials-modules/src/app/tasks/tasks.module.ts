import { NgModule } from '@angular/core';
import { TasksComponent } from './tasks.component';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [TasksComponent, TaskComponent, NewTaskComponent],
  // Above, you can only export TasksComponent since its only one used by other components in app.module
  exports: [TasksComponent, TaskComponent, NewTaskComponent],
  // This module has no knowledge of other modules in the app.module
  // You have to manually add modules, pipes and anything missing
  // In course example, DatePipe was included in CommonModule, but you just added exactly what error you saw which was date missing
  imports: [SharedModule, FormsModule, DatePipe]
})
export class TasksModule {}
