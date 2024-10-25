import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClockInPageComponent } from './pages/clock-in-page/clock-in-page.component';

const routes: Routes = [
  {
    path: 'clock-in',
    component: ClockInPageComponent
  },
  {
    path: '**',
    redirectTo: '/clock/clock-in'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClockRoutingModule {
  
 }
