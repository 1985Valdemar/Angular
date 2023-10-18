import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExemploServicoComponent } from './exemplo-servico.component';

describe('ExemploServicoComponent', () => {
  let component: ExemploServicoComponent;
  let fixture: ComponentFixture<ExemploServicoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExemploServicoComponent]
    });
    fixture = TestBed.createComponent(ExemploServicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
