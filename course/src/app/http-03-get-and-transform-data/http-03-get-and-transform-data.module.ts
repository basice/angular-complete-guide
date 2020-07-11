import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RunComponent } from './run/run.component';

@NgModule({
  declarations: [RunComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ], exports: [RunComponent]
})
export class Http03GetAndTransformDataModule {
}
