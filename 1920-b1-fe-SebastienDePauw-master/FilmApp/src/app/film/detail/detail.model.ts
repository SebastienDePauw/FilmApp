import { Acteur, ActeurJson } from '../acteur/acteur.model';
import { Regisseur, RegisseurJson } from '../regisseur/regisseur.model';

export interface DetailJson{
    beschrijving: string;
    storyline: string;
    rating: Number;
    acteurs : ActeurJson[];
    regisseurs : RegisseurJson[];
}

export class Detail{
    constructor(
        private _beschrijving: string,
        private _storyline: string,
        private _rating: Number,
        private _acteurs = new Array<Acteur>(),
        private _regisseurs = new Array<Regisseur>()
    ){}
    
    toJSON(): DetailJson{
        return {
            beschrijving: this.beschrijving,
            storyline: this.storyline,
            rating: this.rating,
            acteurs : this.acteurs.map(act => act.toJSON()),
            regisseurs : this.regisseurs.map(reg => reg.toJSON())
        };
    }

    static fromJSON(json: DetailJson): Detail{
        const detail = new Detail(
          json.beschrijving,
          json.storyline,
          json.rating,
          json.acteurs.map(Acteur.fromJSON),
          json.regisseurs.map(Regisseur.fromJSON),
          );
        return detail;
      }

    get beschrijving(): string{
        return this._beschrijving;
    }
  
      get storyline():string{
        return this._storyline;
      }

      get rating(): Number {
        return this._rating;
      }
  
      get acteurs(): Acteur[]{
          return this._acteurs;
      }
  
      get regisseurs(): Regisseur[] {
        return this._regisseurs;
      }
    
    
}