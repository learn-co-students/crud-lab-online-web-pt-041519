
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {
    restaurants: [],
    reviews: []
}, action) {
    switch(action.type) {
        case 'ADD_RESTAURANT':
            const newRestaurant = { id: cuid(), text: action.text}
            return {...state, restaurants: state.restaurants.concat(newRestaurant) }

        case 'DELETE_RESTAURANT':
            const restaurants =  state.restaurants.filter(rest => rest.id !== action.id)
            return {...state, restaurants}

        case 'ADD_REVIEW':
            console.log(action)
            const newReview = { id: cuid(), text: action.review.text, restaurantId: action.review.restaurantId}
            return {...state, reviews: state.reviews.concat(newReview) }

        case 'DELETE_REVIEW':
            const reviews =  state.reviews.filter(rev => rev.id !== action.id)
            return {...state, reviews}

        default:
            return state
    }

}
