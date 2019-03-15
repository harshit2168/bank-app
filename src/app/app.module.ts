import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './home/login/login.component';
import { ServicesComponent } from './home/services/services.component';
import { ContactusComponent } from './home/contactus/contactus.component';
import { AboutusComponent } from './home/aboutus/aboutus.component';
import { SignupComponent } from './home/login/signup.component';
import { DepositsComponent } from './home/services/deposits.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { EmiComponent } from './home/services/emi/emi.component';
import { FieldsetDesignDirective } from './fieldset-design.directive';
import { RestServiceService } from './rest-service.service';
import { HttpModule } from '@angular/http';
import { MainpadeComponent } from './mainpade/mainpade.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ServicesComponent,
    ContactusComponent,
    AboutusComponent,
    SignupComponent,
    DepositsComponent,
    LifeCycleComponent,
    EmiComponent,
    FieldsetDesignDirective,
    MainpadeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [RestServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
