import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDashboardLibrariansAddLibrarianComponent } from './admin-dashboard-librarians-add-librarian.component';

describe('AdminDashboardLibrariansAddLibrarianComponent', () => {
  let component: AdminDashboardLibrariansAddLibrarianComponent;
  let fixture: ComponentFixture<AdminDashboardLibrariansAddLibrarianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDashboardLibrariansAddLibrarianComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminDashboardLibrariansAddLibrarianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
