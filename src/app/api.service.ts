import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private getJobById = 'http://localhost:5000/api/job/single/';
  private deleteJob = 'http://localhost:5000/api/job/delete/';
  private updateJob = 'http://localhost:5000/api/job/update/';
  private createJob = 'http://localhost:5000/api/job/create';
  private myJob = "http://localhost:5000/api/job/my/list"
  private allJob = "http://localhost:5000/api/job/list"
  
  private getAppById = 'http://localhost:5000/api/application/single/';
  private getAppByJobId = 'http://localhost:5000/api/application/emp/list/';
  private deleteApp = 'http://localhost:5000/api/application/delete/';
  private updateApp = 'http://localhost:5000/api/application/update/';
  private createApp = 'http://localhost:5000/api/application/create/';
  private myApp = "http://localhost:5000/api/application/my/list"
  private allApp = "http://localhost:5000/api/application/list"
  
  private getUserById = 'http://localhost:5000/api/user/single/';
  private deleteUser = 'http://localhost:5000/api/user/delete/';
  private updateUser = 'http://localhost:5000/api/user/update/';
  private allUser = "http://localhost:5000/api/user/list"
 
  constructor(private http:HttpClient) { }

  getUserId(id:any){
    return this.http.get(this.getUserById+id)
  }
  delUser(id:any){
    return this.http.delete(this.deleteUser+id)
  }
  editUser(id:any,data:any){
    return this.http.put(this.updateUser+id, data)
  }
  getAllUser(){
    return this.http.get(this.allUser)
  }

  ///////

  getAppId(id:any){
    return this.http.get(this.getAppById+id)
  }
  getAppJobId(id:any){
    return this.http.get(this.getAppByJobId+id)
  }
  delApp(id:any){
    return this.http.delete(this.deleteApp+id)
  }
  editApp(id:any,data:any){
    return this.http.put(this.updateApp+id, data)
  }
  addApp(id:any,data:any){
    return this.http.post(this.createApp+id, data)
  }
  getMyApp(){
    return this.http.get(this.myApp)
  }
  getAllApp(){
    return this.http.get(this.allApp)
  }

  ///////

  getJobId(id:any){
    return this.http.get(this.getJobById+id)
  }
  delJob(id:any){
    return this.http.delete(this.deleteJob+id)
  }
  editJob(id:any,data:any){
    return this.http.put(this.updateJob+id, data)
  }
  addJob(pro:any){
    return this.http.post(this.createJob, pro)
  }
  getMyJob(){
    return this.http.get(this.myJob)
  }
  getAllJob(){
    return this.http.get(this.allJob)
  }
    
}
