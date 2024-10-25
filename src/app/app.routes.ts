import { RouterModule, Routes } from '@angular/router';
import { PageBaseLayoutComponent } from './shared/layout/page-base-layout/page-base-layout.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  {
    path: '', redirectTo: '/auth', pathMatch: 'full'
  },
    {
      path: 'auth',
      loadChildren: () => import(`./modules/auth/auth.module`).then(m => m.AuthModule)
    },
    {
        path: 'home',
        component: PageBaseLayoutComponent,
        children: [
          {
            path: 'home',
            loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
          }
        ]
    },
    {
      path: 'clock',
      loadChildren: () => import(`./modules/clock/clock.module`).then(m => m.ClockModule)
    },
    {
      path: '**',
      redirectTo: '/auth'
    }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
