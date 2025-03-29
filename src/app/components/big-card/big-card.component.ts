import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  imports: [],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css'
})
export class BigCardComponent implements OnInit {

  @Input()
  photocover:string =""
  @Input()
  cardtitle:string =""
  @Input()
  carddescription:string =""

  constructor() {}

  ngOnInit(): void {
    console.log('BigCardComponent initialized');
  }

}
