import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  jobs:any;
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {

    this.apiService.getAllJob().subscribe(
      (res)=>{
        this.jobs = res;
        console.log(this.jobs)
      },
      err => console.log(err)
    )
  }

}
