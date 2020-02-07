
import cuid from 'cuid';
import { combineReducers } from 'redux';
export const cuidFn = cuid;

export function manageRestaurants(state = {
    restaurants: []
}, action) {
    switch(action.type) {
        case "ADD_RESTAURANT":
            return {...state, restaurants: [...state.restaurants, {
                text: action.text,
                id: cuid()
            }]}

        case "DELETE_RESTAURANT":
            return {...state, restaurants: state.restaurants.filter(r => r.id !== action.id)}

        default:
            return state
    }
}

export function manageReviews(state={ 
        reviews: []
    }, action){
    switch(action.type){
        case "ADD_REVIEW":
            return {...state, reviews: [...state.reviews, {
                text: action.text.text,
                restaurantId: action.text.restaurantId,
                id: cuid()
            }]}

        case "DELETE_REVIEW":
            return {...state, reviews: state.reviews.filter(r => r.id !== action.id)}
        
        case "DELETE_RESAURANT":
            return {...state, reviews: state.reviews.filter(r => r.restaurantId !== action.restId)}

        default:
            return state    
    }
}

const rootReducer = combineReducers({
    restaurants: manageRestaurants,
    reviews: manageReviews
})

export default rootReducer
