import { Component, inject, input, OnInit } from '@angular/core';
import { HeroItemComponent } from '../../components/hero-item.component';
import { HeroService } from '../../services/hero.service';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { Hero } from '../../models/hero.model';

@Component({
  selector: 'app-dc-hero-details',
  templateUrl: './dc-hero-details.component.html',
  imports: [HeroItemComponent, AsyncPipe],
})
export class DcHeroDetailsComponent implements OnInit {
  heroService = inject(HeroService);

  dcId = input<string>();
  hero$: Observable<Hero> | undefined

  ngOnInit(): void {
      this.hero$ = this.heroService.getHeroById(this.dcId()!);
  }
}
