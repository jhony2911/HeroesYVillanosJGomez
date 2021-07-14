import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroService, Heroe } from 'src/app/services/hero.service';
import { VillainService } from 'src/app/services/villain.service';
import { getBSClassFromCasa, searchContext } from 'src/app/tools/tools';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.css']
})
export class SearcherComponent implements OnInit {
  items: any[] = []

  constructor(
    private activedRoute: ActivatedRoute,
    private _heroesService: HeroService,
    private _villainsService: VillainService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.activedRoute.params.subscribe(
      params => {
        if (this.searchContext()[0] == 'hero') {
          this.items = this._heroesService.searchHeroes( 
            params['expression']
          )
        } else {
          this.items = this._villainsService.searchVillains( 
            params['expression']
          )
        }        
      }
    )
  }

  getBSClassFromCasa = getBSClassFromCasa
  searchContext = searchContext

  viewDetail(id: string) {
    this._router.navigate(["/hero", id])
  }

}
