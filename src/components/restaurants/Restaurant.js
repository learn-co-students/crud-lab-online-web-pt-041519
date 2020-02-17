// import React, { Component } from "react";
// import ReviewsContainer from "../../containers/ReviewsContainer";

// class Restaurant extends Component {
//   render() {
//     const { restaurant } = this.props;

//     return (
//       <div>
//         <li>
//           {restaurant.text}
//           <button> X </button>
//           <ReviewsContainer restaurant={restaurant} />
//         </li>
//       </div>
//     );
//   }
// }

// export default Restaurant;

import React from "react";
import ReviewsContainer from "../../containers/ReviewsContainer";

const Restaurant = ({ remove, restaurant }) => {
  const handleClick = () => remove(restaurant.id);

  return (
    <div>
      <li>
        {restaurant.text}
        <button onClick={handleClick}> X </button>
        <ReviewsContainer restaurant={restaurant} />
      </li>
    </div>
  );
};

export default Restaurant;
