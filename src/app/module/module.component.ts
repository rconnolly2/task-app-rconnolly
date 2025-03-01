import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModuleService } from '../module.service';
import { Module } from '../module';
import { CurrentHomeworkComponent } from '../current-homework/current-homework.component';
import { CommonModule } from '@angular/common';
import { PostComponent } from '../post/post.component';
import { PostService } from '../post.service';
import { Post } from '../post';

@Component({
  selector: 'app-module',
  standalone: true,
  imports: [CurrentHomeworkComponent, CommonModule, PostComponent],
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.css']
})
export class ModuleComponent implements OnInit {
  module?: Module;
  posts: Post[] = [];

  constructor(
    private route: ActivatedRoute,
    private moduleService: ModuleService,
    private postService: PostService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const moduleId = Number(params.get('id'));
      if (!isNaN(moduleId)) {
        this.module = this.moduleService.getModuleById(moduleId);
        if (this.module) {
          this.posts = this.postService.getPostsByModuleId(this.module.id);
        }
      }
    });
  }
}