import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToastModule } from 'primeng/toast';
import { MessagesModule } from 'primeng/messages';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MessageService } from 'primeng/api';

import { RoutingComponent } from './routing.component';
import { PublicLayoutComponent } from './public-layout/public-layout.component';
import { UserLayoutComponent } from './user-layout/user-layout.component';
import { SharedModule } from '../shared/shared.module';
import { PageNotFoundComponent, LoaderInterceptor } from '../shared';


const routes: Routes = [
  {
    path: '',
    component: PublicLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('../home/home.module').then(m => m.HomeModule),
      }
    ],
  }, {
/*    path: '',
    component: UserLayoutComponent,
    children: [
      {
        path: 'admin',
        loadChildren: () => import('../home/home.module').then(m => m.HomeModule),
      }
    ],
  }, {*/
    path: '**',
    component: PageNotFoundComponent,
  }
];

@NgModule({
  declarations: [
    RoutingComponent,
    PublicLayoutComponent,
    UserLayoutComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    SharedModule,
    HttpClientModule,
    ToastModule,
    MessagesModule,
  ],
  exports: [RoutingComponent],
  providers: [
    MessageService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true
    }
  ]
})
export class RoutingModule { }
