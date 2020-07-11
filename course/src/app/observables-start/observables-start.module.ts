import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { ObservablesStartRoutingModule } from './observables-start-routing.module';
import { RunComponent } from './run/run.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    RunComponent,
    HomeComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    ObservablesStartRoutingModule
  ],
  exports: [
    RunComponent
  ]
})
export class ObservablesStartModule { }
