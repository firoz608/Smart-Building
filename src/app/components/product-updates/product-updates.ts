import { Component } from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-product-updates',
  imports: [
    DatePipe,
    CommonModule,
  ],
  templateUrl: './product-updates.html',
  styleUrl: './product-updates.css',
})
export class ProductUpdates {
   updates: any[] = [];
  loading = true;

  constructor(private dashboardService: DashboardService) {}

  async ngOnInit() {

    this.updates = await this.dashboardService.getUpdates() as any[];

    this.loading = false;
  }
}
