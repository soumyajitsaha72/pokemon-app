import { Component, OnInit } from '@angular/core';
import { Pokemon } from './Pokemon';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  colors = {
    normal: '#A8A77A',
    fire: '#EE8130',
    water: '#6390F0',
    electric: '#F7D02C',
    grass: '#7AC74C',
    ice: '#96D9D6',
    fighting: '#C22E28',
    poison: '#A33EA1',
    ground: '#E2BF65',
    flying: '#A98FF3',
    psychic: '#F95587',
    bug: '#A6B91A',
    rock: '#B6A136',
    ghost: '#735797',
    dragon: '#6F35FC',
    dark: '#705746',
    steel: '#B7B7CE',
    fairy: '#D685AD',
  };


  isShow = false;
  poke: Pokemon;

  items = [
    new Pokemon(1,"Bulbasaur",Math.floor(Math.random() * 10) + 1,0.5,2.4,["blaze"],["fire","grass","psychic"],["fire","ice"]),
    new Pokemon(2,"Ivysaur",Math.floor(Math.random() * 10) + 1,0.5,2.4,["blaze"],["fire","grass"],["fire","ice"]),
    new Pokemon(3,"Venusaur",Math.floor(Math.random() * 10) + 1,0.5,2.4,["blaze"],["fire","grass","dragon"],["fire","ice"]),
    new Pokemon(4,"Charmander",Math.floor(Math.random() * 10) + 1,0.5,2.4,["blaze"],["fire","grass"],["fire","ice"]),
    new Pokemon(5,"Charmeleon",Math.floor(Math.random() * 10) + 1,0.5,2.4,["blaze"],["fire","grass"],["fire","ice"]),
    new Pokemon(6,"Charizard",Math.floor(Math.random() * 10) + 1,0.5,2.4,["blaze"],["fire","grass"],["fire","ice"]),
    new Pokemon(7,"Squirtle",Math.floor(Math.random() * 10) + 1,0.5,2.4,["blaze"],["fire","grass"],["fire","ice"]),
    new Pokemon(8,"Wartortle",Math.floor(Math.random() * 10) + 1,0.5,2.4,["blaze"],["fire","grass"],["fire","ice"]),
    new Pokemon(9,"Blastoise",Math.floor(Math.random() * 10) + 1,0.5,2.4,["blaze"],["fire","grass"],["fire","ice"]),
    new Pokemon(10,"Caterpie",Math.floor(Math.random() * 10) + 1,0.5,2.4,["blaze"],["fire","grass"],["fire","ice"]),
    new Pokemon(11,"Metapod",Math.floor(Math.random() * 10) + 1,0.5,2.4,["blaze"],["fire","grass"],["fire","ice"]),
    new Pokemon(1,"Bulbasaur",Math.floor(Math.random() * 10) + 1,0.5,2.4,["blaze"],["fire","grass","psychic"],["fire","ice"]),
    new Pokemon(1,"Bulbasaur",Math.floor(Math.random() * 10) + 1,0.5,2.4,["blaze"],["fire","grass","psychic"],["fire","ice"]),
    new Pokemon(1,"Bulbasaur",Math.floor(Math.random() * 10) + 1,0.5,2.4,["blaze"],["fire","grass","psychic"],["fire","ice"]),
    new Pokemon(1,"Bulbasaur",Math.floor(Math.random() * 10) + 1,0.5,2.4,["blaze"],["fire","grass","psychic"],["fire","ice"]),
    new Pokemon(1,"Bulbasaur",Math.floor(Math.random() * 10) + 1,0.5,2.4,["blaze"],["fire","grass","psychic"],["fire","ice"]),
    new Pokemon(12,"Butterfree",Math.floor(Math.random() * 10) + 1,0.5,2.4,["blaze"],["fire","grass"],["fire","ice"])
  ];


  onCardClicked(data : any){
    this.poke = new Pokemon(data.id,data.name,data.xp,data.height,data.weight,data.abilities,data.types,data.weaknesses);
    this.isShow = true;
  }

  onCloseButtonClicked() {
    this.isShow = false;
  }

  scroll() {
    document.getElementById("target").scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    });
  }

  constructor() { }

  ngOnInit(): void {
  }

}
