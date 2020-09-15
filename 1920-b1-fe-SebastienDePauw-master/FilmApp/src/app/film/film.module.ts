import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { MaterialModule } from '../material/material.module';
import { FilmlistComponent } from './filmlist/filmlist.component';
import { FilmComponent } from './film/film.component';
import { AddFilmComponent } from './add-film/add-film.component';
import { FilmFilterPipe } from './film/filmFilter.pipe';
import { DetailComponent } from './detail/detail.component';
import { ActeurComponent } from "./acteur/acteur.component";
import { RegisseurComponent } from "./regisseur/regisseur.component";
import { FilmDetailComponent } from "./film-detail/film-detail.component";
import { FilmResolver } from './film/FilmResolver';
import { AuthGuard } from '../user/auth.guard';

const routes: Routes = [
  {
    path: 'film/add',
    canActivate: [AuthGuard],
    component: AddFilmComponent
  },
  {
    path: 'film/list',
    canActivate: [AuthGuard],
    component: FilmlistComponent
  },
  {
    path: 'film/detail/:id',
    canActivate: [AuthGuard],
    component: FilmDetailComponent,
    resolve: {film: FilmResolver}
  },
 ]

@NgModule({
  declarations: [FilmComponent, FilmlistComponent, FilmFilterPipe, AddFilmComponent, DetailComponent, ActeurComponent, RegisseurComponent, FilmDetailComponent],
  imports: [CommonModule, HttpClientModule, MaterialModule, ReactiveFormsModule, RouterModule.forChild(routes)],
  exports: [FilmlistComponent]
})
export class FilmModule { }
