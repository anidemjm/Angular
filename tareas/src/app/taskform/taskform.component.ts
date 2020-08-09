import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Tarea } from '../models/tarea';

@Component({
  selector: 'app-taskform',
  templateUrl: './taskform.component.html',
  styleUrls: ['./taskform.component.css']
})
export class TaskformComponent implements OnInit {

  @Output() tareaEnviada: EventEmitter<Tarea>
  newTarea: Tarea;
  idTarea: number;

  constructor() {
    this.newTarea = new Tarea();
    this.idTarea = 5;
    this.tareaEnviada = new EventEmitter();
  }

  ngOnInit(): void {
  }

  recogerTarea(): void {
    this.newTarea.id = this.idTarea;
    this.tareaEnviada.emit(this.newTarea);
    this.newTarea = new Tarea();
    this.idTarea++;
  }

}
