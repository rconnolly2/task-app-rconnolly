import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayTaskComponent } from './day-task.component';

describe('DayTaskComponent', () => {
  let component: DayTaskComponent;
  let fixture: ComponentFixture<DayTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DayTaskComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DayTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
