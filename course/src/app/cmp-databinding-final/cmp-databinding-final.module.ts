import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CockpitComponent } from './cockpit/cockpit.component';
import { RunComponent } from './run/run.component';
import { ServerElementComponent } from './server-element/server-element.component';

@NgModule({
  declarations: [
    RunComponent,
    CockpitComponent,
    ServerElementComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [RunComponent]
})
export class CmpDatabindingFinalModule {
}
