import { Component, OnInit } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-emi',
  templateUrl: './emi.component.html',
  styleUrls: ['./emi.component.css']
})
export class EmiComponent implements OnInit {

  option:number=1;
  amount:number;
  tenure:number;
  rate:number;
  emi:number;
 
  constructor() { }

  ngOnInit() {
  }
    display(a): void{
       this.option=a;
    }

    find(a): number{

      if(a==1)
       this.rate=9;
      if(a==2)
       this.rate=8;
      if(a==3)
       this.rate=12;
      if(a==4)
       this.rate=10;

    return this.rate;

    }

    
    solve(amount:number, tenure:number, rate:number) : number
    {
      this.amount=amount;
      this.tenure=tenure;
      rate= this.rate/(12*100);
      var value1= Math.pow(1+rate, this.tenure);
      var value2= Math.pow(1+rate, this.tenure-1);
      this.emi= (this.amount * rate * value1)/value2;
    
      return this.emi;
    } 
}
