import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pmmg-mensagem-item',
  templateUrl: './mensagem-item.component.html',
  styleUrls: ['./mensagem-item.component.css']
})
export class MensagemItemComponent implements OnInit {

  @Input() nome: string;
  @Input() assunto: string;
  @Input() horario: string;

  constructor() { }

  ngOnInit() {
  }

}
