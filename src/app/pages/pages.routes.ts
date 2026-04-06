import { Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';

export const PAGES_ROUTES: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'dashboard',
      component: ECommerceComponent,
    },
    {
      path: 'iot-dashboard',
      component: DashboardComponent,
    },
    {
      path: 'layout',
      loadChildren: () => import('./layout/layout.routes')
        .then(m => m.LAYOUT_ROUTES),
    },
    {
      path: 'forms',
      loadChildren: () => import('./forms/forms.routes')
        .then(m => m.FORMS_ROUTES),
    },
    {
      path: 'ui-features',
      loadChildren: () => import('./ui-features/ui-features.routes')
        .then(m => m.UI_FEATURES_ROUTES),
    },
    {
      path: 'modal-overlays',
      loadChildren: () => import('./modal-overlays/modal-overlays.routes')
        .then(m => m.MODAL_OVERLAYS_ROUTES),
    },
    {
      path: 'extra-components',
      loadChildren: () => import('./extra-components/extra-components.routes')
        .then(m => m.EXTRA_COMPONENTS_ROUTES),
    },
    {
      path: 'maps',
      loadChildren: () => import('./maps/maps.routes')
        .then(m => m.MAPS_ROUTES),
    },
    {
      path: 'charts',
      loadChildren: () => import('./charts/charts.routes')
        .then(m => m.CHARTS_ROUTES),
    },
    {
      path: 'editors',
      loadChildren: () => import('./editors/editors.routes')
        .then(m => m.EDITORS_ROUTES),
    },
    {
      path: 'tables',
      loadChildren: () => import('./tables/tables.routes')
        .then(m => m.TABLES_ROUTES),
    },
    {
      path: 'miscellaneous',
      loadChildren: () => import('./miscellaneous/miscellaneous.routes')
        .then(m => m.MISCELLANEOUS_ROUTES),
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
