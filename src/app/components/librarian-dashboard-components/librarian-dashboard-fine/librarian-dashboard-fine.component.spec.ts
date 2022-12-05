import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrarianDashboardFineComponent } from './librarian-dashboard-fine.component';

describe('LibrarianDashboardFineComponent', () => {
  let component: LibrarianDashboardFineComponent;
  let fixture: ComponentFixture<LibrarianDashboardFineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibrarianDashboardFineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibrarianDashboardFineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
