import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SalesReportModule } from './sales-report/sales-report.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SalesReportModule // Adicione SalesReportModule aos imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
