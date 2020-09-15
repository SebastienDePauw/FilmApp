import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FilmModule } from './film/film.module';
import { MaterialModule } from './material/material.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { HttpClientModule } from '@angular/common/http';
import { UserModule } from './user/user.module';
import { httpInterceptorProviders } from './http-interceptors/index';

@NgModule({
   declarations: [		
      AppComponent,
      PageNotFoundComponent,
      MainNavComponent
   ],
   imports: [
      BrowserModule,
      MaterialModule, 
      UserModule, 
      FilmModule, 
      HttpClientModule, 
      AppRoutingModule
   ],
   providers: [httpInterceptorProviders],
   bootstrap: [AppComponent]
})
export class AppModule { }
