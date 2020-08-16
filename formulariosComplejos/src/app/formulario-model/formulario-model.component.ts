import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-model',
  templateUrl: './formulario-model.component.html',
  styleUrls: ['./formulario-model.component.css'],
})
export class FormularioModelComponent implements OnInit {
  formulario: FormGroup;

  constructor() {
    this.formulario = new FormGroup({
      nombre: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      direccion: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.pattern(/\S+\@\S+\.\S+/)]), // expresión irregular correo
      edad: new FormControl('', [Validators.min(0), Validators.max(100)]),
    });
  }

  ngOnInit(): void {}

  recogerDatos(): void {
    console.log(this.formulario.value);
  }
}
