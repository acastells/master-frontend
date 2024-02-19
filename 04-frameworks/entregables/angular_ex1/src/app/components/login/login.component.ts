import { Component } from '@angular/core';
import { SharedModule } from '../../shared-module/shared-module.module';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [SharedModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router:Router){}

  onLogin() {
    const loggedIn = this.authService.login(this.username, this.password)

    if(loggedIn){
      this.router.navigate(["/"])
    } else {
      alert("Wrong credentials")
    }
  }
}
