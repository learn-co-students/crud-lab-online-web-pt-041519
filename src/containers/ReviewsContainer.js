import React, { Component } from "react";
import ReviewInput from "../components/reviews/ReviewInput";
import Reviews from "../components/reviews/Reviews";
import { connect } from "react-redux";

class ReviewsContainer extends Component {
  render() {
    const { restaurant, reviews, addReview, deleteReview } = this.props;
    // console.log(reviews);
    return (
      <div>
        <ReviewInput addReview={addReview} restaurantId={restaurant.id} />
        <Reviews
          reviews={reviews}
          deleteReview={deleteReview}
          restaurantId={restaurant.id}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    reviews: state.reviews
  };
};

const mapDispatchToProps = dispatch => ({
  addReview: review =>
    dispatch({
      type: "ADD_REVIEW",
      payload: review
    }),
  deleteReview: id =>
    dispatch({
      type: "DELETE_REVIEW",
      payload: id
    })
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer);
