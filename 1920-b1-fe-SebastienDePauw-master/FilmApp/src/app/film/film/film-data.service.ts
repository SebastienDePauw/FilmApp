import { Injectable } from '@angular/core';
import { Film } from './film.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, pipe, BehaviorSubject, throwError } from 'rxjs';
import { map, tap, catchError, delay, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FilmDataService {
  private _films$ = new BehaviorSubject<Film[]>([]);
  private _films: Film[];

  constructor(private http: HttpClient) {
    this._films$.pipe(
      catchError((err) => {
        return throwError(err);
      })
    ).subscribe((film: Film[]) => {
      this._films = film;
      this._films$.next(this._films);
    })
  }

get allFilms$(): Observable< Film[] > {
  return this._films$;
}

get films$(): Observable< Film[] > {
  return this.http.get(`${environment.apiUrl}/Film/`).pipe(
    catchError(this.handleError),
    map((list: any[]): Film[] => list.map(Film.fromJSON))    
  );
}

getFilm$(id: string): Observable<Film> {
  return this.http
  .get(`${environment.apiUrl}/Film/${id}`)
  .pipe(catchError(this.handleError), map(Film.fromJSON));
}

addNewFilm(film: Film){
  return this.http
    .post(`${environment.apiUrl}/Film/`, film.toJSON())
    .pipe(catchError(this.handleError), map(Film.fromJSON))
    .subscribe((f: Film) => {
      this._films = [...this._films, f];
      this._films$.next(this._films);
  });
}

deleteFilm(film: Film){
  return this.http
  .delete(`${environment.apiUrl}/Film/${film.id}`)
  .pipe(catchError(this.handleError))
  .subscribe(() => {
    this._films = this._films.filter((f) => f.id != f.id);
    this._films$.next(this._films);
  });
}


handleError(err: any): Observable<never> {
  let errorMessage: string;
  if (err instanceof HttpErrorResponse) {
    errorMessage = `'${err.status} ${err.statusText}' when accessing '${err.url}'`;
  } else {
    errorMessage = `an unknown error occurred ${err}`;
  }
  console.error(err);
  return throwError(errorMessage);
}
}
