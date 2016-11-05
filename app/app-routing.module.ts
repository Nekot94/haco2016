import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard.component';
import { HeroesComponent }      from './heroes.component';
import { HeroDetailComponent }  from './hero-detail.component';

import { SimpleFightComponent }  from './simple-fight.component';
import { LessonComponent }  from './lesson.component';


const routes: Routes = [
  { path: '', redirectTo: '/fight', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'fight',  component: SimpleFightComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes',     component: HeroesComponent },
  { path: 'lesson',     component: LessonComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
