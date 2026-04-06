import { Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import { CountryOrdersMapService } from './e-commerce/country-orders/map/country-orders-map.service';

export const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'dashboard',
      component: ECommerceComponent,
      providers: [CountryOrdersMapService],
    },
    {
      path: 'iot-dashboard',
      component: DashboardComponent,
    },
    {
      path: 'layout',
      loadChildren: () => import('./layout/layout.routes')
        .then(m => m.routes),
    },
    {
      path: 'forms',
      loadChildren: () => import('./forms/forms.routes')
        .then(m => m.routes),
    },
    {
      path: 'ui-features',
      loadChildren: () => import('./ui-features/ui-features.routes')
        .then(m => m.routes),
    },
    {
      path: 'modal-overlays',
      loadChildren: () => import('./modal-overlays/modal-overlays.routes')
        .then(m => m.routes),
    },
    {
      path: 'extra-components',
      loadChildren: () => import('./extra-components/extra-components.routes')
        .then(m => m.routes),
    },
    {
      path: 'maps',
      loadChildren: () => import('./maps/maps.routes')
        .then(m => m.routes),
    },
    {
      path: 'charts',
      loadChildren: () => import('./charts/charts.routes')
        .then(m => m.routes),
    },
    {
      path: 'editors',
      loadChildren: () => import('./editors/editors.routes')
        .then(m => m.routes),
    },
    {
      path: 'tables',
      loadChildren: () => import('./tables/tables.routes')
        .then(m => m.routes),
    },
    {
      path: 'miscellaneous',
      loadChildren: () => import('./miscellaneous/miscellaneous.routes')
        .then(m => m.routes),
    },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];
