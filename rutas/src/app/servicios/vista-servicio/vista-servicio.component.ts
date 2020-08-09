import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vista-servicio',
  templateUrl: './vista-servicio.component.html',
  styleUrls: ['./vista-servicio.component.css']
})
export class VistaServicioComponent implements OnInit {
  arrServicios: any[];
  servicioCargado: any;

  constructor(private activatedRoute: ActivatedRoute) {
    this.arrServicios = [
      { id: 1, titulo: 'Desarrollo web', descripcion: 'diseño y desarrollo web' },
      { id: 2, titulo: 'Marketing digital', descripcion: 'SEO Y SEM para su negocio' },
      { id: 3, titulo: 'Branding', descripcion: 'diseña la marca para tu empresa' },
    ];
  }

  ngOnInit(): void {
    // es en este momento cuando quiero saber que producto cargar y ese dato lo recojo de la url a traveés activatedRoute

    this.activatedRoute.params.subscribe((params) => {
      // console.log(Number(params.servicioId));
      const idServicio = Number(params.servicioId);
      this.servicioCargado = this.arrServicios.find(servicio => {
        return servicio.id === idServicio;
      });
      // console.log(this.servicioCargado);

    });


  }

}
