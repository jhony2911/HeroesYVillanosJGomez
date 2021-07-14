import { Heroe } from "../services/hero.service"


export function getBSClassFromCasa(hero: Heroe) {
    if (hero.casa.toLowerCase() == 'dc') {
        return 'primary'
    } else if (hero.casa.toLowerCase() == 'marvel') {
        return 'danger'
    }
}

export function searchContext() {
    let context = ['hero', 'Heroe']
    if (this._router.url.indexOf('hero') >= 0) {
      context = ['hero', 'Heroe']
    } else if (this._router.url.indexOf('villain') >= 0) {
      context = ['villain', 'Villano']
    }
    return context
}