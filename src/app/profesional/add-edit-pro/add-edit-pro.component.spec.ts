import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditProComponent } from './add-edit-pro.component';

describe('AddEditProComponent', () => {
  let component: AddEditProComponent;
  let fixture: ComponentFixture<AddEditProComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEditProComponent]
    });
    fixture = TestBed.createComponent(AddEditProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
