import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirtyFormComponent } from './dirty-form/dirty-form.component';
import { OtherRouteComponent } from './other-route/other-route.component';
import { DirtyFormGuard } from './dirty-form-guard';
import { DirtyFormModule } from './dirty-form/dirty-form.module';

@NgModule({
  declarations: [
    AppComponent,
    DirtyFormComponent,
    OtherRouteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DirtyFormModule
  ],
  providers: [DirtyFormGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
