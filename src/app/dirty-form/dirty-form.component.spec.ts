import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirtyFormComponent } from './dirty-form.component';

describe('DirtyFormComponent', () => {
  let component: DirtyFormComponent;
  let fixture: ComponentFixture<DirtyFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirtyFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirtyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
