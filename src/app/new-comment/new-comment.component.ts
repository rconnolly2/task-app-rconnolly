import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CommentService } from '../comment.service';

@Component({
  selector: 'app-new-comment',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers: [CommentService],
  template: `
    <form class="new-comment" (submit)="addComment()">
      <input 
        type="text" 
        [(ngModel)]="content"
        name="content"
        placeholder="Message..." 
        required />
      <input type="submit" value="Send">
    </form>
  `,
  styleUrls: ['./new-comment.component.css']
})
export class NewCommentComponent {
  @Input() postId!: number;
  @Input() studentId!: number;
  @Output() commentAdded = new EventEmitter<void>();

  content: string = '';

  constructor(private commentService: CommentService) {}

  addComment(): void {
    if (this.content.trim()) {
      this.commentService.addComment(this.postId, this.studentId, this.content);
      this.content = '';
      this.commentAdded.emit();
    }
  }
}