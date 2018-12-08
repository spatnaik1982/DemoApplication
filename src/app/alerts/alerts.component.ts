import { Component, OnInit } from '@angular/core';
import { AlertsService } from '../alerts.service';
import { Alert } from '../common/alert';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css']
})
export class AlertsComponent implements OnInit {

  alerts: Alert[];

  constructor(private alertsService: AlertsService) { }

  ngOnInit() {
    this.getAlerts();
  }

  getAlerts(): void {
    this.alerts = this.alertsService.getAlerts();
  }

  length(): number {
    return this.alerts.length;
  }
}
