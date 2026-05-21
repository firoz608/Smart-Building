import { AfterViewInit, Component, inject, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';
import * as L from 'leaflet';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-building-map',
  imports: [CommonModule],
  templateUrl: './building-map.html',
  styleUrl: './building-map.css',
})
export class BuildingMap implements AfterViewInit {

  private service = inject(DashboardService);
  private map!: L.Map;
  buildings: any[] = [];
  async ngAfterViewInit() {

    const buildings = await this.service.getBuildings();
    this.buildings = buildings;

    // init map
    this.map = L.map('map').setView([12.914, 77.599], 12);

    // tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap'
    }).addTo(this.map);

    // markers
    buildings.forEach((b: any) => {

      const marker = L.marker(b.geoLocation).addTo(this.map);

      const popupContent = `
        <div style="font-size:13px">
          <b>${b.name}</b><br>
          City: ${b.city}<br>
          Health Score: ${b.healthScore}%<br>
          Area: ${b.area} sq.ft
        </div>
      `;

      marker.bindPopup(popupContent);

      // hover effect (optional)
      marker.on('mouseover', () => marker.openPopup());
    });

    
  }

  
}