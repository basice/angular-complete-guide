import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthInterceptorService } from './run/auth-interceptor.service';
import { LoggingInterceptorService } from './run/logging-interceptor.service';
import { RunComponent } from './run/run.component';

@NgModule({
  declarations: [RunComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoggingInterceptorService,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ],
  exports: [RunComponent]
})
export class Http09FinishedModule {
}
