import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPricesAddComponent } from './admin-prices-add.component';

describe('AdminPricesAddComponent', () => {
  let component: AdminPricesAddComponent;
  let fixture: ComponentFixture<AdminPricesAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPricesAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminPricesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
