import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

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
          <a routerLink="/add-class" routerLinkActive="active">🎓 Add Class</a>
        </div>
      </div>
    </nav>
  `,
  styleUrls: ['./menu-header.component.css']
})
export class HeaderMenuComponent {}
