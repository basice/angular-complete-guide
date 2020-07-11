import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// 01. Getting Started
// import { GettingStartedModule as RunModule } from './getting-started/getting-started.module';

// 02. The Basics
// import { BasicsComponentsModule as RunModule } from './basics-components/basics-components.module';
// import { BasicsDatabindingModule as RunModule } from './basics-databinding/basics-databinding.module';
// import { BasicsDirectivesModule as RunModule } from './basics-directives/basics-directives.module';
// import { BasicsNgforAdditionModule as RunModule } from './basics-ngfor-addition/basics-ngfor-addition.module';
// import { BasicsAssignmentsModule as RunModule } from './basics-assignments/basics-assignments.module';
// import { BasicsFinalModule as RunModule } from './basics-final/basics-final.module';

// 03. Course Project - The Basics
// import { PrjStartModule as RunModule } from './prj-start/prj-start.module';
// import { PrjBasicsFinalModule as RunModule } from './prj-basics-final/prj-basics-final.module';

// 04. Debugging
// import { DebuggingModule as RunModule } from './debugging/debugging.module';

// 05. Components & Databinding Deep Dive
// import { CmpDatabindingStartModule as RunModule } from './cmp-databinding-start/cmp-databinding-start.module';
// import { CmpDatabindingFinalModule as RunModule } from './cmp-databinding-final/cmp-databinding-final.module';
// import { CmpDatabindingAssignmentsModule as RunModule } from './cmp-databinding-assignments/cmp-databinding-assignments.module';

// 06. Course Project - Components & Databinding
// import { PrjCmpDatabindningFinalModule as RunModule } from './prj-cmp-databindning-final/prj-cmp-databindning-final.module';

// 07. Directives Deep Dive
// import { DirectivesStartModule as RunModule } from './directives-start/directives-start.module';
// import { DirectivesFinalModule as RunModule } from './directives-final/directives-final.module';

// 08. Course Project - Directives
// import { PrjDirectivesFinalModule as RunModule } from './prj-directives-final/prj-directives-final.module';

// 09. Using Services & Dependency Injection
// import { ServicesStartModule as RunModule } from './services-start/services-start.module';
// import { ServicesFinalModule as RunModule } from './services-final/services-final.module';
// import { ServicesAssignmentsModule as RunModule } from './services-assignments/services-assignments.module';

// 10. Course Project - Services & Dependency Injection
// import { PrjServicesFinalModule as RunModule } from './prj-services-final/prj-services-final.module';

// 11. Changing Pages with Routing
// import { RoutingStartModule as RunModule } from './routing-start/routing-start.module';
// import { RoutingFinalModule as RunModule } from './routing-final/routing-final.module';

// 12. Course Project - Routing
// import { PrjRoutingFinalModule as RunModule } from './prj-routing-final/prj-routing-final.module';

// 13. Understanding Observables
// import { Obs01StartModule as RunModule } from './obs-01-start/obs-01-start.module';
// import { Obs02FirstCustomObservableModule as RunModule } from './obs-02-first-custom-observable/obs-02-first-custom-observable.module';
// import { Obs03CompleteCustomObservableModule as RunModule } from './obs-03-complete-custom-observable/obs-03-complete-custom-observable.module';
// import { Obs04OperatorsModule as RunModule } from './obs-04-operators/obs-04-operators.module';
// import { Obs05FinishedModule as RunModule } from './obs-05-finished/obs-05-finished.module';
// import { ObservablesStartModule as RunModule } from './observables-start/observables-start.module';

// 14. Course Project - Observables
// import { PrjRoutingFinalWithObservablesModule as RunModule } from './prj-routing-final-with-observables/prj-routing-final-with-observables.module';
// import { PrjObservablesFinalModule as RunModule } from './prj-observables-final/prj-observables-final.module';

// 15. Handling Forms in Angular Apps
// import { FormsTdStartModule as RunModule } from './forms-td-start/forms-td-start.module';
// import { FormsTdFinalModule as RunModule } from './forms-td-final/forms-td-final.module';
// import { FormsReactiveStartModule as RunModule } from './forms-reactive-start/forms-reactive-start.module';
// import { FormsReactiveFinalModule as RunModule } from './forms-reactive-final/forms-reactive-final.module';
// import { FormsReactiveAssignmentSolutionModule as RunModule } from './forms-reactive-assignment-solution/forms-reactive-assignment-solution.module';

// 16. Course Project - Forms
// import { PrjObservablesFinalModule as RunModule } from './prj-observables-final/prj-observables-final.module';
// import { PrjFormsTdModule as RunModule } from './prj-forms-td/prj-forms-td.module';
// import { PrjFormsReactiveModule as RunModule } from './prj-forms-reactive/prj-forms-reactive.module';
// import { PrjFormsFinalModule as RunModule } from './prj-forms-final/prj-forms-final.module';

// 17. Using Pipes to Transform Output
// import { PipesStartModule as RunModule } from './pipes-start/pipes-start.module';
// import { PipesFinalModule as RunModule } from './pipes-final/pipes-final.module';

// 18. Making Http Requests
// import { Http01StartModule as RunModule } from './http-01-start/http-01-start.module';
// import { Http02PostRequestModule as RunModule } from './http-02-post-request/http-02-post-request.module';
// import { Http03GetAndTransformDataModule as RunModule } from './http-03-get-and-transform-data/http-03-get-and-transform-data.module';
// import { Http04LoadingIndicatorModule as RunModule } from './http-04-loading-indicator/http-04-loading-indicator.module';
// import { Http05HandlingErrorsModule as RunModule } from './http-05-handling-errors/http-05-handling-errors.module';
// import { Http06HeadersModule as RunModule } from './http-06-headers/http-06-headers.module';
// import { Http07QueryParamsModule as RunModule } from './http-07-query-params/http-07-query-params.module';
// import { Http08InterceptorModule as RunModule } from './http-08-interceptor/http-08-interceptor.module';
// import { Http09FinishedModule as RunModule } from './http-09-finished/http-09-finished.module';

// 19. Course Project - Http
// import { PrjHttp01SaveAndFetchRecipesModule as RunModule } from './prj-http-01-save-and-fetch-recipes/prj-http-01-save-and-fetch-recipes.module';
import { PrjHttp02FinishedModule as RunModule } from './prj-http-02-finished/prj-http-02-finished.module';

// 20. Authentication & Route Protection in Angular
// import { Auth01AuthComponentModule as RunModule } from './auth-01-auth-component/auth-01-auth-component.module';
// import { Auth02AuthFormModule as RunModule } from './auth-02-auth-form/auth-02-auth-form.module';
// import { Auth03SignupRequestModule as RunModule } from './auth-03-signup-request/auth-03-signup-request.module';
// import { Auth04AddedLoginModule as RunModule } from './auth-04-added-login/auth-04-added-login.module';
// import { Auth05AddedTokenToRequestsModule as RunModule } from './auth-05-added-token-to-requests/auth-05-added-token-to-requests.module';
// import { Auth06LogoutModule as RunModule } from './auth-06-logout/auth-06-logout.module';
// import { Auth07AutologinAutologoutModule as RunModule } from './auth-07-autologin-autologout/auth-07-autologin-autologout.module';
// import { Auth08FinishedModule as RunModule } from './auth-08-finished/auth-08-finished.module';

// 21. Dynamic Components
// import { DynCmpFinishedModule as RunModule } from './dyn-cmp-finished/dyn-cmp-finished.module';

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
