import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { TopologyComponent } from './topology/topology.component';
import { AlertsComponent } from './alerts/alerts.component';
import { GeomapComponent } from './geomap/geomap.component';

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'home', component: HomeComponent },
  {path: 'topology', component: TopologyComponent },
  {path: 'alerts', component: AlertsComponent },
  {path: 'geomap', component: GeomapComponent },
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
