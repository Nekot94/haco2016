import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppComponent }         from './app.component';

import { AppRoutingModule }     from './app-routing.module';


import { SimpleFightComponent }  from './simple-fight.component';
import { LessonComponent }  from './lesson.component';
import { TopMenuComponent }  from './top-menu.component';
import { FooterComponent }  from './footer.component';
import { InventoryComponent }  from './inventory.component';
import { MapComponent }  from './map.component';
import { AchivesComponent }  from './achives.component';


import './rxjs-extensions';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    SimpleFightComponent,
    LessonComponent,
    TopMenuComponent,
    FooterComponent,
    InventoryComponent,
    MapComponent,
    AchivesComponent
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
