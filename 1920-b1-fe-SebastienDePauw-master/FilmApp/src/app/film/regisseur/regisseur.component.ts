import { Component, OnInit, Input } from '@angular/core';
import { Regisseur } from './regisseur.model';

@Component({
  selector: 'app-regisseur',
  templateUrl: './regisseur.component.html',
  styleUrls: ['./regisseur.component.css']
})
export class RegisseurComponent implements OnInit {
  @Input () regisseur: Regisseur;
  constructor() { }

  ngOnInit() {
  }

}
