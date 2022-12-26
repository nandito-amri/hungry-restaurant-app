import FavoriteRestaurantIdb from '../../data/favourite-restaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Favourite = {
  async render() {
    return `
    <div class="container restaurant-container">
        <div class="label">
          <h4>Favourite Restaurant</h4>
        </div>
        <div class="grid-container" id="restaurants"></div>
    </div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantsContainer = document.querySelector('#restaurants');

    if (restaurants.length === 0) {
      restaurantsContainer.innerHTML += `
        <div class="restaurant-item__not__found">There is no restaurant you've liked</div>
      `;
    } else {
      restaurants.forEach((restaurant) => {
        restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
      });
    }
  },
};

export default Favourite;
