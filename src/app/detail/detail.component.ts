import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  data:{
    status: String
  } = {
    status: " " //approved 
  };
  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute
  ) {}

  noData : boolean;
  app:any;
  id: any;
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.findId()
  }

  findId() {
    this.apiService.getAppJobId(this.id).subscribe((data) => {
      this.app = data;
      if(this.app.length <= 0){
        this.noData = true;
      }
      else{
        this.noData = false;
      }
      // console.log(this.app.length);
    });
  } 

  onReject(id){
    this.data.status = "rejected";
    this.apiService.editApp(id, this.data).subscribe(
      (res) => {
        console.log(res);
        alert('Application Updated')
        this.findId() 
      },
      (err) => {
        console.log(err);
      }
    )
  }
  onApproved(id) {
    this.data.status = "approved";
    this.apiService.editApp(id, this.data).subscribe(
      (res) => {
        console.log(res);
        alert('Application Updated')
        this.findId() 
      },
      (err) => {
        console.log(err);
      }
    )
  }
}
