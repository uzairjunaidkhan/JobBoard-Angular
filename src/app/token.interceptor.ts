import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  
    constructor(private auth: AuthService) {}
  
    intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
      if(!this.auth.getToken){
        return next.handle(req)
      }
      let tokenizedReq = req.clone({
        setHeaders:{
          Authorization: `Bearer ${this.auth.getToken()}`
        }
      })
      return next.handle(tokenizedReq);
    }
}
