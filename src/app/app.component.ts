import { Component } from '@angular/core';import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserSelectComponent } from './components/user-select/user-select.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { CommentListComponent } from './components/comment-list/comment-list.component';
import { PostService } from './services/post.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports:[
    UserSelectComponent,
    PostListComponent,
    CommentListComponent,
    CommonModule,
    FormsModule,
  
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedUserId: number = 1;
  selectedPostId: number | null = null;

  onUserSelected(userId: number) {
    this.selectedUserId = userId;
    this.selectedPostId = null; // Reset post selection when user changes
  }

  onPostSelected(postId: number) {
    this.selectedPostId = postId;
  }
}
