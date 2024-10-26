import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PageBaseLayoutComponent } from '../../shared/layout/page-base-layout/page-base-layout.component';
import { LoginPageComponent } from '../auth/pages/login-page/login-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
