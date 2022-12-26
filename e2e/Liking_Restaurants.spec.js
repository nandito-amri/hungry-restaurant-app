const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favourite');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeElement('#restaurants');
  I.see('There is no restaurant you\'ve liked', '.restaurant-item__not__found');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see('There is no restaurant you\'ve liked', '.restaurant-item__not__found');

  I.amOnPage('/');

  I.waitForElement('.restaurant-name', 2);
  I.seeElement('.restaurant-name');
  const firstRestaurant = locate('.restaurant-name a').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.waitForElement('#likeButton', 2);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favourite');
  I.seeElement('.restaurant-name');
  const likedRestaurantName = await I.grabTextFrom('.restaurant-name');

  assert.strictEqual(firstRestaurantName, likedRestaurantName);
});

Scenario('unliking one restaurant', async ({ I }) => {
  I.see('There is no restaurant you\'ve liked', '.restaurant-item__not__found');

  I.amOnPage('/');

  I.waitForElement('.restaurant-name', 2);
  I.seeElement('.restaurant-name');
  const firstRestaurant = locate('.restaurant-name a').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.waitForElement('#likeButton', 2);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favourite');
  I.seeElement('.restaurant-name');
  const likedRestaurantName = await I.grabTextFrom('.restaurant-name');

  assert.strictEqual(firstRestaurantName, likedRestaurantName);

  const firstLikedRestaurant = locate('.restaurant-name a').first();
  I.click(firstLikedRestaurant);

  I.waitForElement('#likeButton', 2);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favourite');
  I.see('There is no restaurant you\'ve liked', '.restaurant-item__not__found');
});
