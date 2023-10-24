import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class RoleGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

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
      this.router.navigate(['']);
      return false;
    }
  }
}
