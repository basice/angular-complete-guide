import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AssignmentOneComponent } from './assignment-one/assignment-one.component';
import { SuccessAlertComponent } from './assignment-one/success-alert/success-alert.component';
import { WarningAlertComponent } from './assignment-one/warning-alert/warning-alert.component';
import { AssignmentThreeComponent } from './assignment-three/assignment-three.component';
import { AssignmentTwoComponent } from './assignment-two/assignment-two.component';
import { RunComponent } from './run/run.component';

@NgModule({
  declarations: [
    RunComponent,
    AssignmentOneComponent,
    SuccessAlertComponent,
    WarningAlertComponent,
    AssignmentTwoComponent,
    AssignmentThreeComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    RunComponent
  ]

})
export class BasicsAssignmentsModule {
}
