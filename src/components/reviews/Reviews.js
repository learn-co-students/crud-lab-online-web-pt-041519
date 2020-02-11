import React, { Component } from 'react';
import Review from './Review';
import { connect } from 'react-redux'

class Reviews extends Component {
  
  renderReviews = () => {
    let associatedReviews = this.props.reviews.filter(review => review.restaurantId === this.props.restaurantId )
    // let associatedReviews = this.props.reviews
    return associatedReviews.map(review => <Review key={review.id} review={review} text={review.text} id={review.id} restaurantId={review.restaurantId} delete={this.props.deleteReview}/> )
  }
  render() {
    
    return (
      <ul>
        {this.renderReviews()}
      </ul>
    );
  }
};

const mapDispatchToProps = dispatch => ({
  deleteReview: id => dispatch({type: 'DELETE_REVIEW', id})
})


export default connect(null, mapDispatchToProps)(Reviews);