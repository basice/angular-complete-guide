import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BasicHighlightDirective } from './basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './better-highlight/better-highlight.directive';
import { RunComponent } from './run/run.component';
import { UnlessDirective } from './run/unless.directive';

@NgModule({
  declarations: [
    RunComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [RunComponent]
})
export class DirectivesFinalModule {
}
