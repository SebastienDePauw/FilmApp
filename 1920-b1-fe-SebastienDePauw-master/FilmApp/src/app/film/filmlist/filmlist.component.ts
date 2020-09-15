import { FilmDataService } from '../film/film-data.service';
import { Subject, Observable, EMPTY } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Film } from '../film/film.model';
import { distinctUntilChanged, debounceTime, map, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-filmlist',
  templateUrl: './filmlist.component.html',
  styleUrls: ['./filmlist.component.css']
})

export class FilmlistComponent implements OnInit {
public filterFilmTitel : string;
public filterTitel$ = new Subject<string>();
private _fetchFilms$: Observable<Film[]>;
public errorMessage: string = '';
public legelijst: boolean;

  constructor(private _filmDataService: FilmDataService) {
    this.filterTitel$
    .pipe(
      distinctUntilChanged(),
      map(val => val.toLowerCase()),
      map(val => this.filterFilmTitel = val)
    )
    .subscribe();
  }
  
  get films$ () : Observable<Film[]>  {
    return this._fetchFilms$
  }

  applyFilter(filter: string) {
    this.filterFilmTitel = filter;
  }

  ngOnInit() {
    this._fetchFilms$ = this._filmDataService.films$.pipe(
      catchError(err => {
        this.errorMessage = err;
        return EMPTY;
      })
    );
  }

}
