import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLoggedIn: boolean = false;
  private authChangedSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.isLoggedIn);

  constructor() {}

  login(username: string, password: string): boolean {
    if (username === 'admin' && password === 'test') {
      this.isLoggedIn = true;
      this.authChangedSubject.next(this.isLoggedIn);
      return true;
    } else {
      this.isLoggedIn = false;
      this.authChangedSubject.next(this.isLoggedIn);
      return false;
    }
  }

  logout(): void {
    this.isLoggedIn = false;
    this.authChangedSubject.next(this.isLoggedIn);
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }

  getAuthChangedObservable(): BehaviorSubject<boolean> {
    return this.authChangedSubject;
  }
}