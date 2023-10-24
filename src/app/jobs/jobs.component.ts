import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
  search:string = '';
  jobs:any;
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.onChange()
  }

  onChange(){
    this.apiService.getAllJob().subscribe(
      (res)=>{
        this.jobs = res;
        console.log(this.jobs)
      },
      err => console.log(err)
    )
  }

}
