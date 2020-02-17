import React from "react";
import Restaurant from "./Restaurant";

const Restaurants = ({ restaurants, remove }) => {
  return (
    <ul>
      {restaurants.map(restaurant => (
        <Restaurant
          key={restaurant.id}
          restaurant={restaurant}
          remove={remove}
        />
      ))}
    </ul>
  );
};

export default Restaurants;
