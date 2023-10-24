import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.css']
})
export class JobDetailComponent implements OnInit {
  constructor(
    private apiService: ApiService,
    private auth: AuthService,
    private route: ActivatedRoute
  ) {}

  data:{
    applicantId: any, 
    resumeURL: String
  } = {
    applicantId: "", 
    resumeURL: "https://example1.com/resume.pdf"
  };
  userId:any;
  id: any;
  job:any;
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.findId();
    this.userId = this.auth.getUserId();
  }

  findId() {
    this.apiService.getJobId(this.id).subscribe((data) => {
      this.job = data;
      console.log(this.job);
    });
  }

  onSubmit(){
    this.data.applicantId = this.userId;
    // console.log(this.data)  
    // console.log(this.id/)  
    this.apiService.addApp(this.id, this.data).subscribe(
      (res:any)=>{
        // this.jobs = res;
        // console.log(res);
        alert(res.jobId +'\n status: '+ res.status)
      },
      err => console.log(err)
    )
  }
}
