import React from 'react';
import Restaurant from './Restaurant';

const Restaurants = props => {
  console.log(props)

  const restaurants = props.restaurants.map(restaurant => <Restaurant key={restaurant.id} restaurant={restaurant} deleteRestaurant={props.deleteRestaurant} />)
  
    return(
      <div>
        <ul>
          { restaurants }
        </ul>
      </div>
    );
  }

export default Restaurants;