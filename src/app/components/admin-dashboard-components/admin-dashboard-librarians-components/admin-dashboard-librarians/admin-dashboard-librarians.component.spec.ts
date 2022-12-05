import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDashboardLibrariansComponent } from './admin-dashboard-librarians.component';

describe('AdminDashboardLibrariansComponent', () => {
  let component: AdminDashboardLibrariansComponent;
  let fixture: ComponentFixture<AdminDashboardLibrariansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDashboardLibrariansComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminDashboardLibrariansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
