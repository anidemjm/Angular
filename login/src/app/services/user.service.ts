import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  arrUsuarios: Usuario[];

  constructor() {
    this.arrUsuarios = [
      new Usuario(1, 'Juan', '12345'),
      new Usuario(2, 'Pepe', 'Admin123')
    ];
  }

  comprobarUser(pUser, pPassword): boolean {
    let existe = false;

    for (const usuario of this.arrUsuarios) {
      if (usuario.user === pUser && usuario.password === pPassword) {
        existe = true;
      }
    }
    return existe;
  }
}
