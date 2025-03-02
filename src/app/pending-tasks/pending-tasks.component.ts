import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../task';
import { ModuleService } from '../module.service';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pending-tasks',
  standalone: true,
  template: `
    <div class="filters">
      <mat-select [(ngModel)]="statusFilter" (selectionChange)="filterTasks()">
        <mat-option value="all">All Tasks</mat-option>
        <mat-option value="completed">Completed Tasks</mat-option>
        <mat-option value="pending">Pending Tasks</mat-option>
      </mat-select>
    </div>

    <div *ngFor="let task of filteredTasks" class="task-card-container">
      <mat-card class="task-card">
        <mat-card-header>
          <mat-card-title>{{ task.name }}</mat-card-title>
          <mat-card-subtitle>{{ task.description }}</mat-card-subtitle>
        </mat-card-header>
        <mat-card-content>
          <div class="task-details">
            <p><strong>Status:</strong> {{ task.completed ? 'Completed' : 'Pending' }}</p>
            <p><strong>Deadline:</strong> {{ task.deadline | date:'short' }}</p>
            <p><strong>Module:</strong> {{ getModuleName(task.moduleId) }}</p>
            <p><strong>Grade:</strong> {{ task.grade || 'Not assigned' }}</p>
          </div>
        </mat-card-content>
        <mat-card-actions>
          <button mat-button (click)="viewTaskDetails(task.id)">View Task</button>
        </mat-card-actions>
      </mat-card>
    </div>
  `,
  styleUrls: ['./pending-tasks.component.css'],
  imports: [MatCardModule, MatIconModule, MatButtonModule, CommonModule, MatSelectModule, MatOptionModule, FormsModule]
})
export class PendingTasksComponent implements OnInit {
  tasks: Task[] = [];
  filteredTasks: Task[] = [];
  statusFilter: 'all' | 'completed' | 'pending' = 'pending';

  constructor(
    private taskService: TaskService,
    private moduleService: ModuleService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.tasks = this.taskService.getAllTasks();
    this.filteredTasks = this.tasks;
  }

  getModuleName(moduleId: number): string {
    const module = this.moduleService.getModuleById(moduleId);
    return module ? module.name : 'Unknown Module';
  }

  viewTaskDetails(taskId: number): void {
    this.router.navigate([`/task/${taskId}`]);
  }

  filterTasks(): void {
    if (this.statusFilter === 'all') {
      this.filteredTasks = this.tasks;
    } else {
      const isCompleted = this.statusFilter === 'completed';
      this.filteredTasks = this.tasks.filter(task => task.completed === isCompleted);
    }
  }
}