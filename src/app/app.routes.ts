import { Routes } from '@angular/router';
import { DCHeroListComponent } from './features/heroes/pages/dc-hero-list/dc-hero-list.component';
import { MarvelHeroListComponent } from './features/heroes/pages/marvel-hero-list/marvel-hero-list.component';
import { HeroFormComponent } from './features/heroes/pages/hero-form/hero-form.component';
import { DcHeroDetailsComponent } from './features/heroes/pages/dc-hero-details/dc-hero-details.component';
import { MarvelHeroDetailsComponent } from './features/heroes/pages/marvel-hero-details/marvel-hero-details.component';

export const routes: Routes = [
  { path: 'dc-heroes', component: DCHeroListComponent },
  { path: 'marvel-heroes', component: MarvelHeroListComponent },
  { path: 'hero-form', component: HeroFormComponent },
  { path: ':dcId', component: DcHeroDetailsComponent },
  { path: ':marvelId', component: MarvelHeroDetailsComponent },
];
