import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddqcmComponent } from './addqcm.component';

describe('AddqcmComponent', () => {
  let component: AddqcmComponent;
  let fixture: ComponentFixture<AddqcmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddqcmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddqcmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
