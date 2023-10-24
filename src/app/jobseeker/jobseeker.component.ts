import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-jobseeker',
  templateUrl: './jobseeker.component.html',
  styleUrls: ['./jobseeker.component.css']
})
export class JobseekerComponent implements OnInit {

  product:any;
  constructor(private apiService: ApiService,) { }

  ngOnInit(): void {
    this.apiService.getMyApp().subscribe(
      res => {
        this.product = res;
        console.log(this.product);
      },
      err => console.log(err)
    )
  }

  onDelete(id){
    this.apiService.delApp(id).subscribe(
      (res:any) =>{
        alert("Application Deleted");
        // console.log(res)
        this.ngOnInit()
      },
      err => console.log(err)
    )
  }

}
