import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrarianDashboardBooksComponent } from './librarian-dashboard-books.component';

describe('LibrarianDashboardBooksComponent', () => {
  let component: LibrarianDashboardBooksComponent;
  let fixture: ComponentFixture<LibrarianDashboardBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibrarianDashboardBooksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibrarianDashboardBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
