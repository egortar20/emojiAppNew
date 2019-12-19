import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent, DeletedComponent, FavoriteComponent } from './components';


const routes: Routes = [
  {path: 'home', component: HomeComponent, data: {title: 'Главная'}},
  {path: 'deleted', component: DeletedComponent, data: {title: 'Удаленные'}},
  {path: 'favorite', component: FavoriteComponent, data: {title: 'Любимые'}},  
  { path: '', redirectTo: 'home', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
