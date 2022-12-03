import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentMainFooterComponent } from './student-main-footer.component';

describe('StudentMainFooterComponent', () => {
  let component: StudentMainFooterComponent;
  let fixture: ComponentFixture<StudentMainFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentMainFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentMainFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
