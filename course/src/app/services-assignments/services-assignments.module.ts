import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RunComponent } from './run/run.component';
import { ActiveUsersComponent } from './services-assignment-solution/active-users/active-users.component';
import { InactiveUsersComponent } from './services-assignment-solution/inactive-users/inactive-users.component';
import { ServicesAssignmentSolutionComponent } from './services-assignment-solution/services-assignment-solution.component';

@NgModule({
  declarations: [
    RunComponent,
    ServicesAssignmentSolutionComponent,
    ActiveUsersComponent,
    InactiveUsersComponent],
  imports: [
    CommonModule
  ],
  exports: [RunComponent]
})
export class ServicesAssignmentsModule {
}
