import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiTitleFilterComponent } from './multi-title-filter.component';

describe('MultiTitleFilterComponent', () => {
  let component: MultiTitleFilterComponent;
  let fixture: ComponentFixture<MultiTitleFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiTitleFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiTitleFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
