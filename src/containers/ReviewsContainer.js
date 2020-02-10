import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import { connect } from 'react-redux'

class ReviewsContainer extends Component {


  render() {
    return (
      <div>
        <ReviewInput restaurantId={this.props.restaurantId} addReview={this.props.addReview} />
        <Reviews reviews={this.props.reviews} />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  let reviews = state.reviews.filter(review => review.restaurantId === ownProps.restaurantId )
  return { reviews }
}


const mapDispatchToProps = (dispatch) => ({
  addReview: (restaurantId, review) => {
    dispatch({
      type: 'ADD_REVIEW',
      restaurantId: restaurantId,
      review: review
    })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)
