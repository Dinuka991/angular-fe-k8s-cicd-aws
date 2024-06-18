import { TestBed } from '@angular/core/testing';


describe('RestaurantServiceService', () => {
  let service: RestaurantServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestaurantServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
