import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { PrivateHeaderComponent } from '../private-header/private-header.component';
import { PublicHeaderComponent } from '../public-header/public-header.component';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    RouterOutlet,
    PublicHeaderComponent,
    PrivateHeaderComponent,
    FooterComponent,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {
  isLoggedIn: boolean = false;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService
      .getAuthChangedObservable()
      .subscribe((isAuthenticated: boolean) => {
        this.isLoggedIn = isAuthenticated;
      });
  }
}
