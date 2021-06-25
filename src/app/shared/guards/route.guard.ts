import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RouteGuard implements CanActivate, CanActivateChild {
  constructor(private readonly router: Router) {}
  protected authorize(activatedRouter: ActivatedRouteSnapshot, activatedState: RouterStateSnapshot): boolean {
    const credentials = sessionStorage.getItem('credentials');

    console.log(activatedState.url);
    
    if(!credentials){
      sessionStorage.setItem('redirectBackUrl', activatedState.url)
      this.router.navigateByUrl('/login')
    }

    return true;
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    return this.authorize(route, state);
  }
  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    return this.authorize(route, state);
  }
  
}
