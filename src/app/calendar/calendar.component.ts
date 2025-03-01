import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { CommonModule } from '@angular/common';
import { ModuleFilterComponent } from '../module-filter/module-filter.component';
import { Module } from '../module';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

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
    ModuleFilterComponent
  ]
})
export class CalendarComponent implements OnInit {
  selected: Date | null = new Date();
  selectedWeek: { start: Date, end: Date } | null = null;
  selectedModules: Module[] = [];

  ngOnInit(): void {
    console.log("Fecha seleccionada:", this.selected);
    console.log("Módulos filtrados:", this.selectedModules);
  }

  onDateSelected(date: Date): void {
    this.selected = date;
    if (date) {
      this.selectedWeek = this.getWeekRange(date);
      console.log("Fecha seleccionada:", this.selected);
      console.log("Rango de la semana:", this.selectedWeek);
    }
  }

  onModulesUpdated(modules: Module[]): void {
    setTimeout(() => {
      this.selectedModules = modules;
      console.log("Módulos filtrados:", this.selectedModules);
    }, 0);
  }

  getWeekRange(date: Date): { start: Date, end: Date } {
    const start = this.getStartOfWeek(date);
    const end = this.getEndOfWeek(date);
    return { start, end };
  }

  getStartOfWeek(date: Date): Date {
    const start = new Date(date);
    const day = start.getDay() || 7;
    start.setDate(start.getDate() - day + 1);
    start.setHours(0, 0, 0, 0);
    return start;
  }

  getEndOfWeek(date: Date): Date {
    const end = new Date(date);
    const day = end.getDay() || 7;
    end.setDate(end.getDate() + (7 - day));
    end.setHours(23, 59, 59, 999);
    return end;
  }
}