import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pmmg-configuracoes',
  templateUrl: './configuracoes.component.html',
  styleUrls: ['./configuracoes.component.css']
})
export class ConfiguracoesComponent implements OnInit {
  config = { wheelSpeed: 1, swipeEasing: true};
  constructor() { }

  ngOnInit() {
  }

}
