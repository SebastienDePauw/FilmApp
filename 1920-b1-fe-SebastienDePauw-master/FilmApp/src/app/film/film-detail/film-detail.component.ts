import { Component, OnInit } from '@angular/core';
import { FilmDataService } from '../film/film-data.service';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/app/user/authentication.service';
import { Film } from '../film/film.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.css']
})
export class FilmDetailComponent implements OnInit {
  public film: Film;
  private _ingelogd: boolean = false;

  constructor(private route: ActivatedRoute,
    private _filmDataService: FilmDataService,
    private _authentication: AuthenticationService) { }

  ngOnInit(): void {
    this.route.data.pipe(map(item => 
      this.film = item['film'])).subscribe();
  }

  checkLogin() : boolean{
    if(this._authentication.user$.getValue()){
      this._ingelogd = true;
    }
    return this._ingelogd;
  }

  deleteFilm(){
    this._filmDataService.deleteFilm(this.film)
  }

}
