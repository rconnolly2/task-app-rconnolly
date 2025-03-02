import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AddClassDialogComponent } from '../add-class-dialog/add-class-dialog.component';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'menu-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <nav>
      <div class="menu-options">
        <div class="menu-option">
          <a routerLink="/home" routerLinkActive="active">🏠 Home</a>
        </div>
        <div class="menu-option">
          <a routerLink="/calendar" routerLinkActive="active">📅 Calendar</a>
        </div>
        <div class="menu-option">
          <a routerLink="/pending-tasks" routerLinkActive="active">📝 Pending Tasks</a>
        </div>
        <div class="menu-option">
          <a href="javascript:void(0);" (click)="openAddClassDialog()">🎓 Add Class</a>
        </div>
      </div>
    </nav>
  `,
  styleUrls: ['./menu-header.component.css']
})
export class HeaderMenuComponent {
  constructor(private dialog: MatDialog, private taskService: TaskService) {}

  openAddClassDialog(): void {
    const dialogRef = this.dialog.open(AddClassDialogComponent, {
      width: '260px',
      height: '200px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result != null) {
        console.log('Module ID:', result);
        this.taskService.markAllTasksAsVisibleByModuleId(result);
      }
    });
  }
}