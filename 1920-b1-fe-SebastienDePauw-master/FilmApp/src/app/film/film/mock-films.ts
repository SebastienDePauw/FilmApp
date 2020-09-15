import { Film } from './film.model';

const JsonFilms = [
  {
    titel: 'Pulp Fiction',
    jaar : 1994,
    acteurs: ['Bruce Willis','Samuel L. Jackson','John Travolta']
  },
  {
    titel: 'Star Wars: Episode IV: A New Hope',
    jaar : 1977,
    acteurs: ['Harrison Ford','Mark Hamill','Carrie Fisher']
 },
 {
  titel: 'The Shawshank Redemption',
  jaar : 1994,
  acteurs: ['Morgan Freeman','Tim Robbins','Bob Gunton']
 }
];

export const FILMS: Film[] = JsonFilms.map(Film.fromJSON);