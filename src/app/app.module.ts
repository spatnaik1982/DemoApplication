import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartComponent } from './chart/chart.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { TopologyComponent } from './topology/topology.component';
import { AlertsComponent } from './alerts/alerts.component';
import { GeomapComponent } from './geomap/geomap.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    DashboardComponent,
    HeaderComponent,
    HomeComponent,
    TopologyComponent,
    AlertsComponent,
    GeomapComponent
  ],
  imports: [
    BrowserModule,
    ClarityModule,
    BrowserAnimationsModule,
    NgxChartsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
