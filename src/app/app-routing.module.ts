import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { RoleGuard } from './role.guard';
import { JobseekerGuard } from './jobseeker.guard';
import { EmployerGuard } from './employer.guard';
import { AuthGuard } from './auth.guard';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'jobs', component: JobsComponent },
  { path: 'detail/:id', component: JobDetailComponent, canActivate:[AuthGuard, JobseekerGuard],data: { expectedRole: 'jobSeeker' } },
  { path: 'job/detail/:id', component: DetailComponent, canActivate:[AuthGuard, EmployerGuard],data: { expectedRole: 'employer' } },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'post', component: PostJobComponent, canActivate:[AuthGuard, EmployerGuard], data: { expectedRole: 'employer' }},
  
  { path: 'admin', component: AdminComponent, canActivate:[RoleGuard], data: { expectedRole: 'admin' }},
  { path: 'employer', component: EmployerComponent, canActivate:[RoleGuard, EmployerGuard], data: { expectedRole: 'employer' }},
  { path: 'jobseeker', component: JobseekerComponent, canActivate:[RoleGuard, JobseekerGuard], data: { expectedRole: 'jobSeeker' }},

  // { path: 'detail/:id', component: ProductdetailComponent },
  // { path: 'cart', component: CartComponent, canActivate:[AuthGuard] },
  // { path: '**', component: PageNotFounndComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
