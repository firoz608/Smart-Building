import { Component, signal } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-asset-health',
  imports: [
    CommonModule,
  ],
  templateUrl: './asset-health.html',
  styleUrl: './asset-health.css',
})
export class AssetHealth {
 buildings: any[] = [];
  loading = signal(true);
   data = signal<any[]>([]);

  constructor(private dashboardService: DashboardService) {}

  openIndex: number | null = null;

  async ngOnInit() {
    const res = await this.dashboardService.getAssetHealth();
    this.data.set(res);
    this.loading.set(false);
  }

  toggle(index: number) {
    this.openIndex = this.openIndex === index ? null : index;
  }
}
