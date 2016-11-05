import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Player } from './player';
import { HeroService } from './hero.service';


@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  templateUrl: 'lesson.component.html',
  styleUrls: [ 'lesson.component.css' ]
})


export class LessonComponent implements OnInit {

  constructor(
    private router: Router,
    private heroService: HeroService) {
  }

  ngOnInit(): void {

  }

  gotNext(): void {
    let link = ['/fight', ''];
    this.router.navigate(link);
  }
}
