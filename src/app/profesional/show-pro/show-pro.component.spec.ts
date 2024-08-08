import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowProComponent } from './show-pro.component';

describe('ShowProComponent', () => {
  let component: ShowProComponent;
  let fixture: ComponentFixture<ShowProComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowProComponent]
    });
    fixture = TestBed.createComponent(ShowProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
