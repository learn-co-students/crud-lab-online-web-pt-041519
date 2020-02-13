import React, { Component } from 'react';

class Review extends Component {

  handleClick = (e) => {
    const { review } = this.props
    this.props.deleteReview(review.id)
  }

  render() {

    const { review } = this.props

    return (
      <div>
        <li>
          {review.text}
        </li>
        <button onClick={ (e) => {this.handleClick(e)} }> Delete</button>
      </div>
    );
  }

};

export default Review;
