import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { CommonModule } from '@angular/common';
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
  ]
})
export class CalendarComponent {
  selected: Date | null = null;
  selectedWeek: { start: Date, end: Date } | null = null;

  onDateSelected(event: MatDatepickerInputEvent<Date>): void {
    const date = event.value;
    this.selected = date;
    if (date) {
      this.selectedWeek = this.getWeekRange(date);
    }
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