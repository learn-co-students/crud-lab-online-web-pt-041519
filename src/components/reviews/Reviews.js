import React from 'react';
import Review from './Review';

const Reviews = props => {
  // user can only write reviews for related restaurant
    const restaurantReviews = props.reviews.filter(review => review.restaurantId === props.restaurantId)

    const reviews = restaurantReviews.map(review => <Review key={review.id} review={review} deleteReview={props.deleteReview} />)
    
    return (
      <div>
        <ul>
          { reviews }
        </ul>
      </div>
    ); 
}

export default Reviews;