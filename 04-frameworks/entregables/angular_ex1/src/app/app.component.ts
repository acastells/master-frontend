import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PublicHeaderComponent } from './components/layout/public-header/public-header.component';
import { PrivateHeaderComponent } from './components/layout/private-header/private-header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    PublicHeaderComponent,
    PrivateHeaderComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  isLoggedIn: boolean = false;

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.authService.getAuthChangedObservable().subscribe((isAuthenticated: boolean) => {
      this.isLoggedIn = isAuthenticated;
    });
  }
}
