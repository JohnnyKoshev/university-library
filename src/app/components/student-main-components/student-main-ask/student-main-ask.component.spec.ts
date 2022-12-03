import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentMainAskComponent } from './student-main-ask.component';

describe('StudentMainAskComponent', () => {
  let component: StudentMainAskComponent;
  let fixture: ComponentFixture<StudentMainAskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentMainAskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentMainAskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
