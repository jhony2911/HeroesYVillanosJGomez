import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Heroe, HeroService } from 'src/app/services/hero.service';
import { getBSClassFromCasa } from 'src/app/tools/tools';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Heroe[] = []

  constructor(
    private _heroesService: HeroService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.heroes = this._heroesService.getHeroes()
  }

  getHero(i: number) {
    return this.heroes[i]
  }

  getBSClassFromCasa = getBSClassFromCasa

  viewDetail(id: string) {
    this._router.navigate(["/hero", id])
  }



}
