import { Component, OnInit, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { CommonModule } from '@angular/common';
import { ModuleFilterComponent } from '../components/module-filter/module-filter.component';
import { Module } from '../interfaces/module';
import { Task } from '../interfaces/task';
import { TaskService } from '../services/task.service';
import { DayTaskComponent } from '../components/day-task/day-task.component';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
  standalone: true,
  imports: [
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    CommonModule,
    ModuleFilterComponent,
    DayTaskComponent
  ]
})
export class CalendarComponent implements OnInit {
  selected: Date | null = new Date();
  selectedModules: Module[] = [];
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

  ngOnInit(): void {
    console.log("Fecha seleccionada:", this.selected);
    console.log("Módulos filtrados:", this.selectedModules);
  }

  updateSelectedWeek() {
    if (this.selected) {
      this.mondayTaskList = this.taskService.getTasksByWeekDayAndModules(this.selected, 0, this.selectedModules);
      this.tuesdayTaskList = this.taskService.getTasksByWeekDayAndModules(this.selected, 1, this.selectedModules);
      this.wednesdayTaskList = this.taskService.getTasksByWeekDayAndModules(this.selected, 2, this.selectedModules);
      this.thursdayTaskList = this.taskService.getTasksByWeekDayAndModules(this.selected, 3, this.selectedModules);
      this.fridayTaskList = this.taskService.getTasksByWeekDayAndModules(this.selected, 4, this.selectedModules);
    }
  }

  onDateSelected(date: Date): void {
    this.selected = date;
    this.updateSelectedWeek();
  }

  onModulesUpdated(modules: Module[]): void {
    setTimeout(() => {
      this.selectedModules = modules;
      this.updateSelectedWeek();
    }, 0);
  }
}