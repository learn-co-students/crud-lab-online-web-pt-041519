import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer'

import cuid from 'cuid';

class Restaurant extends Component {

  handleOnClick = () => {
    this.props.deleteRestaurant(this.props.restaurant.id)
  }


  render() {
    const { restaurant } = this.props;

    return (
      <div>
        {console.log(this.props)}
        <li key={cuid()}>
          {restaurant.text}
          <button onClick={this.handleOnClick}> X </button>
        </li>

      
        <ReviewsContainer restaurant={restaurant} />
        
      </div>
    );
  }
};

export default Restaurant;
