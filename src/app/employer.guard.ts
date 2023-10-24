import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { NgToastService } from 'ng-angular-popup/lib/ng-toast.service';

@Injectable({
  providedIn: 'root'
})
export class EmployerGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router, ) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const expectedRole = route.data['expectedRole'];

    if (!this.auth.getToken()) {
      this.router.navigate(['']);
      return false;
    }
    if (this.auth.decodedToken() == expectedRole) {
      console.log(this.auth.decodedToken());
      return true;
    } else {
      alert('Only Employeer Can Post A Job')
      // this.toast.warning({detail:"WARN",summary:'Your Warn Message',duration:5000});
      // this.toast.warning({detail:"WARN",summary:'Your Warn Message',duration:5000, position: 'bottomLeft'});
      this.router.navigate(['']);
      return false;
    }
  }
}
