export interface ActeurJson {
    naam: string;
    rol: string;
  }
export class Acteur {
    constructor(
      private _naam: string,
      private _rol: string
    ) {}
  
    get naam(): string {
      return this._naam;
    }
    get rol(): string {
      return this._rol;
    }
    
    static fromJSON(json: ActeurJson): Acteur {
      const acteur = new Acteur(json.naam, json.rol);
      return acteur;
    }

    toJSON(): ActeurJson{
        return  {
            naam: this.naam, 
            rol: this.rol
        };
    }
   
  }