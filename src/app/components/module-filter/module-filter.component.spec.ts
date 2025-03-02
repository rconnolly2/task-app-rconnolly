import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleFilterComponent } from './module-filter.component';

describe('ModuleFilterComponent', () => {
  let component: ModuleFilterComponent;
  let fixture: ComponentFixture<ModuleFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModuleFilterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModuleFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
