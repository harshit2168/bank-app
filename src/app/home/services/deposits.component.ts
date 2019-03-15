import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'deposits',
  templateUrl: './deposits.component.html',
  styleUrls: ['./deposits.component.css']
})
export class DepositsComponent implements OnInit {

  amount:number;
  time:number;
  rate:number;
  x:number;
  constructor() { }

  ngOnInit() {
  }

  solve(amount:number, time:number,p:number)
  {
    this.time=time;
    this.amount=amount;
    
    if(p==1)
    {
      this.rate= 10;
      let ans= this.rate/4;
      let value1= Math.pow(1+(ans/100),(4*this.time));
      this.x= this.amount*value1;
   
      
    }
    if(p==2)
    {
      this.rate= 8.25;
      let sum=0;
      let ans= this.rate/100;
      for(let i=(this.time*12);i>=1;i--)
      {
        let tenure= i/(this.time*12);
        let value1= Math.pow(1+(ans/4),(4*tenure));  
        let y= this.amount*value1;
        sum=sum+y;
      }
      this.x=sum;
      
    }
    
    
  }
}
