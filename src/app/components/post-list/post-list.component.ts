import { Component, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post-list',
  standalone: true,
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
  imports: [CommonModule]
})
export class PostListComponent implements OnChanges {
  @Input() userId!: number;
  @Output() postSelected = new EventEmitter<number>();
  posts: any[] = [];

  constructor(private postService: PostService) {}

  ngOnChanges() {
    if (this.userId) {
      this.postService.getPosts(this.userId).subscribe(posts => {
        this.posts = posts;
        if (posts.length > 0) {
          this.postSelected.emit(posts[0].id); // ✅ Automatically select first post
        }
      });
    }
  }

  onPostClick(postId: number) {
    this.postSelected.emit(postId);
  }
}
