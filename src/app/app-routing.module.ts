import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TerrorComponent } from './filmes/terror/terror.component';
import { HeroiComponent } from './filmes/heroi/heroi.component';
import { AventuraComponent } from './filmes/aventura/aventura.component';
import { ComediaComponent } from './filmes/comedia/comedia.component';

const routes: Routes = [
  {path:'terror', component:TerrorComponent},
  {path:'heroi', component:HeroiComponent},
  {path:'aventura', component:AventuraComponent},
  {path:'comedia', component:ComediaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
