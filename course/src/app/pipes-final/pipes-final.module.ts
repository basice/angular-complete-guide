import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';
import { RunComponent } from './run/run.component';
import { ShortenPipe } from './shorten.pipe';

@NgModule({
  declarations: [
    RunComponent,
    ShortenPipe,
    FilterPipe
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [RunComponent]
})
export class PipesFinalModule { }
