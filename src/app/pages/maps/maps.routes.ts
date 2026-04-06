import { Routes } from '@angular/router';

import { MapsComponent } from './maps.component';
import { GmapsComponent } from './gmaps/gmaps.component';
import { LeafletComponent } from './leaflet/leaflet.component';
import { BubbleMapComponent } from './bubble/bubble-map.component';
import { SearchMapComponent } from './search-map/search-map.component';

export const routes: Routes = [{
  path: '',
  component: MapsComponent,
  children: [{
    path: 'gmaps',
    component: GmapsComponent,
  }, {
    path: 'leaflet',
    component: LeafletComponent,
  }, {
    path: 'bubble',
    component: BubbleMapComponent,
  }, {
    path: 'searchmap',
    component: SearchMapComponent,
  }],
}];
