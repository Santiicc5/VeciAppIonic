import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Alertas1Page } from './alertas1.page';

describe('Alertas1Page', () => {
  let component: Alertas1Page;
  let fixture: ComponentFixture<Alertas1Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Alertas1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
