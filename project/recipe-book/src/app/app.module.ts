import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import { PrjStartModule as RunModule } from './prj-start/prj-start.module';
import { PrjBasicsFinalModule as RunModule } from './prj-basics-final/prj-basics-final.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RunModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
