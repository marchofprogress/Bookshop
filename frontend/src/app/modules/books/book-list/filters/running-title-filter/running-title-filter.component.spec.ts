import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RunningTitleFilterComponent } from './running-title-filter.component';

describe('RunningTitleFilterComponent', () => {
  let component: RunningTitleFilterComponent;
  let fixture: ComponentFixture<RunningTitleFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RunningTitleFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RunningTitleFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
