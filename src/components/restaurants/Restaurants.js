import React, { Component } from 'react';
import Restaurant from './Restaurant'
import { connect } from 'react-redux'

class Restaurants extends Component {
  
  render() {
    return(
      <ul>
        {this.props.restaurants.map(
          restaurant => 
          <Restaurant 
            restaurant={restaurant}
            text={restaurant.text} 
            id={restaurant.id} 
            key={restaurant.id} 
            delete={this.props.deleteRestaurant}
          />
        )}
      </ul>
    );
  }
};

const mapDispatchToProps = dispatch => ({
  deleteRestaurant: id => dispatch({type: 'DELETE_RESTAURANT', id})
})

export default connect(null, mapDispatchToProps)(Restaurants);