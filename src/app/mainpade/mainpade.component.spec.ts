import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainpadeComponent } from './mainpade.component';

describe('MainpadeComponent', () => {
  let component: MainpadeComponent;
  let fixture: ComponentFixture<MainpadeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainpadeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainpadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
