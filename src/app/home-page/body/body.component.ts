import { Component, OnInit } from '@angular/core';
import { Pokemon } from './Pokemon';

import { HttpClient } from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';

import { PokemonApiService } from 'src/app/pokemon-api.service';

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

  //Contains all the pokemons
  items = [];

  onCardClicked(data : any){
    this.poke = new Pokemon(data.id,data.name,data.base_experience,data.height,data.weight,data.abilities,data.types,data.weaknesses,data.sprites);
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

  limit = '151';

  constructor(private _pokemonApiService: PokemonApiService) { }

  ngOnInit(): void {
    this.getPokemonList();
  }

  private getPokemonList() {
    this._pokemonApiService.getListOfPokemon(this.limit).subscribe(
      response => { this.getPokemonDetails(response.map(response => response.url)); },
      error => { console.error(error); }
    );
  }

  private getPokemonDetails(urlList: Array<string>) {
    this._pokemonApiService.getPokemonDetails(urlList).subscribe(
      response => { this.items = response; },
      error => { console.error(error); }
    );
  }

}
