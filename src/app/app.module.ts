import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GridsterModule } from 'angular-gridster2';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LineChartComponent,
    BarChartComponent
  ],
  imports: [
    BrowserModule,
    GridsterModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [LineChartComponent, BarChartComponent]
})
export class AppModule { }
