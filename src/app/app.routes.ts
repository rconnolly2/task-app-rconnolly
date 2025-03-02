import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CalendarComponent } from './calendar/calendar.component';
import { PendingTasksComponent } from './pending-tasks/pending-tasks.component';
import { ModuleComponent } from './module/module.component';
import { TaskPageComponent } from './task-page/task-page.component';
export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'calendar', component: CalendarComponent },
    { path: 'pending-tasks', component: PendingTasksComponent },
    { path: 'module/:id', component: ModuleComponent },
    { path: 'task/:id', component: TaskPageComponent },
    // { path: 'add-class', component: AddClassComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];