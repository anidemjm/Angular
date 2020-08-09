import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Tarea } from '../models/tarea';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent implements OnInit {

  @Input() tareas: Tarea[];
  @Output() tareaCompletada: EventEmitter<number>;
  @Output() tareaBorrada: EventEmitter<number>;

  constructor() {
    this.tareaCompletada = new EventEmitter();
    this.tareaBorrada = new EventEmitter();
  }

  ngOnInit(): void {
  }

  completarTarea(pId): void {
    // console.log($event.target.checked);
    this.tareaCompletada.emit(pId);
  }

  borrarTarea(pId): void {
    // console.log(pId);
    this.tareaBorrada.emit(pId);
  }

}
