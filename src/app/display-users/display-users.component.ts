import { ChangeDetectorRef, Component, inject, OnInit, signal } from '@angular/core';
import { ApiServiceService } from '../services/api-service.service';
import { catchError } from 'rxjs';
import { Users } from '../model/users.type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-users',
  standalone: true,
  imports: [],
  templateUrl: './display-users.component.html',
  styleUrl: './display-users.component.scss'
})
export class DisplayUsersComponent implements OnInit{
  users: Users[] = [];
  userService = inject(ApiServiceService);
  userSignal = signal<Users[]>([]);

  constructor(private cdr: ChangeDetectorRef){}

  ngOnInit(): void {
    this.users = this.userSignal();
    console.log(this.users);

    this.userService.getUsersFromAPI().subscribe(user =>{
      this.users = user;
      console.log('this user: ',this.users);
      this.cdr.detectChanges();
      console.log('CDR: ',this.cdr);
    })
  }

  onUserClick(userId: number) {
    console.log('User clicked:', userId);
    if(!userId){
      console.error('UserID undefined or null: ', userId );
      return;
    }
    console.log('User id from onclick: ', userId);
    const uId = encodeURIComponent(userId.toString());
    console.log('uId encodedURIComponent: ', uId);
    const url = `/user-details-tab/${uId}`;
    console.log('URL to the new page witn userId: ', url);
    window.open(url, '_blank');
  }

}
