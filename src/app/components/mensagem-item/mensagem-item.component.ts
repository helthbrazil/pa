import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IMensagem } from 'src/app/shared/IMensagem.';

@Component({
  selector: 'pmmg-mensagem-item',
  templateUrl: './mensagem-item.component.html',
  styleUrls: ['./mensagem-item.component.css']
})
export class MensagemItemComponent implements OnInit {
  isMostrarDetalhes = false;
  @Input() mensagem: IMensagem;
  @Output() selecionarEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  mostrarDetalhes() {
    this.isMostrarDetalhes = true;
  }

  ocultarDetalhes() {
    this.isMostrarDetalhes = false;
  }

  selecionar(event) {
    this.mensagem['checked'] = event['checked'];
    this.selecionarEvent.emit(this.mensagem);
  }

}
