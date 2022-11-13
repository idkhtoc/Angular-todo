import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskCommentsModalComponent } from './task-comments-modal.component';

describe('TaskCommentsModalComponent', () => {
  let component: TaskCommentsModalComponent;
  let fixture: ComponentFixture<TaskCommentsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskCommentsModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskCommentsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
