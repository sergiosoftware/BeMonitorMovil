import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CUSolicitarAsesoriaPage } from './cusolicitar-asesoria.page';

describe('CUSolicitarAsesoriaPage', () => {
  let component: CUSolicitarAsesoriaPage;
  let fixture: ComponentFixture<CUSolicitarAsesoriaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CUSolicitarAsesoriaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CUSolicitarAsesoriaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
