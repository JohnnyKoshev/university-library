import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDashboardLibrariansDeleteLibrarianComponent } from './admin-dashboard-librarians-delete-librarian.component';

describe('AdminDashboardLibrariansDeleteLibrarianComponent', () => {
  let component: AdminDashboardLibrariansDeleteLibrarianComponent;
  let fixture: ComponentFixture<AdminDashboardLibrariansDeleteLibrarianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDashboardLibrariansDeleteLibrarianComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminDashboardLibrariansDeleteLibrarianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
