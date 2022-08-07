import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirtyFormGuard } from './dirty-form-guard';
import { DirtyFormComponent } from './dirty-form/dirty-form.component';
import { OtherRouteComponent } from './other-route/other-route.component';

const routes: Routes = [
  /*
  {
    path: 'DirtyForm',
    component: DirtyFormComponent,
    canDeactivate: [DirtyFormGuard]
  },
  */
 {
  path: 'DirtyForm',
  loadChildren: () => import('./dirty-form/dirty-form.module').then((m) => m.DirtyFormModule),

},
  {
      path: 'OtherRoute',
      component: OtherRouteComponent      
  },
  { path: '', redirectTo: '/OtherRoute', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
