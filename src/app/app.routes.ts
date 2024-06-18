import { Routes } from '@angular/router';
import { RestaurantListingComponent } from './component/restaunrant-listing/restaurant-listing.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'restaurants', component: RestaurantListingComponent },
];
