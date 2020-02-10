import React, { Component } from 'react';
import Review from './Review';
import { connect } from 'react-redux'

class Reviews extends Component {
  render() {
    return (
      <ul>
        Reviews
        {this.props.reviews.map(review => <Review review={review} text={review.text} id={review.id} delete={this.props.deleteReview}/>)}
      </ul>
    );
  }
};

const mapDispatchToProps = dispatch => ({
  deleteReview: id => dispatch({type: 'DELETE_REVIEW', id})
})


export default connect(null, mapDispatchToProps)(Reviews);