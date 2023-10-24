import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private registerUrl = "http://localhost:5000/api/user/register"
  private loginUrl = "http://localhost:5000/api/user/login"

  constructor(private http: HttpClient, private router: Router) { }

  registerUser(user:any){
    return this.http.post(this.registerUrl, user)
  }

  loginUser(user){
    return this.http.post(this.loginUrl, user)
  }

  loggedIn(){
    return !!localStorage.getItem('token')
  }

  loggedOut(){
    localStorage.removeItem('token');
    this.router.navigate([''])
  }

  getToken(){
    return localStorage.getItem('token')
  }

  decodedToken(){
    const JwtHelper = new JwtHelperService();
    const token = this.getToken();
    const decoToken = JwtHelper.decodeToken(token);
    const role = decoToken.role;
    return role;  
  }

  getUserId(){
    const JwtHelper = new JwtHelperService();
    const token = this.getToken();
    const decoToken = JwtHelper.decodeToken(token);
    const userId = decoToken.userId;
    return userId;  
  }
}
