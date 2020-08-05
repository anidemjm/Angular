import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lista-aficiones',
  templateUrl: './lista-aficiones.component.html',
  styleUrls: ['./lista-aficiones.component.css']
})
export class ListaAficionesComponent implements OnInit {

  @Input() listahobbies: any[];

  constructor() { }

  ngOnInit(): void {
    console.log('estoy en el hijo', this.listahobbies);
  }

  pintarLista(): string {
    let html = '';
    for (let hobbie of this.listahobbies) {
      html += `<li><strong>${hobbie.nombre}: </strong> ${hobbie.aficion}</li>`;
    }
    return html;
  }

}
