import { Component, OnInit, Input } from '@angular/core';
import { TaskService } from '../task.service';
import { TutorService } from '../tutor.service';
import { Task } from '../task';
import { Module } from '../module';
import { Tutor } from '../tutor';
import { CommonModule } from '@angular/common';
import { TaskComponent } from '../task/task.component';

@Component({
  selector: 'app-current-homework',
  standalone: true,
  imports: [TaskComponent, CommonModule],
  templateUrl: './current-homework.component.html',
  styleUrls: ['./current-homework.component.css']
})
export class CurrentHomeworkComponent implements OnInit {
  @Input() module?: Module;
  taskModuleList: Task[] = [];
  tutor?: Tutor;
  showAllTasks = false;

  constructor(
    private taskService: TaskService,
    private tutorService: TutorService
  ) {}

  ngOnInit(): void {
    if (this.module) {
      this.loadTasksForModule();
      this.loadTutorForModule();
    }
  }

  loadTasksForModule(): void {
    if (this.module) {
      this.taskModuleList = this.taskService.getAllTasks().filter(task => 
        task.moduleId === this.module!.id && 
        (this.showAllTasks || !task.completed)
      );
    }
  }

  loadTutorForModule(): void {
    if (this.module) {
      this.tutor = this.tutorService.getTutorById(this.module.tutorId);
    }
  }

  toggleShowAllTasks(): void {
    this.showAllTasks = !this.showAllTasks;
    this.loadTasksForModule();
  }
}