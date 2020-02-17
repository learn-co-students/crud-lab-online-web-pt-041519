import cuid from "cuid";
export const cuidFn = cuid;

export default function manageRestaurants(
  state = {
    restaurants: [],
    reviews: []
  },
  action
) {
  console.log(action);
  switch (action.type) {
    case "ADD_RESTAURANT":
      const restaurant = {
        id: cuid(),
        text: action.payload
      };
      // return { restaurants: state.restaurants.concat(restaurant) };
      return { ...state, restaurants: [...state.restaurants, restaurant] };

    case "DELETE_RESTAURANT":
      const restaurants = state.restaurants.filter(
        restaurant => restaurant.id !== action.payload
      );
      return { ...state, restaurants };

    case "ADD_REVIEW":
      const review = {
        id: cuid(),
        text: action.payload.text,
        restaurantId: action.payload.restaurantId
      };
      return { ...state, reviews: [...state.reviews, review] };

    case "DELETE_REVIEW":
      const reviews = state.reviews.filter(
        review => review.id !== action.payload
      );
      return {
        ...state,
        reviews
      };

    default:
      return state;
  }
}
