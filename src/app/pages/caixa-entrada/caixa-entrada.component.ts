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

  constructor() { }

  ngOnInit() {
    this.mensagens = new Array<Mensagem>();
    this.mensagens.push({
      nome: 'Hebert Ferreira',
      assunto: 'Qualquer',
      horario: '00:23'
    });

    this.mensagens.push({
      nome: 'Hebert Ferreira',
      assunto: 'Qualquer',
      horario: '00:23'
    });

    this.mensagens.push({
      nome: 'Hebert Ferreira',
      assunto: 'Qualquer',
      horario: '00:23'
    });

    this.mensagens.push({
      nome: 'Hebert Ferreira',
      assunto: 'Qualquer',
      horario: '00:23'
    });

    this.mensagens.push({
      nome: 'Hebert Ferreira',
      assunto: 'Qualquer',
      horario: '00:23'
    });

    this.mensagens.push({
      nome: 'Hebert Ferreira',
      assunto: 'Qualquer',
      horario: '00:23'
    });

    this.mensagens.push({
      nome: 'Hebert Ferreira',
      assunto: 'Qualquer',
      horario: '00:23'
    });

    this.mensagens.push({
      nome: 'Hebert Ferreira',
      assunto: 'Qualquer',
      horario: '00:23'
    });

    this.mensagens.push({
      nome: 'Hebert Ferreira',
      assunto: 'Qualquer',
      horario: '00:23'
    });

    this.mensagens.push({
      nome: 'Hebert Ferreira',
      assunto: 'Qualquer',
      horario: '00:23'
    });

    this.mensagens.push({
      nome: 'Hebert Ferreira',
      assunto: 'Qualquer',
      horario: '00:23'
    });

    this.mensagens.push({
      nome: 'Hebert Ferreira',
      assunto: 'Qualquer',
      horario: '00:23'
    });
  }

}
