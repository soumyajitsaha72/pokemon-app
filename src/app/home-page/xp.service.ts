import { Injectable } from "@angular/core";

@Injectable({providedIn:'root'})
export class XpService {
    xp = 100;

    getXp(){
        return this.xp;
    }

    addXp(pokeXp : number){
        this.xp = this.xp + pokeXp;
    }

    removeXp(pokeXp : number){
        this.xp = this.xp - pokeXp;
    }
}