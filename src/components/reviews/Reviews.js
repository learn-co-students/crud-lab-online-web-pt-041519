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
      <div>
        <h3>Recent Reviews:</h3>
        <ul>
          {allRevs}
        </ul>
      </div>
    );
  }
};

export default Reviews;