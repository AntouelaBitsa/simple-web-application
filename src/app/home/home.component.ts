import { Component, inject } from '@angular/core';
import { routes } from '../app.routes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  router = inject(Router)

  navigateToDisplayUsers(displayUsr: string) {
    this.router.navigate([displayUsr]);
  }

  navigateToRegisterUser(registerUsr: string) {
    this.router.navigate([registerUsr]);
  }

}
