import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PageBaseLayoutComponent } from '../../shared/layout/page-base-layout/page-base-layout.component';

const routes: Routes = [
  {
    path: 'home',
    redirectTo: '/home'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
