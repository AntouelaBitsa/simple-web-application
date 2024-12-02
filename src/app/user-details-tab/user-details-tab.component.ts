import { Component, inject, OnInit, signal } from '@angular/core';
import { catchError, single } from 'rxjs';
import { Users } from '../model/users.type';
import { ActivatedRoute } from '@angular/router';
import { ApiServiceService } from '../services/api-service.service';
import { NonNullAssert } from '@angular/compiler';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-user-details-tab',
  standalone: true,
  imports: [NgIf],
  templateUrl: './user-details-tab.component.html',
  styleUrl: './user-details-tab.component.scss'
})
export class UserDetailsTabComponent implements OnInit{
  // selectedUserId!: number;
  selectedUserId = signal<number|null>(null);
  userService = inject(ApiServiceService);
  users: any;
  userObj = signal<Users|null>(null);

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.users = this.userObj();
    this.users = {
      homeAddress: ''
    };


    this.route.params.subscribe(
      params => {
        console.log('Route Params:', params);
        const userId = params['userId'] ? +params['userId'] : null;
        console.log('userId Param:', userId);
        if(userId){
          this.userService.getUserById(userId).
          // pipe(catchError((err) => {
          //   console.log(err);
          //   throw err;
          // })).
          subscribe((user: Users) => {
            console.log('Response: ',user)
            // this.userObj.set(users);
            this.users = user;
            console.log('User Object signal',this.users);
            console.log('user home: '+ user.homeAdd.address);
            console.log('user work: '+ user.workAdd.address);
            // this.homeAddress = user?.homeAddress?.homeAddress;
            // console.log('homeAddress Object signal',this.homeAddress);
          });
        }
      }
    );

  }

}


