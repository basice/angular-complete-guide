import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { Obs03CompleteCustomObservableRoutingModule } from './obs-03-complete-custom-observable-routing.module';
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
    Obs03CompleteCustomObservableRoutingModule
  ],
  exports: [
    RunComponent
  ]
})
export class Obs03CompleteCustomObservableModule { }
