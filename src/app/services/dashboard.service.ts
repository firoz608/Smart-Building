import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
   async fetchData(url: string) {

    return new Promise(async (resolve, reject) => {

      setTimeout(async () => {

        try {

          const response = await fetch(url);

          if (!response.ok) {
            throw new Error('Failed to load data');
          }

          const data = await response.json();

          resolve(data);

        } catch (error) {
          reject(error);

        }

      }, 1500);

    });
  }

  getOverview() {
    
    return this.fetchData('data/overview.json');
  }

  getUpdates() {
    return this.fetchData('data/updates.json');
  }

  async getAssetHealth() {
   
    const res = await fetch('data/asset-health.json');
    return res.json();
  }

  getBuildings() {
    return fetch('data/buildings.json').then(res => res.json());
  }

  getDeviceHealth() {
    return this.fetchData('data/device-health.json');
  }
}
