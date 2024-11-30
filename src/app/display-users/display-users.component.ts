import { Component, inject, OnInit, signal } from '@angular/core';
import { ApiServiceService } from '../services/api-service.service';
import { catchError } from 'rxjs';
import { Users } from '../model/users.type';

@Component({
  selector: 'app-display-users',
  standalone: true,
  imports: [],
  templateUrl: './display-users.component.html',
  styleUrl: './display-users.component.scss'
})
export class DisplayUsersComponent implements OnInit{

  onUserClick(userDto: Users) {
    const uId = encodeURIComponent(userDto.userID);
    const url = `/user-details-tab?userId=${uId}`;  //maybe must change to get path variable or backend to receive query parameter
    window.open(url, '_blank');
  }
  userService = inject(ApiServiceService);
  userSignal = signal<Array<Users>>([]);

  ngOnInit(): void {
    this.userService.getUsersFromAPI().
    pipe(catchError((err) => {
      console.log(err);
      throw err;
    })).
    subscribe((users) => {
      console.log(this.userSignal);
      this.userSignal.set(users);
    });
  }
}
