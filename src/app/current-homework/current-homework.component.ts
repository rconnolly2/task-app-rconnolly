import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService } from '../task.service';
import { TutorService } from '../tutor.service';
import { Task } from '../task';
import { Module } from '../module';
import { Tutor } from '../tutor';
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

  constructor(
    private taskService: TaskService,
    private tutorService: TutorService
  ) {}

  ngOnInit(): void {
    if (this.module) {
      this.loadIncompleteTasksForModule();
      this.loadTutorForModule();
    }
  }

  loadIncompleteTasksForModule(): void {
    if (this.module) {
      this.taskModuleList = this.taskService.getAllTasks().filter(task => 
        task.moduleId === this.module!.id && !task.completed
      );
    }
  }

  loadTutorForModule(): void {
    if (this.module) {
      this.tutor = this.tutorService.getTutorById(this.module.tutorId);
    }
  }
}
