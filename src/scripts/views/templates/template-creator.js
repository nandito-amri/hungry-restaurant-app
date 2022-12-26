import CONFIG from '../../globals/config';

const createRestaurantItemTemplate = (restaurant) => `
  <div class="grid-item">
    <img class="lazyload" data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}">
    <div class="rating-tag flex">
      <img src="assets/star.png" alt="">
      <p>${restaurant.rating}</p>
    </div>
    <p class="restaurant-name"><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></p>
    <p class="restaurant-city">${restaurant.city}</p>
  </div>
`;

const createRestaurantDetailTemplate = (restaurant) => `
  <img class="lazyload" data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}">
  <div class="detail">
    <h4 class="detail-name">${restaurant.name}</h4>
    <p class="detail-city">${restaurant.city}</p>
    <p class="detail-address">${restaurant.address}</p>
    <p class="detail-rating">${restaurant.rating.toFixed(1)}</p>
    <div class="flex" id="categories"></div>
    <p class="description">${restaurant.description}</p>
  </div>
`;

const createCategoryTemplate = (category) => `
  <p class="detail-category">${category}</p>
`;

const createCustomerReviewItemTemplate = (review) => `
  <div class="grid-item review-item">
    <p class="customer-name">${review.name}</p>
    <p class="date-review">${review.date}</p>
    <p class="detail-review">${review.review}</p>
  </div>
`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

const createMenuTemplate = (menu) => `
  <p class="menu-list">${menu}</p>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
  createMenuTemplate,
  createCategoryTemplate,
  createCustomerReviewItemTemplate,
};
