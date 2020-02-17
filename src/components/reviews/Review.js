// import React, { Component } from 'react';

// class Review extends Component {

//   render() {
//     const { review } = this.props

//     return (
//       <div>
//         <li>
//           {review.text}
//         </li>
//         <button> X </button>
//       </div>
//     );
//   }

// };

// export default Review;

import React from "react";

const Review = ({ review, deleteReview }) => {
  console.log(review);

  const handleClick = () => {
    deleteReview(review.id);
  };

  return (
    <div>
      <li>
        {review.text}
        <button onClick={handleClick}> X </button>
      </li>
    </div>
  );
};

export default Review;
