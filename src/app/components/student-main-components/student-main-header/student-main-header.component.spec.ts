import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentMainHeaderComponent } from './student-main-header.component';

describe('StudentMainHeaderComponent', () => {
  let component: StudentMainHeaderComponent;
  let fixture: ComponentFixture<StudentMainHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentMainHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentMainHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
