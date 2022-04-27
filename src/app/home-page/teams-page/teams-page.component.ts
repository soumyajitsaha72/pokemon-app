import { Component, OnInit } from '@angular/core';
import { TeamsService } from '../teams.service';
import { XpService } from '../xp.service';

@Component({
  selector: 'app-teams-page',
  templateUrl: './teams-page.component.html',
  styleUrls: ['./teams-page.component.css']
})
export class TeamsPageComponent implements OnInit {
  pokemons = this.teamServ.pokeArray;
   
  teamsArr = this.teamServ.getTeam();
  score = this.teamServ.getScore(); //Added the score in team service.

  onClick(pokemonId : number){
    this.teamServ.removeFromTeam(pokemonId);
    this.teamServ.removeScore(this.pokemons[pokemonId].base_experience);
  }

  constructor(private teamServ : TeamsService) { }

  ngOnInit(): void {
    console.log(this.teamServ.pokeArray);
    console.log(this.teamServ.getTeam());
  }

}
