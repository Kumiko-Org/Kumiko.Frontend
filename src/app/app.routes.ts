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
        path: '',
        loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
      }
    ]
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
