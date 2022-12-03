import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDashboardActiveBooksComponent } from './student-dashboard-active-books.component';

describe('StudentDashboardActiveBooksComponent', () => {
  let component: StudentDashboardActiveBooksComponent;
  let fixture: ComponentFixture<StudentDashboardActiveBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentDashboardActiveBooksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentDashboardActiveBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
