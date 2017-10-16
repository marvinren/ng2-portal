import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from "@angular/router";
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

import { LayoutsModule} from './layout/layout.moudle';
import { AIHomeModule } from './home/home.module';

import {ROUTES} from "./app.routes";
import { AppComponent } from './app.component';


@NgModule({



   

  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, LayoutsModule, AIHomeModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
