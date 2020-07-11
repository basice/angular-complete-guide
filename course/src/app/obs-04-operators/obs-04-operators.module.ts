import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { Obs04OperatorsRoutingModule } from './obs-04-operators-routing.module';
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
    Obs04OperatorsRoutingModule
  ],
  exports: [
    RunComponent
  ]
})
export class Obs04OperatorsModule { }
