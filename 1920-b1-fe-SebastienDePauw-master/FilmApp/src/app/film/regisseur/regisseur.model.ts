export interface RegisseurJson
 {
    naam: string;
  }
export class Regisseur {
    constructor(
      private _naam: string
    ) {}
  
    get naam(): string {
      return this._naam;
    }
    static fromJSON(json: RegisseurJson): Regisseur {
      const regisseur = new Regisseur(json.naam);
      return regisseur;
    }

    toJSON(): RegisseurJson{
        return {
            naam: this.naam
        };
   
  }
}