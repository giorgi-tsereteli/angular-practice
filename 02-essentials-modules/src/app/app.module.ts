import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { DatePipe } from "@angular/common";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { TasksComponent } from "./tasks/tasks.component";
import { TaskComponent } from "./tasks/task/task.component";
import { NewTaskComponent } from "./tasks/new-task/new-task.component";
import { SharedModule } from "./shared/shared.module";
import { TasksModule } from "./tasks/tasks.module";

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        UserComponent,
        // CardComponen is added as an export within SharedModule
        // All tasks related components are exported from TasksModule
    ],
    bootstrap: [AppComponent], // Bootstrap is not needed in other modules
    imports: [
        BrowserModule,
        FormsModule,
        SharedModule,
        TasksModule, // Includes imports of other modules as well as declarations of components
        DatePipe // Can be skipped as its part of BrowserModule
    ]
})
export class AppModule {

}