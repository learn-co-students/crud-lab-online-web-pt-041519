import React, { Component } from 'react'
import Reviews from '../components/reviews/Reviews'
import { connect } from 'react-redux'
import ReviewInput from '../components/reviews/ReviewInput'
class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        
        <Reviews 
          reviews={this.props.reviews}
          restaurantId={this.props.restaurant.id}
          deleteReview={this.props.deleteReview} 
        />
          <ReviewInput 
            restaurantId={this.props.restaurant.id} 
            addReview={this.props.addReview}
          />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  reviews: state.reviews
})

const mapDispatchToProps = dispatch => ({
  addReview: review => dispatch({ type: "ADD_REVIEW", review }),
  deleteReview: id => dispatch({ type: "DELETE_REVIEW", id})
  
})

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)
