import { Injectable } from "@angular/core";

@Injectable({providedIn:'root'})
export class XpService {
    private xp = 100;

    getXp(){
        return this.xp;
    }

    addXp(pokeXp : number){
        this.xp = this.xp + pokeXp;
        return this.xp;
    }

    removeXp(pokeXp : number){
        this.xp = this.xp - pokeXp;
        return this.xp;
    }
}