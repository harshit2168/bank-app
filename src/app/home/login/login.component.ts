import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import {  RestServiceService } from 'src/app/rest-service.service';
import { User } from 'src/app/user';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  constructor(private restService:RestServiceService, public router:Router) { }

  ngOnInit() {
   
  
  
  
  }
 

}
