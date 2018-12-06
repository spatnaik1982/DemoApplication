import { Component, OnInit } from '@angular/core';
import { single } from './data';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  single: any[];
  multi: any[];

  view: any[] = [600, 350];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = false;
  xAxisLabel = 'Country';
  showYAxisLabel = false;
  yAxisLabel = 'Population';

  colorScheme = {
    domain: ['#781DA0', '#0065AB', '#00968B', '#AAAAAA']
  };

  scheme = 'night';

  constructor() {
    Object.assign(this, { single });
  }

  onSelect(event) {
    console.log(event);
  }

  ngOnInit() {

  }

}
