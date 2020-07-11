import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CmpDatabindningAssignmentSolutionComponent } from './cmp-databindning-assignment-solution/cmp-databindning-assignment-solution.component';
import { EvenComponent } from './cmp-databindning-assignment-solution/even/even.component';
import { GameControlComponent } from './cmp-databindning-assignment-solution/game-control/game-control.component';
import { OddComponent } from './cmp-databindning-assignment-solution/odd/odd.component';
import { RunComponent } from './run/run.component';

@NgModule({
  declarations: [
    RunComponent,
    CmpDatabindningAssignmentSolutionComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent],
  imports: [
    CommonModule
  ],
  exports: [RunComponent]
})
export class CmpDatabindingAssignmentsModule {
}
