import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Player } from './player';
import { Learner } from './learner';
import { HeroService } from './hero.service';

const LEARNER = {
  id: 1,
  text: 'Нет времени объяснять. Объявляй переменные. Что не умешь??? Ну, ты лох. я тебк не помогу'
};


@Component({
  moduleId: module.id,
  selector: 'my-lesson',
  templateUrl: 'lesson.component.html',
  styleUrls: [ 'lesson.component.css' ]
})


export class LessonComponent implements OnInit {

  learner:Learner = LEARNER;

  constructor(
    private router: Router,
    private heroService: HeroService) {
  }

  ngOnInit(): void {

  }


}
