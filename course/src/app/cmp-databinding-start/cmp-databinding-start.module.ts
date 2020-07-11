import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RunComponent } from './run/run.component';

@NgModule({
  declarations: [RunComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [RunComponent]
})
export class CmpDatabindingStartModule {
}
