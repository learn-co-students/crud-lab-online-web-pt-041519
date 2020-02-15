import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'

class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput addReview={this.props.addReview} restaurantId={this.props.restaurant.id}/>
        <Reviews reviews={this.props.reviews} restaurantId={this.props.restaurant.id} deleteReview={this.props.deleteReview} />
      </div>
    )
  }
}

const mapStateToProps = store => {
  return {
    reviews: store.reviews
  }
}

const mapDispatchToProps = dispatch => ({
  addReview: review => dispatch({ type: 'ADD_REVIEW', review: review }),
  deleteReview: reviewId => dispatch({ type: 'DELETE_REVIEW', id: reviewId})
})

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)
