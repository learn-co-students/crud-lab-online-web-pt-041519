import React from 'react';

const Review = props => {

    const { review } = props

    return (
      <div>
        <li>
          {review.text}
        </li>
        <button onClick={() => props.deleteReview(review.id)}> X </button>
      </div>
    );
  }

export default Review;
