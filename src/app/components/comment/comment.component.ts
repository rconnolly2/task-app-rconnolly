import { Component, Input, OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { Student } from '../../interfaces/student';
import { Comment } from '../../interfaces/comment';  
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="comment">
      <div class="comment-left">
        <img [src]="student?.profileImage" alt="Profile photo">
      </div>
      <div class="comment-right">
        <p class="comment-author">{{ student?.firstName }} {{ student?.surName }} <span>{{ comment.date | date:'dd MMM' }}</span></p>
        <p class="comment-content">{{ comment.content }}</p>
      </div>
    </div>
  `,
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input() comment!: Comment;  
  student?: Student;

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.student = this.studentService.getStudentById(this.comment.studentId);
  }
}