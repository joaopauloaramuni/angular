import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importe o FormsModule

import { SalesReportComponent } from './sales-report.component';

@NgModule({
  declarations: [
    SalesReportComponent
  ],
  imports: [
    CommonModule,
    FormsModule // Adicione o FormsModule ao array de imports
  ],
  exports: [
    SalesReportComponent
  ]
})
export class SalesReportModule { }
