import { Component, OnInit } from '@angular/core';
import { GridsterConfig, GridsterItem }  from 'angular-gridster2';

import { DashboardService } from '../services/dashboard.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  get options(): GridsterConfig {
    return this.dashboardService.options;
  }
  get layout(): GridsterItem[] {
    return this.dashboardService.layout;
  }

  constructor(public dashboardService: DashboardService) { }

  ngOnInit() {
  }

}
