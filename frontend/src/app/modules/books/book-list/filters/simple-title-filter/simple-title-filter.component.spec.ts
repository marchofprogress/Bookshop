import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleTitleFilterComponent } from './simple-title-filter.component';

describe('SimpleTitleFilterComponent', () => {
  let component: SimpleTitleFilterComponent;
  let fixture: ComponentFixture<SimpleTitleFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleTitleFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleTitleFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
