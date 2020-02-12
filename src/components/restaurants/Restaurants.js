import React from 'react';
import Restaurant from './Restaurant';

const Restaurants = props => {
  console.log("Restaurants")
  console.log(props)

  const restaurants = props.restaurants.map(r => <Restaurant key={r.id} restaurant={r} deleteRestaurant={props.deleteRestaurant} />)

  return (
    <div>
      <ul>
        {restaurants}
      </ul>
    </div>
  )
};

export default Restaurants;