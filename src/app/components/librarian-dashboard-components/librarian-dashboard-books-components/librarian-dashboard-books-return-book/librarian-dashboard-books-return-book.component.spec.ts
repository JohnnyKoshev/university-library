import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrarianDashboardBooksReturnBookComponent } from './librarian-dashboard-books-return-book.component';

describe('LibrarianDashboardBooksReturnBookComponent', () => {
  let component: LibrarianDashboardBooksReturnBookComponent;
  let fixture: ComponentFixture<LibrarianDashboardBooksReturnBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibrarianDashboardBooksReturnBookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibrarianDashboardBooksReturnBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
