import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Post } from '../post';
import { ModuleService } from '../module.service';
import { TutorService } from '../tutor.service';
import { Module } from '../module';
import { Tutor } from '../tutor';
import { Comment } from '../comment';
import { CommentService } from '../comment.service';
import { CommentComponent } from '../comment/comment.component';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule, CommentComponent],
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

      <div class="comment-section">
        <div *ngFor="let comment of comments">
          <app-comment [comment]="comment"></app-comment>
        </div>

        <form class="new-comment" action="" method="post">
          <input type="text" placeholder="Message..."><input type="submit" value="Send">
        </form>
      </div>
    </div>
  `,
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() post!: Post;
  tutor?: Tutor;
  comments: Comment[] = [];

  constructor(
    private moduleService: ModuleService,
    private tutorService: TutorService,
    private commentService: CommentService
  ) {}

  ngOnInit(): void {
    const module = this.moduleService.getModuleById(this.post.moduleId);
    if (module) {
      this.tutor = this.tutorService.getTutorById(module.tutorId);
    }
    this.comments = this.commentService.getCommentsByPostId(this.post.id);
  }
}