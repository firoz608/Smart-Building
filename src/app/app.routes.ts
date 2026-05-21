import { Routes } from '@angular/router';
import { OverviewWidget } from './components/overview-widget/overview-widget';
import { ProductUpdates } from './components/product-updates/product-updates';
import { AssetHealth } from './components/asset-health/asset-health';
import { BuildingMap } from './components/building-map/building-map';
import { DeviceHealth } from './components/device-health/device-health';

export const routes: Routes = [
    { path: '', redirectTo: '/overview', pathMatch: 'full' },
    { path: 'overview', component: OverviewWidget },
    { path: 'product', component: ProductUpdates },
    { path: 'asset-health', component: AssetHealth },
    { path: 'interactive-map', component: BuildingMap },
    { path: 'device-health', component: DeviceHealth },
    
];
