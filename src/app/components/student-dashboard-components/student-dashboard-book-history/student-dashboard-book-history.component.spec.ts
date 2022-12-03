import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDashboardBookHistoryComponent } from './student-dashboard-book-history.component';

describe('StudentDashboardBookHistoryComponent', () => {
  let component: StudentDashboardBookHistoryComponent;
  let fixture: ComponentFixture<StudentDashboardBookHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentDashboardBookHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentDashboardBookHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
