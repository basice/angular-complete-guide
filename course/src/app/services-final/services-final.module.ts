import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AccountComponent } from './account/account.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { RunComponent } from './run/run.component';

@NgModule({
  declarations: [
    RunComponent,
    AccountComponent,
    NewAccountComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [RunComponent]
})
export class ServicesFinalModule {
}
