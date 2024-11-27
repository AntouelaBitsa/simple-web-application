import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' //this shoul be deleted when i am calling adding the service as a provider in a component or page
})
export class ApiServiceService {
  // Dummy list of users
  users: Array<{ firstName: string; lastName: string }> = [
    { firstName: 'John', lastName: 'Doe' },
    { firstName: 'Jane', lastName: 'Smith' },
    { firstName: 'Alice', lastName: 'Johnson' },
    { firstName: 'Bob', lastName: 'Brown' },
    { firstName: 'Charlie', lastName: 'Davis' },
  ]

  // constructor() { }

  // Method to get all users
  getUsers() {
    return this.users;
  }

}
