import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from '../task.service';
import { Task } from '../task';
import { CommonModule } from '@angular/common';
import { Tutor } from '../tutor';
import { TutorService } from '../tutor.service';
import { ModuleService } from '../module.service';

@Component({
  selector: 'app-task-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-page.component.html',
  styleUrls: ['./task-page.component.css']
})
export class TaskPageComponent implements OnInit {
  task?: Task;
  tutor?: Tutor;
  taskList: Task[] = [];

  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService,
    private moduleService: ModuleService,
    private tutorService: TutorService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const taskId = Number(params.get('id'));
      if (!isNaN(taskId)) {
        this.task = this.taskService.getTaskById(taskId);
  
        if (this.task) {
          const module = this.moduleService.getModuleById(this.task.moduleId);
          
          if (module) {
            this.tutor = this.tutorService.getTutorById(module.tutorId);
          }
        }
      }
    });
  }

  markTaskAsCompleted(): void {
    if (this.task) {
      this.taskService.markTaskAsComplete(this.task.id);
      this.task = { ...this.task, completed: true };
    }
  }
}