import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuresponderAsesoriaCalendarioPage } from './curesponder-asesoria-calendario.page';

describe('CuresponderAsesoriaCalendarioPage', () => {
  let component: CuresponderAsesoriaCalendarioPage;
  let fixture: ComponentFixture<CuresponderAsesoriaCalendarioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuresponderAsesoriaCalendarioPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuresponderAsesoriaCalendarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
