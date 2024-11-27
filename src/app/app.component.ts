import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  template: `
    <app-header/>
    <main>
      <router-outlet/>
    </main>
  `,
  styles: [
    `
      main {
        padding: 16px;
      }
    `
  ],
})
export class AppComponent {
  title = 'simple-web-application';
}
