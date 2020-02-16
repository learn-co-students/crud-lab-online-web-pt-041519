import React, { Component } from 'react';
import cuid from 'cuid';

class Review extends Component {
  handleOnClick = () => {
    this.props.deleteReview(this.props.review.id)
  }

  render() {
    const { review} = this.props

    return (
        <li key={cuid()}>
          <p>{review.text}</p>
          <button onClick={this.handleOnClick}> X </button>
        </li> 

    );
  }

};

export default Review;
