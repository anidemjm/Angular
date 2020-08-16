import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../../services/peticiones.service';

@Component({
  selector: 'app-http-get',
  templateUrl: './http-get.component.html',
  styleUrls: ['./http-get.component.css'],
})
export class HttpGetComponent implements OnInit {
  arrPost: any[];

  constructor(private peticionService: PeticionesService) {}

  async ngOnInit() {
    this.arrPost = await this.peticionService.getAllPost();
    console.log(this.arrPost);
  }
}
