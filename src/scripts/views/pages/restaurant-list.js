import RestaurantListSource from '../../data/restaurantlist-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const RestaurantList = {
  async render() {
    return `
      <div class="hero-img">
        <picture>
          <source type="image/jpeg" media="(max-width: 600px)" srcset="assets/hero-image_2-small.jpg">
          <img src='assets/hero-image_2-large.jpg' 
              alt="Hero Image">
        </picture>
        <div class="yellow-cover"></div>
        <h1>Hungry Restaurant</h1>
        <p>Find your restaurant to shut your hunger down</p>
      </div>
      <div class="grid-container" id="restaurants"></div>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantListSource.restaurants();
    const restaurantsContainer = document.querySelector('#restaurants');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default RestaurantList;
