import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrarianDashboardStudentsComponent } from './librarian-dashboard-students.component';

describe('LibrarianDashboardStudentsComponent', () => {
  let component: LibrarianDashboardStudentsComponent;
  let fixture: ComponentFixture<LibrarianDashboardStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibrarianDashboardStudentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibrarianDashboardStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
