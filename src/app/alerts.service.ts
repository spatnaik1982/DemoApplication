import { Injectable } from '@angular/core';
import { Alert } from './common/alert';
import { ALERTS } from './mockData/alertsData';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  constructor() { }

  getAlerts(): Alert[] {
    return ALERTS;
  }
}
