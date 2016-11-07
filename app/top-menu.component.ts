import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Player } from './player';

@Component({
  moduleId: module.id,
  selector: 'my-top-menu',
  templateUrl: 'top-menu.component.html',
  styleUrls: [ 'top-menu.component.css' ]
})


export class TopMenuComponent implements OnInit {

  constructor(
    private router: Router) {
  }

  ngOnInit(): void {

  }


}
