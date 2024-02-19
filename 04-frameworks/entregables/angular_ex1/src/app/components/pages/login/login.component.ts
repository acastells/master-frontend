import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [SharedModule, FormsModule, NgIf, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  error: string = '';
  form: FormGroup = new FormGroup({
    username: new FormControl('', Validators.email),
    password: new FormControl('', Validators.required),
  });

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    this.error = '';
    if (!this.form.valid) {
      this.getFormValidationErrors();
      return;
    }

    const formValue = this.form.value;
    const loggedIn = this.authService.login(
      formValue.username,
      formValue.password
    );

    if (loggedIn) {
      this.router.navigate(['/dashboard']);
    } else {
      this.error = 'Wrong credentials';
    }
  }

  getFormValidationErrors() {
    Object.keys(this.form.controls).forEach((key) => {
      const controlErrors = this.form.get(key)?.errors;
      if (controlErrors) {
        Object.keys(controlErrors).forEach((keyError) => {
          this.error += `${key} has a '${keyError}' error \n`;
        });
      }
    });
  }
}
