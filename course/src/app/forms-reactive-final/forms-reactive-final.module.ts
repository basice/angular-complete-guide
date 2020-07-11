import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RunComponent } from './run/run.component';

@NgModule({
  declarations: [
    RunComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    RunComponent
  ]
})
export class FormsReactiveFinalModule {
}
