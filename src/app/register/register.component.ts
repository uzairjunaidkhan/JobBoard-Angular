import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerData: {
    username: String;
    email: String;
    password: String;
    role:any
    firstName: String;
    lastName: String;
    companyName: any;
    resumeURL: any;
  } = {
    username: '',
    email: '',
    password: '',
    role: 'jobSeeker',
    firstName: '',
    lastName: '',
    companyName: 'none',
    resumeURL: 'https://example.com/resume.pdf',
  };

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit() {
    this.registerData.username=this.registerData.firstName;
    console.log(this.registerData)
    this.auth.registerUser(this.registerData).subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(['/login'])
      },
      (err) => console.log(err)
    );
  }
}
