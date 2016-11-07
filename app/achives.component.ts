import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Player } from './player';



@Component({
  moduleId: module.id,
  selector: 'my-achives',
  templateUrl: 'achives.component.html',
  styleUrls: [ 'achives.component.css' ]
})


export class AchivesComponent implements OnInit {






  constructor(
    private router: Router) {
  }

  ngOnInit(): void {
 

  }



}
