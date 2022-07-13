import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardGuard implements CanActivate {
  loginFlag: boolean = false;
  canActivate(): boolean {
    this.loginFlag = JSON.parse(localStorage.getItem('token')!);
    if (this.loginFlag) {
      return true;
    } else {
      alert('Please sign in first!');
      this._router.navigate(['/auth/login']);
      return false;
    }
  }
  constructor(private _router: Router) {}
}
