import { Component, OnInit } from '@angular/core';

export interface Mensagem {
  nome: string;
  assunto: string;
  horario: string;
}

@Component({
  selector: 'pmmg-caixa-entrada',
  templateUrl: './caixa-entrada.component.html',
  styleUrls: ['./caixa-entrada.component.css']
})
export class CaixaEntradaComponent implements OnInit {
  mensagens: Array<Mensagem>;
  config = { wheelSpeed: 1, swipeEasing: true};

  constructor() { }

  ngOnInit() {
    this.mensagens = new Array<Mensagem>();

    for (let i = 0; i < 20; i++) {
      this.mensagens.push({
        nome: 'Hebert Ferreira',
        assunto: 'Qualquer',
        horario: '00:23'
      });
    }


  }

  verMais() {
    for (let i = 0; i < 10; i++) {
      this.mensagens.push({
        nome: 'Hebert Ferreira',
        assunto: 'Qualquer',
        horario: '00:23'
      });
    }

  }
}
