import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Input } from '@angular/core';
import { Task } from '../task';
import { Tutor } from '../tutor';
import { ModuleService } from '../module.service';
import { TutorService } from '../tutor.service';
import { Module } from '../module';
import { RouterLink } from '@angular/router';
import { TaskComponent } from '../task/task.component';

@Component({
  selector: 'app-day-task',
  imports: [RouterLink, TaskComponent, CommonModule],
  templateUrl: './day-task.component.html',
  styleUrl: './day-task.component.css'
})
export class DayTaskComponent {
  @Input() taskModuleList!: Task[];
  tutor!: Tutor | undefined;
  module!: Module | undefined;

  constructor(
    private moduleService: ModuleService,
    private tutorService: TutorService
  ) {}

  ngOnInit(): void {
    this.loadTutorForModule();
  }

  loadTutorForModule(): void {
    const moduleId = this.taskModuleList[0].moduleId;
    this.module = this.moduleService.getModuleById(moduleId);

    if (this.module) {
      this.tutor = this.tutorService.getTutorById(this.module.tutorId);
    }
  }

}
