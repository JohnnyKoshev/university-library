import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDashboardStudentsComponent } from './admin-dashboard-students.component';

describe('AdminDashboardStudentsComponent', () => {
  let component: AdminDashboardStudentsComponent;
  let fixture: ComponentFixture<AdminDashboardStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDashboardStudentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminDashboardStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
