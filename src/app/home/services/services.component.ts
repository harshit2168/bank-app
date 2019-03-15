import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

   amount: number;
   tenure: number;
   rate:number;
   emi:number;

  constructor() { }

  ngOnInit() {
  }

  
}
