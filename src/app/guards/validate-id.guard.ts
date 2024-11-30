import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../service/AuthService';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ValidateIdGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    const id = route.params['id'];

    return this.authService.GetUniqueIdForForgotPassword(id).pipe(
      map((res: any) => {
        if (res.content) {
          return true;
        } else {
          this.router.navigate(['error']);
          return false;
        }
      }),
      catchError(() => {
        this.router.navigate(['error']);
        return [false];
      })
    );
  }
}
