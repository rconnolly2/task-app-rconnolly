import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CalendarComponent } from './calendar/calendar.component';
import { PendingTasksComponent } from './pending-tasks/pending-tasks.component';
export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'calendar', component: CalendarComponent },
    { path: 'pending-tasks', component: PendingTasksComponent },
    // { path: 'add-class', component: AddClassComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];
