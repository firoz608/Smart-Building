import { Component } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-overview-widget',
  imports: [CommonModule],
  templateUrl: './overview-widget.html',
  styleUrl: './overview-widget.css',
})
export class OverviewWidget {

  data: any;
  loading = true;
  error = false;

  constructor(private dashboardService: DashboardService) { }

  async ngOnInit() {

    try {

      this.data = await this.dashboardService.getOverview();

    } catch {

      this.error = true;

    } finally {

      this.loading = false;

    }
  }
}
