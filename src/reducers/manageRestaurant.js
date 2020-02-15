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

            const newState = {restaurants: [...state.restaurants], reviews: [...state.reviews]};
        
            const review = {
                id: cuidFn(),
                text: action.review,
                restaurantId: action.restaurantId
            }

            newState.reviews.push(review);
            
            return newState;
            
        case 'DELETE_REVIEW':
                const reviews = state.reviews.filter(review => review.id !== action.id)
                return {...state, reviews }
        default:
            return state
    }
}