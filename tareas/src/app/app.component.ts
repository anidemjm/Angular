import { Component } from '@angular/core';
import { Tarea } from './models/tarea';
import { splitClasses } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  arrTareas: Tarea[];

  constructor() {
    this.arrTareas = [
      new Tarea(1, 'Estudiar Javascript', 'urgente'),
      new Tarea(2, 'Sacar al perro', 'diario'),
      new Tarea(3, 'Leer un libro', 'mensual'),
      new Tarea(4, 'Ir a la compra', 'urgente')
    ];
  }

  recogerTareaEnviada($event): void {
    this.arrTareas.push($event);
    console.log(this.arrTareas);
  }

  recogerTareaCompletada($event): void {
    // console.log('idtareacompletada', $event);
    const tareaCompletada = this.arrTareas.find((tarea) => {
      return tarea.id === $event;
    });

    tareaCompletada.completed = !tareaCompletada.completed;
    console.log(this.arrTareas);

    // opcion 2
    /* for (const tarea of this.arrTareas) {
      if (tarea.id === $event) {
        tarea.completed = !tarea.completed;
        break;
      }
    } */

  }

  recogerTareaBorrada($event): void {
    // como se borra un elemento de un array en cualquier posicion.
    // indexOf para arrays simples, para arrays de objetos tenemos findIndex, funcionan exactamente igual

    const posicionTarea = this.arrTareas.findIndex((tarea) => {
      return tarea.id === $event;
    });

    // splice borra un elemento de un array en cualquier posicion
    // splice recibe dos parametros primer parametro posicion a borrar segundo parametro cuanto elementos quiere borrar.

    this.arrTareas.splice(posicionTarea, 1);
    console.log(this.arrTareas);

    //  opcion 2

    /* for (let i = 0; i < this.arrTareas.length; i++) {
      if (this.arrTareas[i].id === $event) {
        this.arrTareas.splice(i, 1);
        break;
      }
    } */



  }
}
