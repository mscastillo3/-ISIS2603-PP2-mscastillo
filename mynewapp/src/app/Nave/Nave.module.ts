import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NaveComponent } from './Nave.component';
import { DetalleComponent } from './Detalle/Detalle.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NaveComponent, DetalleComponent],
  exports: [NaveComponent]
})
export class NaveModule { }
