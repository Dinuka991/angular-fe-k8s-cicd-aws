import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantService } from '../../restaurant-service.service';
import { Observer } from 'rxjs';

@Component({
  selector: 'app-restaurant-listing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './restaurant-listing.component.html',
  styleUrls: ['./restaurant-listing.component.css']
})
export class RestaurantListingComponent implements OnInit {
  restaurants: any[] = [];
  private restaurantService = inject(RestaurantService);

  ngOnInit() {
    this.getRestaurants();
  }

  private getRestaurants() {
    const restaurantObserver: Observer<any> = {
      next: (data) => {
        this.restaurants = data;
      },
      error: (error) => {
        console.error('Error fetching restaurants:', error);
      },
      complete: () => {
        console.log('Restaurant data fetching complete');
      }
    };

    this.restaurantService.getRestaurants().subscribe(restaurantObserver);
  }
}
