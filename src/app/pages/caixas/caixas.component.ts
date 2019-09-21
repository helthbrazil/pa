import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pmmg-caixas',
  templateUrl: './caixas.component.html',
  styleUrls: ['./caixas.component.css']
})
export class CaixasComponent implements OnInit {

  public config = {
    wheelSpeed: 1,
    swipeEasing: true
  };

  constructor() { }

  ngOnInit() {
  }

}
