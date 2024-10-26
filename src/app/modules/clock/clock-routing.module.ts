import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClockInPageComponent } from './pages/clock-in-page/clock-in-page.component';
import { ClockAdminComponent } from './pages/clock-admin/clock-admin.component';

const routes: Routes = [
  {
    path: '',
    component: ClockAdminComponent // This will now correctly load for the empty path
  },
  {
    path: '**',
    redirectTo: '' // Redirect any unknown routes to the default component (DhrCheckerPageComponent)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClockRoutingModule {

}
