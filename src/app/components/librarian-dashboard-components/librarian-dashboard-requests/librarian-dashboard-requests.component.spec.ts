import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrarianDashboardRequestsComponent } from './librarian-dashboard-requests.component';

describe('LibrarianDashboardRequestsComponent', () => {
  let component: LibrarianDashboardRequestsComponent;
  let fixture: ComponentFixture<LibrarianDashboardRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibrarianDashboardRequestsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibrarianDashboardRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
