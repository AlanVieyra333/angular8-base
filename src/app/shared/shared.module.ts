import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from './topbar/topbar.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



@NgModule({
  declarations: [
    TopbarComponent,
    FooterComponent,
    PageNotFoundComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TopbarComponent,
    FooterComponent,
    PageNotFoundComponent,
  ]
})
export class SharedModule { }
