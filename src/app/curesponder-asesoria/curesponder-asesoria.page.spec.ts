import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuresponderAsesoriaPage } from './curesponder-asesoria.page';

describe('CuresponderAsesoriaPage', () => {
  let component: CuresponderAsesoriaPage;
  let fixture: ComponentFixture<CuresponderAsesoriaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuresponderAsesoriaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuresponderAsesoriaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
