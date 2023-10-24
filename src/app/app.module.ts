import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { JobsComponent } from './jobs/jobs.component';
import { JobDetailComponent } from './job-detail/job-detail.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ContactComponent } from './contact/contact.component';
import { PostJobComponent } from './post-job/post-job.component';
import { AdminComponent } from './admin/admin.component';
import { EmployerComponent } from './employer/employer.component';
import { JobseekerComponent } from './jobseeker/jobseeker.component';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { RoleGuard } from './role.guard';
import { ApiService } from './api.service';
import { TokenInterceptor } from './token.interceptor';
import { EmployerGuard } from './employer.guard';
import { JobseekerGuard } from './jobseeker.guard';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    JobsComponent,
    JobDetailComponent,
    LoginComponent,
    RegisterComponent,
    ContactComponent,
    PostJobComponent,
    AdminComponent,
    EmployerComponent,
    JobseekerComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    
    // ReactiveFormsModule
  ],
  // providers: [],
  providers: [AuthService, ApiService, AuthGuard, RoleGuard, EmployerGuard, JobseekerGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
     }],
  bootstrap: [AppComponent]
})
export class AppModule { }
