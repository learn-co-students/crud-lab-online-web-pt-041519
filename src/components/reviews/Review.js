import React from 'react';

const Review = props => {
  const { review } = props
  return (
    <li>
      {review.text}
      <button onClick={() => props.deleteReview(review.id)}> X </button>
    </li>
  );
};

export default Review;