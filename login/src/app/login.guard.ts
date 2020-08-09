import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate() {
    // console.log('paso por el guard');
    const estado = localStorage.getItem('logado');
    if (estado !== 'activo') {
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }

}
