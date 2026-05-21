import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';
import { ChartConfiguration } from 'chart.js/auto';
import { CommonModule } from '@angular/common';
import { BaseChartDirective } from 'ng2-charts';


@Component({
  selector: 'app-device-health',
  imports: [
    CommonModule,
    BaseChartDirective,
  ],
  templateUrl: './device-health.html',
  styleUrl: './device-health.css',
})
export class DeviceHealth implements OnInit {

  lineChartData: any = {
    labels: [],
    datasets: []
  };

  loading = true;

  constructor(private dashboardService: DashboardService) {}

  async ngOnInit() {

    const data: any[] = await this.dashboardService.getDeviceHealth() as any[];

    this.lineChartData = {
      labels: data.map(x => x.month),
      datasets: [
        {
          data: data.map(x => x.healthy),
          label: 'Healthy'
        },
        {
          data: data.map(x => x.warning),
          label: 'Warning'
        },
        {
          data: data.map(x => x.critical),
          label: 'Critical'
        }
      ]
    };

    this.loading = false;
  }
}