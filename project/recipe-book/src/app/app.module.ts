import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { PrjStartModule as RunModule } from './prj-start/prj-start.module';
// import { PrjBasicsFinalModule as RunModule } from './prj-basics-final/prj-basics-final.module';
// import { PrjCmpDatabindningFinalModule as RunModule } from './prj-cmp-databindning-final/prj-cmp-databindning-final.module';
// import { PrjDirectivesFinalModule as RunModule } from './prj-directives-final/prj-directives-final.module';
// import { PrjServicesFinalModule as RunModule } from './prj-services-final/prj-services-final.module';
// import { PrjRoutingFinalModule as RunModule } from './prj-routing-final/prj-routing-final.module';
// import { PrjObservablesFinalModule as RunModule } from './prj-observables-final/prj-observables-final.module';
// import { PrjFormsTdModule as RunModule } from './prj-forms-td/prj-forms-td.module';
// import { PrjFormsReactiveModule as RunModule } from './prj-forms-reactive/prj-forms-reactive.module';
import { PrjFormsFinalModule as RunModule } from './prj-forms-final/prj-forms-final.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, RunModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
