import { Injectable, OnInit } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  candidateID: String = '';
  id: String = '';
  candidates: String[] = [];
  constructor(private router: Router) {}

  getCandidates() {
    for (let i = 220000; i <= 220099; i++) {
      this.id = 'M' + i;
      this.candidates.push(this.id);
    }
    return this.candidates;
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.candidates.includes(this.candidateID, 0)) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
