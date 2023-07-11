import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPricesUpdateComponent } from './admin-prices-update.component';

describe('AdminPricesUpdateComponent', () => {
  let component: AdminPricesUpdateComponent;
  let fixture: ComponentFixture<AdminPricesUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPricesUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminPricesUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
