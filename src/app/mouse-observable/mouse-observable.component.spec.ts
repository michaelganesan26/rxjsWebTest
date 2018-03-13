import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MouseObservableComponent } from './mouse-observable.component';

describe('MouseObservableComponent', () => {
  let component: MouseObservableComponent;
  let fixture: ComponentFixture<MouseObservableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MouseObservableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MouseObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
