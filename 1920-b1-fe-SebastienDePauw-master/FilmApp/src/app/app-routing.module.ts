import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './user/auth.guard';

const appRoutes: Routes = [
{path: '', redirectTo: 'login', pathMatch: 'full'},
{path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [
    CommonModule, 
    RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
