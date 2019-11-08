import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';

import { RoutingModule } from './routing/routing.module';
import { RoutingComponent } from './routing/routing.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [RoutingComponent]
})
export class AppModule { }
