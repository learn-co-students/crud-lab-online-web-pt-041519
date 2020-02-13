import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  render() {
    const reviewsForThis = this.props.reviews.filter(r => r.restaurantId === this.props.restaurantId) 
    return (
        <ul>
          {reviewsForThis.map(r => <Review review={r} deleteReview={this.props.deleteReview}/>)}
        </ul>
      );
    }

};

export default Reviews;