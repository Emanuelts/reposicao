import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TerrorComponent } from './filmes/terror/terror.component';
import { HeroiComponent } from './filmes/heroi/heroi.component';
import { AventuraComponent } from './filmes/aventura/aventura.component';
import { ComediaComponent } from './filmes/comedia/comedia.component';

@NgModule({
  declarations: [
    AppComponent,
    TerrorComponent,
    HeroiComponent,
    AventuraComponent,
    ComediaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
