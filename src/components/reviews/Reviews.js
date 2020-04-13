import React from 'react';
import Review from './Review';

const Reviews = props => {

  // Only allow reviews for current restaurant
  const restaurantReviews = props.reviews.filter(review => review.restaurantId === props.restaurantId)

  const reviews = restaurantReviews.map(r => <Review key={r.id} review={r} deleteReview={props.deleteReview} />)

  return (
    <div>
      <ul>
        {reviews}
      </ul>
    </div>
  )
};

export default Reviews;