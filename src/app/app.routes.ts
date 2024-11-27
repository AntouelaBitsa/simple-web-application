import { flush } from '@angular/core/testing';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    // Home Component ready to be rendered
    path: '',
    pathMatch: 'full',
    loadComponent: () => {
    return import('./home/home.component').then((m) => m.HomeComponent);
    },
  },
  {
    // Home Component ready to be rendered
    path: 'display-users',
    loadComponent: () => {
    return import('./display-users/display-users.component').then((m) => m.DisplayUsersComponent);
    },
  },
  {
    // Home Component ready to be rendered
    path: 'register-user',
    loadComponent: () => {
    return import('./register-user/register-user.component').then((m) => m.RegisterUserComponent);
    },
  }
];
