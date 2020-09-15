import { Pipe, PipeTransform } from '@angular/core';
import { Film } from './film.model'

@Pipe({
  name: 'filmFilter',
  pure: false
})
export class FilmFilterPipe implements PipeTransform {

  transform(film: Film[], titel: string): Film[] {
    if (!titel || titel.length === 0) {
      return film;
    }
    return film.filter(rec =>
      rec.titel.toLowerCase().startsWith(titel.toLowerCase())
    );
  }

}
