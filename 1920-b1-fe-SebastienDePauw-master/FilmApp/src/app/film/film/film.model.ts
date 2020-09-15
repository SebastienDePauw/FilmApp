import { DetailJson, Detail } from '../detail/detail.model';

  interface FilmJson {
    id: Number;
    titel: string;
    jaar: Number;
    minuten: Number;
    categorie: string;
    poster: string;
    detail: DetailJson;
  }

export class Film {
  private _id: Number
    constructor(
      private _titel: string,
      private _jaar: Number,
      private _minuten: Number,
      private _categorie: string,
      private _poster: string,
      private _detail: Detail,
    ) {}

    get id(): Number {
      return this._id;
    }
  
    get titel(): string {
      return this._titel;
    }

    get jaar(): Number {
        return this._jaar;
    }

    get minuten(): Number {
      return this._minuten;
    }

    get categorie(): string {
      return this._categorie;
    }

    get poster(): string{
      return this._poster;
    }

    get detail() : Detail {
      return this._detail;
    }
    
    static fromJSON(json: FilmJson): Film {
      const film = new Film(
        json.titel,
        json.jaar,
        json.minuten,
        json.categorie,
        json.poster,
        Detail.fromJSON(json.detail) // --> deze lijn geeft de fout
        );
        film._id = json.id;
      return film;
    }

    toJSON(): FilmJson{
      return <FilmJson>{
          titel: this.titel,
          jaar: this.jaar,
          minuten: this.minuten,
          categorie:this.categorie,
          poster: this.poster,
          detail: this.detail.toJSON()
      };
  }
   
  }