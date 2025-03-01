import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Post } from '../post';
import { ModuleService } from '../module.service';
import { TutorService } from '../tutor.service';
import { Module } from '../module';
import { Tutor } from '../tutor';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="post" *ngIf="tutor">
      <div class="profile-card">
        <div class="profile-picture-div">
          <img [src]="tutor.profileImage" alt="Profile photo">
        </div>
        <p>{{ tutor.firstName }} {{ tutor.surName }}</p>
      </div>

      <div class="post-content">
        <p>{{ post.content }}</p>
        <img *ngIf="post.imageUrl" id="optional-image" [src]="post.imageUrl" alt="Post Image">
      </div>
    </div>
  `,
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() post!: Post;
  tutor?: Tutor;

  constructor(private moduleService: ModuleService, private tutorService: TutorService) {}

  ngOnInit(): void {
    const module = this.moduleService.getModuleById(this.post.moduleId);
    if (module) {
      this.tutor = this.tutorService.getTutorById(module.tutorId);
    }
  }
}