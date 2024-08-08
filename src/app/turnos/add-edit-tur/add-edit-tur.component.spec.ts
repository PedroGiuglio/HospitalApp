import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditTurComponent } from './add-edit-tur.component';

describe('AddEditTurComponent', () => {
  let component: AddEditTurComponent;
  let fixture: ComponentFixture<AddEditTurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEditTurComponent]
    });
    fixture = TestBed.createComponent(AddEditTurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
