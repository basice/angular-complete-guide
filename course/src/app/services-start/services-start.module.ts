import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
    CommonModule,
    FormsModule
  ],
  exports: [RunComponent]
})
export class ServicesStartModule {
}
