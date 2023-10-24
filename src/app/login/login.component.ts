import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginData: {
    email: String;
    password: String;
  } = {
    email: '',
    password: '',
  };
  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {}

    onSubmit() {
      this.auth.loginUser(this.loginData).subscribe(
        (res:any) => {
          localStorage.setItem('token', res.token);
          this.router.navigate([''])
        },
        (err) => console.log(err)
      );
      console.log(this.loginData)
    }
}
