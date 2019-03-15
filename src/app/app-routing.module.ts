import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './home/aboutus/aboutus.component';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './home/contactus/contactus.component';
import { ServicesComponent } from './home/services/services.component';
import { LoginComponent } from './home/login/login.component';
import { SignupComponent } from './home/login/signup.component';
import { DepositsComponent } from './home/services/deposits.component';
import { EmiComponent } from './home/services/emi/emi.component';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {
    path:'home', 
    canActivate: [AuthGuard],
    component: HomeComponent
  },
  
  {
    path:'about', 
    canActivate: [AuthGuard],
    component: AboutusComponent
  },
  {
  path:'contact', 
  canActivate: [AuthGuard],
  component: ContactusComponent
  },
  {
    path:'services', 
    canActivate: [AuthGuard],
    component: ServicesComponent
  },
 
  {
    path:'services/emi', 
    canActivate: [AuthGuard],
    component: EmiComponent
  },
  {
    path:'services/deposits', 
    canActivate: [AuthGuard],
    component: DepositsComponent
  },
  {
    path:'login/signup',
   
    component: SignupComponent
  }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
