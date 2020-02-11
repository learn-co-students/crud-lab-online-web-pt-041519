
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {restaurants: [], reviews: []}, action) {

    switch(action.type) {
        case 'ADD_RESTAURANT':
            const restaurant = {
                id: cuidFn(),
                text: action.restaurant,
                reviews: [],
            }
            return {...state, restaurants: [...state.restaurants, restaurant]}

        case 'DELETE_RESTAURANT':
            return {...state, restaurants: state.restaurants.filter(restaurant => restaurant.id !== action.id)}
        
        case 'ADD_REVIEW':
            // copy existing state
            const newState = {restaurants: [...state.restaurants], reviews: [...state.reviews]};
            // get the location of the current restaurant
        
            const review = {
                id: cuidFn(),
                text: action.review,
                restaurantId: action.restaurantId
            }

            // add new review to restaurant it belongs to
            newState.reviews.push(review);
            
            return newState;
            
        case 'DELETE_REVIEW':
                const reviews = state.reviews.filter(review => review.id !== action.id)
                return {...state, reviews } 
        default:
            return state
    }
}
