import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrarianDashboardMainComponent } from './librarian-dashboard-main.component';

describe('LibrarianDashboardMainComponent', () => {
  let component: LibrarianDashboardMainComponent;
  let fixture: ComponentFixture<LibrarianDashboardMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibrarianDashboardMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibrarianDashboardMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
