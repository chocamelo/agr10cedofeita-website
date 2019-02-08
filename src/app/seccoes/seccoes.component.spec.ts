import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccoesComponent } from './seccoes.component';

describe('SeccoesComponent', () => {
  let component: SeccoesComponent;
  let fixture: ComponentFixture<SeccoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeccoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeccoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
