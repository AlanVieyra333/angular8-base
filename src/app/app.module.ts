import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RoutingModule } from './routing/routing.module';
import { RoutingComponent } from './routing/routing.component';

@NgModule({
  imports: [
    BrowserModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [RoutingComponent]
})
export class AppModule { }
