import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildfruitComponent } from './childfruit.component';

describe('ChildfruitComponent', () => {
  let component: ChildfruitComponent;
  let fixture: ComponentFixture<ChildfruitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildfruitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildfruitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
