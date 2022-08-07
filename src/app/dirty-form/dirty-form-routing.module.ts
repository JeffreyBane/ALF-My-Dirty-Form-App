import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirtyFormGuard } from '../dirty-form-guard';
import { DirtyFormComponent } from './dirty-form.component';

export const CHILD_ROUTES: Routes = [{

  path: '',
  component: DirtyFormComponent,
  canDeactivate: [DirtyFormGuard]
}];

 
@NgModule({
  imports: [
    RouterModule.forChild(CHILD_ROUTES)

  ],

  declarations: [],
  exports: [
    RouterModule
  ]

})

export class DirtyFormRoutingModule { }

 