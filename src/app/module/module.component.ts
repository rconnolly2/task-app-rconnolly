import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModuleService } from '../module.service';
import { Module } from '../module';
import { CurrentHomeworkComponent } from '../current-homework/current-homework.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-module',
  imports: [CurrentHomeworkComponent, CommonModule],
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.css']
})
export class ModuleComponent implements OnInit {
  module?: Module;

  constructor(
    private route: ActivatedRoute,
    private moduleService: ModuleService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const moduleId = Number(params.get('id'));
      if (!isNaN(moduleId)) {
        this.module = this.moduleService.getModuleById(moduleId);
      }
    });
  }
}