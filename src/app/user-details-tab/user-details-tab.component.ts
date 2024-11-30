import { Component, inject, OnInit, signal } from '@angular/core';
import { catchError, single } from 'rxjs';
import { Users } from '../model/users.type';
import { ActivatedRoute } from '@angular/router';
import { ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'app-user-details-tab',
  standalone: true,
  imports: [],
  templateUrl: './user-details-tab.component.html',
  styleUrl: './user-details-tab.component.scss'
})
export class UserDetailsTabComponent implements OnInit{
  selectedUserId = signal<number|null>(null);
  userService = inject(ApiServiceService);
  userObj = signal<Users|null>(null);

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      (params) =>{
        const userId = params['userId'] ? +params['userId'] : null;
        if(userId){
          this.userService.getUserById(userId).pipe(catchError((err) => {
            console.log(err);
            throw err;
          })).
          subscribe((users) => {
            console.log(this.userObj);
            this.userObj.set(users);
          });
        }
      }
    );
  }

}
