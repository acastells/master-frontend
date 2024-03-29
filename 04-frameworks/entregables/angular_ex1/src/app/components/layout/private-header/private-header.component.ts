import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-private-header',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './private-header.component.html',
  styleUrl: './private-header.component.scss',
})
export class PrivateHeaderComponent {
  constructor(private authService: AuthService, private router: Router) {}

  username = this.authService.getUsername()

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }


}
