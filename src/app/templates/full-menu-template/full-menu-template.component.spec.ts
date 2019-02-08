import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullMenuTemplateComponent } from './full-menu-template.component';

describe('FullMenuTemplateComponent', () => {
  let component: FullMenuTemplateComponent;
  let fixture: ComponentFixture<FullMenuTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullMenuTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullMenuTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
