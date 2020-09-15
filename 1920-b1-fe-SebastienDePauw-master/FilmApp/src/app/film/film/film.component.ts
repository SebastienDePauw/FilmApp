import { Component, OnInit, Input } from '@angular/core';
import { Film } from './film.model';
import { Detail } from '../detail/detail.model';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {
  @Input() public film :Film;
  @Input() public detail: Detail;

  constructor() {
   }

  ngOnInit() {
  }

}
