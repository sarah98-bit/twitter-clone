import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-select',
  standalone: true,
  templateUrl: './user-select.component.html',
  styleUrls: ['./user-select.component.css'],
  imports: [CommonModule, FormsModule]
})
export class UserSelectComponent implements OnInit {
  users: any[] = [];
  selectedUserId: number = 1;

  @Output() userSelected = new EventEmitter<number>();

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
      this.selectedUserId = users.length > 0 ? users[0].id : 1;  // ✅ Default to first user
      this.userSelected.emit(this.selectedUserId); // Emit default user selection
    });
  }

  onUserChange() {
    this.userSelected.emit(this.selectedUserId);
  }
}
