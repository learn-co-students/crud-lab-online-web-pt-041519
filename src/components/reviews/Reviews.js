import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const {reviews, deleteReview, restaurantId} = this.props
    const reviewList = reviews.map(review => {
      if (review.restaurantId === restaurantId ){

        return (
          <Review
          key={review.key}
          review={review}
          deleteReview={deleteReview}
          />
          )
        }
    })
    
    return (
      <ul>
        {reviewList}
      </ul>
    );
  }
};

export default Reviews;