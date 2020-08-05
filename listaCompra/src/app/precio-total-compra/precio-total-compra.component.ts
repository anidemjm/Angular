import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-precio-total-compra',
  templateUrl: './precio-total-compra.component.html',
  styleUrls: ['./precio-total-compra.component.css']
})
export class PrecioTotalCompraComponent implements OnInit {

  @Input() precio: number;

  constructor() { }

  ngOnInit(): void {
  }

}
