import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pmmg-processos',
  templateUrl: './processos.component.html',
  styleUrls: ['./processos.component.css']
})
export class ProcessosComponent implements OnInit {
  config = { wheelSpeed: 1, swipeEasing: true};
  constructor() { }

  ngOnInit() {
  }

}
