import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Player } from './player';



@Component({
  moduleId: module.id,
  selector: 'my-map',
  templateUrl: 'map.component.html',
  styleUrls: [ 'map.component.css' ]
})


export class MapComponent implements OnInit {

  constructor(
    private router: Router) {
  }

  ngOnInit(): void {

  }


}
