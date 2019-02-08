import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LobitosComponent } from './lobitos.component';

describe('LobitosComponent', () => {
  let component: LobitosComponent;
  let fixture: ComponentFixture<LobitosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LobitosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LobitosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
