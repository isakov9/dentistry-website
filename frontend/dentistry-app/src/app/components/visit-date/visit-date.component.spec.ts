import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitDateComponent } from './visit-date.component';

describe('VisitDateComponent', () => {
  let component: VisitDateComponent;
  let fixture: ComponentFixture<VisitDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisitDateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisitDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
