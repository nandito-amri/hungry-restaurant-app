import UrlParser from '../../routes/url-parser';
import RestaurantListSource from '../../data/restaurantlist-source';
import {
  createRestaurantDetailTemplate,
  createRestaurantItemTemplate,
  createMenuTemplate,
  createCategoryTemplate,
  createCustomerReviewItemTemplate,
} from '../templates/template-creator';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import FavoriteRestaurantIdb from '../../data/favourite-restaurant-idb';

const Detail = {
  async render() {
    return `
      <div id="detail-container"></div>
      <div class="menu-container flex">
        <div class="menu" id="food-menu">
          <div class="label">
            <h4>Food Menu</h4>
          </div>
        </div>
        <div class="menu" id="drink-menu">
          <div class="label">
            <h4>Food Menu</h4>
          </div>
        </div>
      </div>
      <div class="review-container">
        <div class="label flex">
          <h4>Customer Review</h4>
        </div>
        <div class="grid-container" id="reviews"></div>
      </div>
      <div class="recomendations-container">
        <div class="label">
          <h4>Recommendation Restaurant</h4>
        </div>
        <div class="grid-container" id="restaurants"></div>
      </div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const res = await RestaurantListSource.detailRestaurant(url.id);
    const restaurantConteiner = document.querySelector('#detail-container');
    restaurantConteiner.innerHTML = createRestaurantDetailTemplate(res);

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurants: FavoriteRestaurantIdb,
      restaurant: {
        id: res.id,
        name: res.name,
        description: res.description,
        pictureId: res.pictureId,
        city: res.city,
        rating: res.rating,
      },
    });

    const categoryList = res.categories;
    const nameOfCategories = categoryList.map(({ name }) => name);
    const categoriesContainer = document.querySelector('#categories');
    nameOfCategories.forEach((category) => {
      categoriesContainer.innerHTML += createCategoryTemplate(category);
    });

    const foodMenuList = res.menus.foods;
    const nameFoodMenuList = foodMenuList.map(({ name }) => name);
    const foodMenuContainer = document.querySelector('#food-menu');
    nameFoodMenuList.forEach((menuItem) => {
      foodMenuContainer.innerHTML += createMenuTemplate(menuItem);
    });

    const drinkMenuList = res.menus.drinks;
    const nameDrinkMenuList = drinkMenuList.map(({ name }) => name);
    const drinkMenuContainer = document.querySelector('#drink-menu');
    nameDrinkMenuList.forEach((menuItem) => {
      drinkMenuContainer.innerHTML += createMenuTemplate(menuItem);
    });

    const reviews = res.customerReviews;
    const reviewsContainer = document.querySelector('#reviews');
    reviews.forEach((review) => {
      reviewsContainer.innerHTML += createCustomerReviewItemTemplate(review);
    });

    const recommendationRestaurants = await RestaurantListSource.recommendationRestaurants(url.id);
    const restaurantRecommendationContainer = document.querySelector('#restaurants');
    recommendationRestaurants.forEach((recommendationRestaurant) => {
      restaurantRecommendationContainer.innerHTML += createRestaurantItemTemplate(recommendationRestaurant);
    });
  },
};

export default Detail;
