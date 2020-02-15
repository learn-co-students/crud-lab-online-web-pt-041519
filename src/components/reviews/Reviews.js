import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  renderReviews = () => {
    let reviews = this.props.reviews.filter( r => r.restaurantId === this.props.restaurantId)
    return reviews.map( r => <Review key={r.id} review={r} restaurantId={r.restaurantId} deleteReview={this.props.deleteReview} /> )
  }

  render() {
    return (
      <ul>
        {this.renderReviews()}
      </ul>
    );
  }
};

export default Reviews;