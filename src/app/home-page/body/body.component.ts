import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';

import { PokemonApiService } from 'src/app/pokemon-api.service';

import { Pokemon } from './Pokemon';
import { pokeDescription } from "./pokemon-desc";
import { pokeWeakness } from "./pokemon-weakness";
import { pokeTypeColors } from "./pokemon-type-colors";

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  colors = pokeTypeColors;

  isShow = false;
  poke: Pokemon;

  //Contains all the pokemons
  items = [];

  onCardClicked(data : any){
    this.poke = new Pokemon(data.id,data.name,data.base_experience,data.height,data.weight,data.abilities,data.types,data.weaknesses,data.sprites,data.desc);
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


  //Modify Code According to our needs. Like change the Xp and add description, Weaknesses
  changeXp(arr:any[]){
    arr.forEach(e => {
      e.base_experience = Math.floor(Math.random() * 10) + 1;
    });
  }

  addWeaknesses(arr:any[]){
    arr.forEach(e => {
      e.weaknesses = pokeWeakness[e.id];
    });
  }

  addDescription(arr:any[]){
    arr.forEach(e => {
      e.desc = pokeDescription[e.id];
    });
  }



  constructor(private _pokemonApiService: PokemonApiService) { }

  ngOnInit(): void {
    this.getPokemonList();
  }

  limit = '151';
  private getPokemonList() {
    this._pokemonApiService.getListOfPokemon(this.limit).subscribe(
      response => { this.getPokemonDetails(response.map(response => response.url)); },
      error => { console.error(error); }
    );
  }

  private getPokemonDetails(urlList: Array<string>) {
    this._pokemonApiService.getPokemonDetails(urlList).subscribe(
      response => { this.items = response; this.changeXp(this.items); this.addWeaknesses(this.items); this.addDescription(this.items);},
      error => { console.error(error); }
    );
  }

}
