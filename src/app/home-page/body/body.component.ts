import { Component, OnInit } from '@angular/core';
import { Pokemon } from './Pokemon';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  items = [
    new Pokemon(1,"Bulbasaur",Math.floor(Math.random() * 10) + 1,false),
    new Pokemon(2,"Ivysaur",Math.floor(Math.random() * 10) + 1,false),
    new Pokemon(3,"Venusaur",Math.floor(Math.random() * 10) + 1,false),
    new Pokemon(4,"Charmander",Math.floor(Math.random() * 10) + 1,true),
    new Pokemon(5,"Charmeleon",Math.floor(Math.random() * 10) + 1,false),
    new Pokemon(6,"Charizard",Math.floor(Math.random() * 10) + 1,false),
    new Pokemon(7,"Squirtle",Math.floor(Math.random() * 10) + 1,true),
    new Pokemon(8,"Wartortle",Math.floor(Math.random() * 10) + 1,false),
    new Pokemon(9,"Blastoise",Math.floor(Math.random() * 10) + 1,false),
    new Pokemon(10,"Caterpie",Math.floor(Math.random() * 10) + 1,false),
    new Pokemon(11,"Metapod",Math.floor(Math.random() * 10) + 1,false),
    new Pokemon(12,"Butterfree",Math.floor(Math.random() * 10) + 1,false)
  ];





  constructor() { }

  ngOnInit(): void {
  }

}
