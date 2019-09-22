import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pmmg-grupos',
  templateUrl: './grupos.component.html',
  styleUrls: ['./grupos.component.css']
})
export class GruposComponent implements OnInit {
  config = { wheelSpeed: 1, swipeEasing: true};
  constructor() { }

  ngOnInit() {
  }

}
