import { Injectable } from "@angular/core";

@Injectable({providedIn:'root'})
export class TeamsService {
    private team = [];
    private teamLength = 0;

    getTeam(){
        return this.team;
    }

    getTeamLength(){
        return this.teamLength;
    }

    addToTeam(pokeId: number){
        this.team.push(pokeId);
        this.teamLength++;
    }

    removeFromTeam(pokeId : number){
        for( var i = 0; i < this.team.length; i++){ 
            if ( this.team[i] === pokeId) { 
                this.team.splice(i, 1); 
            }
        }

        this.teamLength--;
    }
}

