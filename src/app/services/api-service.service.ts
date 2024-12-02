import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Users } from '../model/users.type';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' //this shoul be deleted when i am calling adding the service as a provider in a component or page
})
export class ApiServiceService {

  apiConnector = inject(HttpClient);
  // baseUrl = 'http://localhost:8080/';

  // Method to get all users from API
  getUsersFromAPI(): Observable<Array<Users>> {
    const endpoint = `http://localhost:8080/getUsersList`;
    return this.apiConnector.get<Array<Users>>(endpoint);
  }

  getUserById(uId: number): Observable<Users>{
    const endpoint = `http://localhost:8080/getUserById/${uId}`;
    return this.apiConnector.get<Users>(endpoint).pipe(
      map(users => ({
        ...users,
        homeAdd: {
          id: users.homeAdd.homeAddID,
          address: users.homeAdd.homeAddress,
        },
        workAdd: {
          id: users.workAdd.workAddID,
          address: users.workAdd.workAddress,
        }
      })));
  }

  registerUser(user: any): any{
    const endpoint = `http://localhost:8080/registerUser`;
    return this.apiConnector.post(endpoint, user);
  }

}
