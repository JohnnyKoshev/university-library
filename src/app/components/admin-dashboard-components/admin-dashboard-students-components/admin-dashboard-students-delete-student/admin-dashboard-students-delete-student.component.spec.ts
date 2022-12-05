import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDashboardStudentsDeleteStudentComponent } from './admin-dashboard-students-delete-student.component';

describe('AdminDashboardStudentsDeleteStudentComponent', () => {
  let component: AdminDashboardStudentsDeleteStudentComponent;
  let fixture: ComponentFixture<AdminDashboardStudentsDeleteStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDashboardStudentsDeleteStudentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminDashboardStudentsDeleteStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
