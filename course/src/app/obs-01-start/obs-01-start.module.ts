import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { Obs01StartRoutingModule } from './obs-01-start-routing.module';
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
    Obs01StartRoutingModule
  ],
  exports: [
    RunComponent
  ]
})
export class Obs01StartModule { }
