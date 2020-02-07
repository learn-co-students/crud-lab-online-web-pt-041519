import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import { connect } from 'react-redux'
import Restaurant from '../components/restaurants/Restaurant'

class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput addReview={this.props.addReview} resId={this.props.restaurantId}/>
        {console.log(this.props.reviews.reviews)}
        <Reviews deleteReview={this.props.deleteReview} review={this.props.reviews.reviews.filter(r => r.restaurantId === this.props.restaurantId)}/>
      </div>
    )
  }
}

const mapStateToProps = ({ reviews }) => ({ reviews })

const mapDispatchToProps = dispatch => ({
  addReview: (text, restaurantId) => dispatch({type: "ADD_REVIEW", text, restaurantId}),
  deleteReview: id => dispatch({type: "DELETE_REVIEW", id})
})

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)
