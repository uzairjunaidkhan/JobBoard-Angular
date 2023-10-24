import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-post-job',
  templateUrl: './post-job.component.html',
  styleUrls: ['./post-job.component.css']
})
export class PostJobComponent implements OnInit {
  constructor(
    private apiService: ApiService,
    private auth: AuthService,
    // private route: ActivatedRoute
  ) {}

  data:{
    title: String, 
    description: String, 
    jobType: String, 
    location: String
    nature: String
  } = {
    title: "", 
    description: "",
    jobType: "", 
    location: "",
    nature: ""
  };

  ngOnInit(): void {
  }

  onSubmit(){
    // console.log(this.data)  
    this.apiService.addJob(this.data).subscribe(
      (res:any)=>{
        // this.jobs = res;
        console.log(res);
        alert("Job Created")
      },
      err => console.log(err)
    )
  }

}
