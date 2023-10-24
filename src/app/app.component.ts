import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jobBoard';
  constructor(public _auth: AuthService, private apiService: ApiService) {}

  logOut() {
    this._auth.loggedOut();
  }

  isShow = false;
  searchQuery = '';

  toggleDivs() {
    this.isShow = !this.isShow;
  }
  
}
