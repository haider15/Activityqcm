import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewlangageComponent } from './newlangage.component';

describe('NewlangageComponent', () => {
  let component: NewlangageComponent;
  let fixture: ComponentFixture<NewlangageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewlangageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewlangageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
