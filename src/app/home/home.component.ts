import { Component, inject } from '@angular/core';
import { Task } from '../interfaces/task';
import { TaskService } from '../services/task.service';
import { DayTaskComponent } from '../components/day-task/day-task.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [DayTaskComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  mondayTaskList: { [moduleId: number]: Task[] } = [];
  tuesdayTaskList: { [moduleId: number]: Task[] } = [];
  wednesdayTaskList: { [moduleId: number]: Task[] } = [];
  thursdayTaskList: { [moduleId: number]: Task[] } = [];
  fridayTaskList: { [moduleId: number]: Task[] } = [];
  taskService: TaskService = inject(TaskService);

  constructor() {
    this.mondayTaskList = this.taskService.getTasksByWeekDay(0);
    this.tuesdayTaskList = this.taskService.getTasksByWeekDay(1);
    this.wednesdayTaskList = this.taskService.getTasksByWeekDay(2);
    this.thursdayTaskList = this.taskService.getTasksByWeekDay(3);
    this.fridayTaskList = this.taskService.getTasksByWeekDay(4);
  }

  objectKeys(obj: { [key: number]: Task[] }): number[] {
    return Object.keys(obj).map(key => Number(key));
  }
}
