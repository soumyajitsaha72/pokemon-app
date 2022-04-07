export class Pokemon {
    id:number;
    name:string;
    xp:number;
    height:number;
    weight:number;
    abilities:string[];
    types:string[];
    weaknesses:string[];
    sprites:string[]

    constructor(id:number,name:string,xp:number,height:number,weight:number,abilities:string[],types:string[],weaknesses:string[],sprites:string[]){
        this.id = id;
        this.name = name;
        this.xp = xp;
        this.height = height;
        this.weight = weight;
        this.abilities = abilities;
        this.types = types;
        this.weaknesses = weaknesses;
        this.sprites = sprites;
    }

}