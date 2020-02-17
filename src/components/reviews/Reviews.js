// import React, { Component } from 'react';
// import Review from './Review';

// class Reviews extends Component {
//   render() {
//     return (
//       <ul>
//         Reviews
//       </ul>
//     );
//   }
// };

// export default Reviews;

import React from "react";
import Review from "./Review";

const Reviews = ({ reviews, deleteReview, restaurantId }) => {
  // console.log(restaurant);
  console.log(reviews);

  const correctReviews = reviews.filter(
    review => review.restaurantId === restaurantId
  );

  // console.log(correctReviews);

  return (
    <ul>
      {correctReviews.map(review => (
        <Review key={review.id} review={review} deleteReview={deleteReview} />
      ))}
    </ul>
  );
};

export default Reviews;
