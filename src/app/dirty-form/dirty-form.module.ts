import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirtyFormGuard } from '../dirty-form-guard';
import { DirtyFormRoutingModule } from './dirty-form-routing.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DirtyFormRoutingModule
  ],
  providers: [DirtyFormGuard]
})
export class DirtyFormModule { }
