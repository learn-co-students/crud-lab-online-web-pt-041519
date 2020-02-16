import React, { Component } from 'react';
import Restaurant from './Restaurant'
import cuid from 'cuid';

class Restaurants extends Component {
  
  render() {
    return(
      <ul>
        <h3>Restaurants:</h3>
        {this.props.restaurants.map(rest =>
          <Restaurant
            key={cuid()} 
            restaurant={rest} 
            deleteRestaurant={this.props.deleteRestaurant}
          /> 
          )}
        
      </ul>
    );
  }
};


export default Restaurants;