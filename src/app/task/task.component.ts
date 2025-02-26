import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Task } from '../task';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task',
  imports: [CommonModule],
  template: `
    <a href="#" class="task">
      <p class="due-date" [ngClass]="{ 'completed': task.completed }">
        <span *ngIf="!task.completed" class="due-date-title">Due date: </span>
        {{ task.completed ? 'COMPLETED' : getFormattedWeekday() }}
      </p>
      <p id="description">{{ getFormattedTime() }} - {{ task.description }}</p>
    </a>
  `,
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input() task!: Task;

  getFormattedWeekday(): string {
    const localDate = new Date(this.task.deadline.toLocaleString('en-US', { timeZone: 'Europe/Madrid' }));
    return localDate.toLocaleDateString('en-US', { weekday: 'long' });
  }

  getFormattedTime(): string {
    return this.task.deadline.toLocaleTimeString('en-US', {
      hour: '2-digit', 
      minute: '2-digit',
      hour12: false
    });
  }
}
