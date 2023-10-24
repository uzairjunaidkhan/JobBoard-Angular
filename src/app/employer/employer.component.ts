import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-employer',
  templateUrl: './employer.component.html',
  styleUrls: ['./employer.component.css']
})
export class EmployerComponent implements OnInit {

  product:any;
  constructor(private apiService: ApiService,) { }

  ngOnInit(): void {
    this.apiService.getMyJob().subscribe(
      res => {
        this.product = res;
        console.log(this.product);
      },
      err => console.log(err)
    )
  }

  onDelete(id){
    this.apiService.delJob(id).subscribe(
      (res:any) =>{
        alert("Job Deleted");
        // console.log(res)
        this.ngOnInit()
      },
      err => console.log(err)
    )
  }

}
