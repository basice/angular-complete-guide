import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { Obs02FirstCustomObservableRoutingModule } from './obs-02-first-custom-observable-routing.module';
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
    Obs02FirstCustomObservableRoutingModule

  ],
  exports: [
    RunComponent
  ]
})
export class Obs02FirstCustomObservableModule {
}
