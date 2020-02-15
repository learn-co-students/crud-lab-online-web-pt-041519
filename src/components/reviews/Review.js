import React, { Component } from 'react';
import cuid from 'cuid';

class Review extends Component {
  handleOnClick = () => {
    this.props.deleteReview(this.props.review.id)
  }

  render() {
    const { review} = this.props

    return (
      <div>
        <li key={cuid()}>
          {review.text}
          <button onClick={this.handleOnClick}> X </button>
        </li>
        
      </div>
    );
  }

};

export default Review;
