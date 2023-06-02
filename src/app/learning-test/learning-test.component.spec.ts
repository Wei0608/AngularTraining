import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningTestComponent } from './learning-test.component';

describe('LearningTestComponent', () => {
  let component: LearningTestComponent;
  let fixture: ComponentFixture<LearningTestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LearningTestComponent]
    });
    fixture = TestBed.createComponent(LearningTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
