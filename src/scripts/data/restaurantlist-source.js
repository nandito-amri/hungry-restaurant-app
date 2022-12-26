import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantListSource {
  static async restaurants() {
    const response = await fetch(API_ENDPOINT.RESTAURANT_LIST);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }

  static async recommendationRestaurants(id) {
    const response = await fetch(API_ENDPOINT.RESTAURANT_LIST);
    const responseJson = await response.json();
    const restaurantList = responseJson.restaurants;
    const recommendationRes = [];
    restaurantList.forEach((restaurant) => {
      if (restaurant.id !== id) {
        recommendationRes.push(restaurant);
      }
    });

    return recommendationRes;
  }
}

export default RestaurantListSource;
