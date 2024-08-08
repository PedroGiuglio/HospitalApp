import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditPacComponent } from './add-edit-pac.component';

describe('AddEditPacComponent', () => {
  let component: AddEditPacComponent;
  let fixture: ComponentFixture<AddEditPacComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEditPacComponent]
    });
    fixture = TestBed.createComponent(AddEditPacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
