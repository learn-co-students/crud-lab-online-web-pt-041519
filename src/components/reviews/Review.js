import React, { Component } from 'react';

class Review extends Component {

  handleDelete = event => this.props.deleteReview(this.props.review.id)

  render() {
    const { review } = this.props

    return (
      <div>
        <li>
          {review.text}
        </li>
        <button onClick={ event => this.handleDelete(event)}> X </button>
      </div>
    );
  }

};

export default Review;
