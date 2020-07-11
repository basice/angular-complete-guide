import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { Obs05FinishedRoutingModule } from './obs-05-finished-routing.module';
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
    Obs05FinishedRoutingModule
  ],
  exports: [
    RunComponent
  ]
})
export class Obs05FinishedModule { }
