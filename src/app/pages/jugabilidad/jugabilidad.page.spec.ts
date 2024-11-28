import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JugabilidadPage } from './jugabilidad.page';

describe('JugabilidadPage', () => {
  let component: JugabilidadPage;
  let fixture: ComponentFixture<JugabilidadPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(JugabilidadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
