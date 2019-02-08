import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaminheirosComponent } from './caminheiros.component';

describe('CaminheirosComponent', () => {
  let component: CaminheirosComponent;
  let fixture: ComponentFixture<CaminheirosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaminheirosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaminheirosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
