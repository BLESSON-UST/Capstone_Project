import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AdminComponent } from './admin/admin.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { ContactusComponent } from './contactus/contactus.component';

const routes: Routes = [
  {path: 'Home', component:HomeComponent},
  {path: 'About',component:AboutComponent},
  {path: 'Login',component:LoginComponent},
  {path: 'Signup',component:SignupComponent},
  {path: 'Admin',component:AdminComponent},
  {path: 'User',component:UserdashboardComponent },
  {path: 'Contact',component:ContactusComponent},
  { path: '', redirectTo: 'Home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }