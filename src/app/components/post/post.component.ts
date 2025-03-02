import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Post } from '../../interfaces/post';
import { ModuleService } from '../../services/module.service';
import { TutorService } from '../../services/tutor.service';
import { CommentService } from '../../services/comment.service';
import { CommentComponent } from '../comment/comment.component';
import { NewCommentComponent } from '../new-comment/new-comment.component';
import { Tutor } from '../../interfaces/tutor';
import { Comment } from '../../interfaces/comment';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule, CommentComponent, NewCommentComponent],
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

        <app-new-comment 
          [postId]="post.id" 
          [studentId]="studentId" 
          (commentAdded)="loadComments()">
        </app-new-comment>
      </div>
    </div>
  `,
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() post!: Post;
  tutor?: Tutor;
  comments: Comment[] = [];
  studentId: number = 3;

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
    this.loadComments();
  }

  loadComments(): void {
    this.comments = this.commentService.getCommentsByPostId(this.post.id);
  }
}