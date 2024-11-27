import { Component, inject, OnInit, signal } from '@angular/core';
import { ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'app-display-users',
  standalone: true,
  imports: [],
  templateUrl: './display-users.component.html',
  styleUrl: './display-users.component.scss'
})
export class DisplayUsersComponent implements OnInit{

  userService = inject(ApiServiceService);
  userSignal = signal<Array<{ firstName: string; lastName: string }>>([]);

  ngOnInit(): void {
    this.userSignal.set(this.userService.users);
    console.log(this.userService.getUsers);
  }
}
