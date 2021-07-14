import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe, HeroService } from 'src/app/services/hero.service';
import { getBSClassFromCasa } from 'src/app/tools/tools';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  hero: any = {}
  cifrado: Boolean = true
  cifrado_etiqueta = "Cifrar"

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _heroesService: HeroService,
    private _router: Router
  ) { 
    this._activatedRoute.params.subscribe(
      params => { this.hero = this._heroesService.getHero(params['id']) }
    )
  }

  getBSClassFromCasa = getBSClassFromCasa

  back() { this._router.navigate(['/heroes']) }

  viewDetail(id: string) {
    this._router.navigate(["/hero", id])
  }

  cifrar(str) {
    if (this.cifrado) {
      this.cifrado_etiqueta = "Decifrar"
      return "***"
    } else {
      this.cifrado_etiqueta = "Cifrar"
      return str
    }
  }

  ngOnInit(): void { }

}
