import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { APP_ROUTING } from './app.routes';
import { HeroService } from "./services/hero.service";
import { HeroesComponent } from './components/heroes/heroes.component';
import { VillainsComponent } from './components/villains/villains.component';
import { VillainService } from './services/villain.service';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { SearcherComponent } from './components/searcher/searcher.component';
import { FilterPipe } from './pipes/filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    VillainsComponent,
    HeroDetailComponent,
    SearcherComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    HeroService,
    VillainService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
