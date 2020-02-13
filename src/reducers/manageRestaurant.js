import cuid from 'cuid';
// export const cuidFn = cuid;

export default function manageRestaurants( state = { restaurants: [], reviews: [], }, action) {
    switch (action.type) {
    case 'ADD_RESTAURANT':
        const restaurant = {id: cuid(), text: action.payload}
        return {...state, restaurants: [ ...state.restaurants, restaurant] }
    case 'DELETE_RESTAURANT':
        const restaurants = state.restaurants.filter(r => r.id !== action.id);
        return { ...state, restaurants}
    case 'ADD_REVIEW':
        const review = {id: Math.floor(Math.random() * 1000), text: action.review.text, restaurantId: action.review.restaurantId }
        return {...state, reviews: state.reviews.concat(review)}
    case 'DELETE_REVIEW':
        const reviews = state.reviews.filter(r => r.id !== action.id);
        return { ...state, reviews}
    default:
        return state
    }
}
