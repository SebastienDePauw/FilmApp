import { Component, OnInit, Input } from '@angular/core';
import { Acteur } from './acteur.model';

@Component({
  selector: 'app-acteur',
  templateUrl: './acteur.component.html',
  styleUrls: ['./acteur.component.css']
})
export class ActeurComponent implements OnInit {
  @Input () public acteur: Acteur;

  constructor() { }

  ngOnInit() {
  }

}
