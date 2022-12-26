import RestaurantList from '../views/pages/restaurant-list';
import Detail from '../views/pages/detail';
import Favourite from '../views/pages/favourite';

const routes = {
  '/': RestaurantList,
  '/list': RestaurantList,
  '/detail/:id': Detail,
  '/favourite': Favourite,
};

export default routes;
