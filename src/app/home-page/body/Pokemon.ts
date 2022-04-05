export class Pokemon {
    id:number;
    name:string;
    xp:number;
    isGiga:boolean

    constructor(id:number,name:string,xp:number,isGiga:boolean){
        this.id = id;
        this.name = name;
        this.xp = xp;
        this.isGiga = isGiga;
    }
}