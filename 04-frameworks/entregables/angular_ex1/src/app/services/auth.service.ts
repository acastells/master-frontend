import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private username: string = localStorage.getItem('username') || '';
  private isLoggedIn: boolean = JSON.parse(
    localStorage.getItem('isLoggedIn') || 'false'
  );
  private authChangedSubject: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(this.isLoggedIn);

  constructor() {}

  login(username: string, password: string): boolean {
    if (username === 'master@lemoncode.net’' && password === '12345678') {
      this.username = username;
      this.isLoggedIn = true;
      localStorage.setItem('username', username);
      localStorage.setItem('isLoggedIn', 'true');
      this.authChangedSubject.next(this.isLoggedIn);
      return true;
    } else {
      this.username = "";
      this.isLoggedIn = false;
      localStorage.removeItem('isLoggedIn');
      localStorage.setItem('isLoggedIn', 'false');
      this.authChangedSubject.next(this.isLoggedIn);
      return false;
    }
  }

  logout(): void {
    this.username = "";
    this.isLoggedIn = false;
    localStorage.removeItem('isLoggedIn');
    localStorage.setItem('isLoggedIn', 'false');
    this.authChangedSubject.next(this.isLoggedIn);
  }

  isLogged(): boolean {
    return this.isLoggedIn;
  }

  getAuthChangedObservable(): BehaviorSubject<boolean> {
    return this.authChangedSubject;
  }

  getUsername(): string {
    return this.username
  }
}
