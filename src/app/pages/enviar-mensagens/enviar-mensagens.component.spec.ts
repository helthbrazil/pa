import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnviarMensagensComponent } from './enviar-mensagens.component';

describe('EnviarMensagensComponent', () => {
  let component: EnviarMensagensComponent;
  let fixture: ComponentFixture<EnviarMensagensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnviarMensagensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnviarMensagensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
