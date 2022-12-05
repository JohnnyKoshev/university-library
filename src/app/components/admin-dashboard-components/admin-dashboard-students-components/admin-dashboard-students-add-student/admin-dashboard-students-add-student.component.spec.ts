import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDashboardStudentsAddStudentComponent } from './admin-dashboard-students-add-student.component';

describe('AdminDashboardStudentsAddStudentComponent', () => {
  let component: AdminDashboardStudentsAddStudentComponent;
  let fixture: ComponentFixture<AdminDashboardStudentsAddStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDashboardStudentsAddStudentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminDashboardStudentsAddStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
