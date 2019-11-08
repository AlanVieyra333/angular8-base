import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

import { TopbarComponent } from './topbar/topbar.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoaderComponent } from './loader/loader.component';


@NgModule({
  declarations: [
    TopbarComponent,
    FooterComponent,
    PageNotFoundComponent,
    LoaderComponent,
  ],
  imports: [
    CommonModule,
    ProgressSpinnerModule,
  ],
  exports: [
    TopbarComponent,
    FooterComponent,
    PageNotFoundComponent,
    LoaderComponent,
  ]
})
export class SharedModule { }
