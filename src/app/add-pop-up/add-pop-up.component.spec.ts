import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPopUpComponent } from './add-pop-up.component';

describe('AddPopUpComponent', () => {
  let component: AddPopUpComponent;
  let fixture: ComponentFixture<AddPopUpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddPopUpComponent]
    });
    fixture = TestBed.createComponent(AddPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
