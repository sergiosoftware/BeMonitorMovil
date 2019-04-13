import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuconsultarAsesoriasSolicitadasDetallesPage } from './cuconsultar-asesorias-solicitadas-detalles.page';

describe('CuconsultarAsesoriasSolicitadasDetallesPage', () => {
  let component: CuconsultarAsesoriasSolicitadasDetallesPage;
  let fixture: ComponentFixture<CuconsultarAsesoriasSolicitadasDetallesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuconsultarAsesoriasSolicitadasDetallesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuconsultarAsesoriasSolicitadasDetallesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
