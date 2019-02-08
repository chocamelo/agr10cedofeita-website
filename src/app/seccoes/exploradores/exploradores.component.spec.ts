import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploradoresComponent } from './exploradores.component';

describe('ExploradoresComponent', () => {
  let component: ExploradoresComponent;
  let fixture: ComponentFixture<ExploradoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExploradoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploradoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
