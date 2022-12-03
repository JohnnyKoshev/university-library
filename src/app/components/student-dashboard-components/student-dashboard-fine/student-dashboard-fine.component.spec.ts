import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDashboardFineComponent } from './student-dashboard-fine.component';

describe('StudentDashboardFineComponent', () => {
  let component: StudentDashboardFineComponent;
  let fixture: ComponentFixture<StudentDashboardFineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentDashboardFineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentDashboardFineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
