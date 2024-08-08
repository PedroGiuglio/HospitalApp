import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowTurComponent } from './show-tur.component';

describe('ShowTurComponent', () => {
  let component: ShowTurComponent;
  let fixture: ComponentFixture<ShowTurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowTurComponent]
    });
    fixture = TestBed.createComponent(ShowTurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
