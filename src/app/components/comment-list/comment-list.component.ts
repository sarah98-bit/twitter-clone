import { Component, Input, OnChanges } from '@angular/core';
import { CommentService } from '../../services/comment.service';
import { Comment } from '../../models/comment.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-comment-list',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnChanges {
  @Input() postId!: number;
  comments: Comment[] = [];

  constructor(private commentService: CommentService) {}

  ngOnChanges() {
    if (this.postId) {
      this.commentService.getComments(this.postId).subscribe(comments => {
        this.comments = comments;
      });
    }
  }
}
