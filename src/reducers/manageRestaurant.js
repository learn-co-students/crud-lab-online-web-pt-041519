import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {restaurants: [], reviews: []}, action) {
    switch (action.type) {
        case 'ADD_RESTAURANT':
            const newRestaurant = {
                id: cuid(),
                text: action.restaurant
            }
            return { ...state, restaurants: [...state.restaurants, newRestaurant] };

        case 'DELETE_RESTAURANT':
            return { ...state, restaurants: state.restaurants.filter( r => r.id !== action.id ) }

        case 'ADD_REVIEW':
            const newReview = {
                id: cuid(),
                restaurantId: action.review.restaurantId,
                text: action.review.text
            }
            return {...state, reviews: [...state.reviews, newReview]};

        case 'DELETE_REVIEW':
            return { ...state, reviews: state.reviews.filter( r => r.id !== action.id ) };

        default: 
            return state;
    }
}