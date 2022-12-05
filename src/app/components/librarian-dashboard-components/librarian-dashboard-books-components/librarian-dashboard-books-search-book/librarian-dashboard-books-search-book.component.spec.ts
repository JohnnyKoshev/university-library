import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrarianDashboardBooksSearchBookComponent } from './librarian-dashboard-books-search-book.component';

describe('LibrarianDashboardBooksSearchBookComponent', () => {
  let component: LibrarianDashboardBooksSearchBookComponent;
  let fixture: ComponentFixture<LibrarianDashboardBooksSearchBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibrarianDashboardBooksSearchBookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibrarianDashboardBooksSearchBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
