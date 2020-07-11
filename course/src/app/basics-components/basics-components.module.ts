import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RunComponent } from './run/run.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';

@NgModule({
  declarations: [
    RunComponent,
    ServersComponent,
    ServerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RunComponent
  ]
})
export class BasicsComponentsModule {
}
