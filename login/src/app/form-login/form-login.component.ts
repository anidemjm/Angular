import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/usuario.model';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit {

  userLogin: Usuario;

  constructor(
    private userService: UserService,
    private router: Router
  ) {
    this.userLogin = new Usuario();
  }

  ngOnInit(): void {
  }

  recogerUser(): void {
    const existe = this.userService.comprobarUser(this.userLogin.user, this.userLogin.password);

    if (existe) {
      // me dirijo a infoComponent a traves de ruta /info necesito injectable Router

      // paso previo a redirigir es almacenar en locaStorage que el usuario se ha logago correctamente.
      localStorage.setItem('logado', 'activo');

      this.router.navigate(['/info']);
    } else {
      alert('usuario o contraseña incorrectos');
    }
  }
}
