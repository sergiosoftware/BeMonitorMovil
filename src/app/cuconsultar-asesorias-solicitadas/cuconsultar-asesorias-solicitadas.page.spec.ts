import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuconsultarAsesoriasSolicitadasPage } from './cuconsultar-asesorias-solicitadas.page';

describe('CuconsultarAsesoriasSolicitadasPage', () => {
  let component: CuconsultarAsesoriasSolicitadasPage;
  let fixture: ComponentFixture<CuconsultarAsesoriasSolicitadasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuconsultarAsesoriasSolicitadasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuconsultarAsesoriasSolicitadasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
