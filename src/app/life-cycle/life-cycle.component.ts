import { Component, OnInit, OnChanges, OnDestroy, DoCheck } from '@angular/core';

@Component({
  selector: 'lifecycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.css']
})
export class LifeCycleComponent implements OnInit, OnChanges, OnDestroy,DoCheck {
  ngOnChanges(): void {
    console.log("Some thing changed...");
  }
  ngOnDestroy(): void {
    console.log("Component destroyed...");
  }
  ngDoCheck(): void {
    console.log("Do check called");
  }

  constructor() { }

  ngOnInit() {
    console.log("Component initialised");
  }

}
