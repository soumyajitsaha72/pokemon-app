import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../Pokemon';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  // Binding Card component to Parent
  @Input() element : {id:Pokemon["id"],name:Pokemon["name"],xp:Pokemon["xp"]}


  constructor() { }

  ngOnInit(): void {
  }

}
