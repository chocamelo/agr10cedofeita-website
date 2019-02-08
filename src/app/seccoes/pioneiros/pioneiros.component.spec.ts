import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PioneirosComponent } from './pioneiros.component';

describe('PioneirosComponent', () => {
  let component: PioneirosComponent;
  let fixture: ComponentFixture<PioneirosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PioneirosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PioneirosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
