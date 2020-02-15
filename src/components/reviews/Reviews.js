import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  render() {
    const { restaurantId, reviews, deleteReview} = this.props
    const relatedRevs = reviews.filter(review => review.restaurantId === restaurantId)

    const allRevs = relatedRevs.map(rev => {
      return <Review key={rev.id} deleteReview={deleteReview} review={rev}/>
    })
    return (
      <ul>
        {allRevs}
      </ul>
    );
  }
};

export default Reviews;