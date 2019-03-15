import { Component } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';
import { Router } from '@angular/router';
import { RestServiceService } from './rest-service.service';
import { User } from './user';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BankAssignment';
  disp: boolean=true;
  disp1:boolean=false;
  disp2:boolean=false;
 
  form;
  user:User={ "id":1 , "firstname":"" , "lastname":"","email":"", "address":"", "mobile":"", "ifsc":"", "cif":""
  ,"accountNo":"", "typeofacc":"", "homebranch":"", "username":"", "password":"", "repassword":""};
 
  constructor(private restService:RestServiceService, public router:Router) { }

  ngOnInit() {
    this.form=new FormGroup({
    id: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required),
    })

  }

  onSubmit(myform)
  {
    
      this.restService.getUser(myform.id)
      .subscribe((response: any)=>{
        if(response.json().password==myform.password)
        {
           this.disp=false;
           this.router.navigate(['home']);
           this.disp1=true;
           this.restService.setUserLoggedin(true);
         
        }
        
      })
    }

    abc()
    {
      this.disp=!this.disp;
      this.disp1=!this.disp1;
      
    }
  change()
  {
    this.disp=false;
  }

  display()
  {
    this.disp=true;
    this.disp1=false;
    this.restService.setUserLoggedin(false);
  }

}


  

