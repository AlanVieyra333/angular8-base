import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoutingComponent } from './routing.component';
import { PublicLayoutComponent } from './public-layout/public-layout.component';
import { UserLayoutComponent } from './user-layout/user-layout.component';
import { SharedModule } from '../shared/shared.module';
import { PageNotFoundComponent } from '../shared';


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
    SharedModule
  ],
  exports: [RoutingComponent]
})
export class RoutingModule { }
