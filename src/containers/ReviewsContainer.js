import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import { connect } from 'react-redux'

class ReviewsContainer extends Component {


  render() {
    return (
      <div>
        <ReviewInput restaurantId={this.props.restaurantId} addReview={this.props.addReview} />
        <Reviews reviews={this.props.reviews} restaurantId={this.props.restaurantId} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { reviews: state.reviews }
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
