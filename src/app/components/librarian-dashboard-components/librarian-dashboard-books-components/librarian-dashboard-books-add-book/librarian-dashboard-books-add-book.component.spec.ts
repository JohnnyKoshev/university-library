import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrarianDashboardBooksAddBookComponent } from './librarian-dashboard-books-add-book.component';

describe('LibrarianDashboardBooksAddBookComponent', () => {
  let component: LibrarianDashboardBooksAddBookComponent;
  let fixture: ComponentFixture<LibrarianDashboardBooksAddBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibrarianDashboardBooksAddBookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibrarianDashboardBooksAddBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
