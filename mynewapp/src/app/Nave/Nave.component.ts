import { Component, OnInit } from '@angular/core';
import { Naves } from './Nave';
import { dataNaves } from './dataNaves';
import { NaveService } from './Nave.service';


@Component({
  selector: 'app-Nave',
  templateUrl: './Nave.component.html',
  styleUrls: ['./Nave.component.css']
})
export class NaveComponent implements OnInit {
  selected: Boolean = false;
  naves: Array<Naves> = [];
  selectedNave!: Naves;
  rebelion = 0;
  imperio = 0;
  neutral = 0;
  constructor(private naveService: NaveService) { }
  getNaves(): Array<Naves> {
    this.naves = dataNaves;
    var nave: Naves; 
    for (nave of this.naves) {
      if (nave.bando === 'Rebelión') {
        this.rebelion++;
      }
      if (nave.bando === 'Imperio') {
        this.imperio++;
      }
      if (nave.bando === 'Neutral') {
        this.neutral++;
      }
    }
    return dataNaves;

  }
  onSelected(book: Naves): void {
    this.selected = true;
    this.selectedNave = book;
  }
  ngOnInit() {
    this.getNaves();
  }

}
