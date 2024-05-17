import { Component, Input, OnInit } from '@angular/core';
import { Naves } from '../Nave';

@Component({
  selector: 'app-Detalle',
  templateUrl: './Detalle.component.html',
  styleUrls: ['./Detalle.component.css']
})
export class DetalleComponent implements OnInit {
  @Input() naveDetail!: Naves;
  constructor() { }

  ngOnInit() {
  }

}
