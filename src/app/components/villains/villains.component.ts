import { Component, OnInit } from '@angular/core';
import { Villain, VillainService } from 'src/app/services/villain.service';
import { getBSClassFromCasa } from 'src/app/tools/tools';

@Component({
  selector: 'app-villains',
  templateUrl: './villains.component.html',
  styleUrls: ['./villains.component.css']
})
export class VillainsComponent implements OnInit {
  villains: Villain[] = []

  constructor(private _villainService: VillainService) { }

  ngOnInit(): void {
    this.villains = this._villainService.getVillains()
    console.log(this.villains);
    
  }

  getBSClassFromCasa = getBSClassFromCasa

  getLogoPath(villain: Villain) {
    return `assets/img/${villain.casa.toLowerCase()}_logo.png`
  }
}
