import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBrindingComponent } from './data-brinding.component';

describe('DataBrindingComponent', () => {
  let component: DataBrindingComponent;
  let fixture: ComponentFixture<DataBrindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataBrindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataBrindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
