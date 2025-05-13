import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot} from '@angular/router';
import {AuthService} from "../services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {

  canActivate: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    if (this.authService.isExists() && !this.authService.isLocked()) {
      return true;
    } else {
      const referrer = this.authService.getReferer();
      const platform = this.authService.getPlatform();
      const promo = this.authService.getPromotion();
      const aElm: HTMLAnchorElement = document.createElement('a');
      aElm.href = 'https://login.talentboozt.com/login?redirectUri='+window.location.href+'?&plat='+platform+'&ref='+referrer+'&prom='+promo;
      aElm.target = '_self';
      aElm.click();
      return false;
    }
  };

  constructor(private authService: AuthService) {
  }

}
