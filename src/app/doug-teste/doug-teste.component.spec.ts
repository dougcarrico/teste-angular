import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DougTesteComponent } from './doug-teste.component';

describe('DougTesteComponent', () => {
  let component: DougTesteComponent;
  let fixture: ComponentFixture<DougTesteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DougTesteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DougTesteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
