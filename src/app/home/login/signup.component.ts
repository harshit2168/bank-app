import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RestServiceService } from 'src/app/rest-service.service';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  form;
  msg="";
  constructor(private restService: RestServiceService, public router:Router , private app:AppComponent) { }

  ngOnInit() {
    this.form=new FormGroup({
      username:new FormControl("", Validators.compose([
         Validators.maxLength(10), 
         Validators.required, 
         Validators.minLength(6),
         Validators.pattern('[\\w\\-\\s\\/]+')
      ])
      ),
      firstname:new FormControl("", Validators.required),
      lastname:new FormControl("", Validators.required),
      mobile:new FormControl("",Validators.compose([
        Validators.maxLength(10), 
        Validators.required])),
      email:new FormControl("", Validators.required),
      homebranch:new FormControl("", Validators.required),
      address:new FormControl("", Validators.required),
      accountNo:new FormControl("", Validators.required),
      cif:new FormControl("", Validators.required),
      ifsc:new FormControl("", Validators.required),
      typeofacc:new FormControl("", Validators.required),
      password:new FormControl("", Validators.required),
      repassword:new FormControl("", Validators.required)
     
    })
  }
  onSubmit(myform)
  {
    if(myform.password==myform.repassword)
    {
      this.restService.postUser(myform)
    .subscribe((response:any)=>console.log("Put successfully"));

    
    this.restService.setUserLoggedin(false);
    this.app.display();
    this.router.navigate(['']);
    }
    else
    {
      this.msg= "Passwords do not match";
    }
  }

  change()
  {
    this.app.display();
    this.router.navigate(['']);
  }

  }
   


