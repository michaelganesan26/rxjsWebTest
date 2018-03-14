import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonObservableComponent } from './button-observable.component';

describe('ButtonObservableComponent', () => {
  let component: ButtonObservableComponent;
  let fixture: ComponentFixture<ButtonObservableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonObservableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
