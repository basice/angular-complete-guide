import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RunComponent } from './run/run.component';

@NgModule({
  declarations: [RunComponent],
  imports: [CommonModule],
  exports: [RunComponent]
})
export class PrjStartModule {
}
